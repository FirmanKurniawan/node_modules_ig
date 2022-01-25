"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Bluebird = require("bluebird");
const Chance = require("chance");
const request_1 = require("request");
const tough_cookie_1 = require("tough-cookie");
const devices = require("../samples/devices.json");
const builds = require("../samples/builds.json");
const supportedCapabilities = require("../samples/supported-capabilities.json");
const Constants = require("./constants");
const errors_1 = require("../errors");
const decorators_1 = require("../decorators");
const debug_1 = require("debug");
class State {
    constructor() {
        this.constants = Constants;
        this.supportedCapabilities = supportedCapabilities;
        this.language = 'en_US';
        this.timezoneOffset = String(new Date().getTimezoneOffset() * -60);
        this.radioType = 'wifi-none';
        this.capabilitiesHeader = '3brTvwE=';
        this.connectionTypeHeader = 'WIFI';
        this.isLayoutRTL = false;
        this.euDCEnabled = undefined;
        this.adsOptOut = false;
        this.thumbnailCacheBustingValue = 1000;
        this.cookieStore = new tough_cookie_1.MemoryCookieStore();
        this.cookieJar = request_1.jar(this.cookieStore);
        this.checkpoint = null;
        this.challenge = null;
        this.clientSessionIdLifetime = 1200000;
        this.pigeonSessionIdLifetime = 1200000;
    }
    get signatureKey() {
        return this.constants.SIGNATURE_KEY;
    }
    get signatureVersion() {
        return this.constants.SIGNATURE_VERSION;
    }
    get userBreadcrumbKey() {
        return this.constants.BREADCRUMB_KEY;
    }
    get appVersion() {
        return this.constants.APP_VERSION;
    }
    get appVersionCode() {
        return this.constants.APP_VERSION_CODE;
    }
    get fbAnalyticsApplicationId() {
        return this.constants.FACEBOOK_ANALYTICS_APPLICATION_ID;
    }
    get fbOtaFields() {
        return this.constants.FACEBOOK_OTA_FIELDS;
    }
    get fbOrcaApplicationId() {
        return this.constants.FACEBOOK_ORCA_APPLICATION_ID;
    }
    get loginExperiments() {
        return this.constants.LOGIN_EXPERIMENTS;
    }
    get experiments() {
        return this.constants.EXPERIMENTS;
    }
    get bloksVersionId() {
        return this.constants.BLOKS_VERSION_ID;
    }
    get clientSessionId() {
        return this.generateTemporaryGuid('clientSessionId', this.clientSessionIdLifetime);
    }
    get pigeonSessionId() {
        return this.generateTemporaryGuid('pigeonSessionId', this.pigeonSessionIdLifetime);
    }
    get appUserAgent() {
        return `Instagram ${this.appVersion} Android (${this.deviceString}; ${this.language}; ${this.appVersionCode})`;
    }
    get webUserAgent() {
        return `Mozilla/5.0 (Linux; Android ${this.devicePayload.android_release}; ${this.devicePayload.model} Build/${this.build}; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/70.0.3538.110 Mobile Safari/537.36 ${this.appUserAgent}`;
    }
    get devicePayload() {
        const deviceParts = this.deviceString.split(';');
        const [android_version, android_release] = deviceParts[0].split('/');
        const [manufacturer] = deviceParts[3].split('/');
        const model = deviceParts[4];
        return {
            android_version,
            android_release,
            manufacturer,
            model,
        };
    }
    get batteryLevel() {
        const chance = new Chance(this.deviceId);
        const percentTime = chance.integer({ min: 200, max: 600 });
        return 100 - (Math.round(Date.now() / 1000 / percentTime) % 100);
    }
    get isCharging() {
        const chance = new Chance(`${this.deviceId}${Math.round(Date.now() / 10800000)}`);
        return chance.bool();
    }
    get challengeUrl() {
        if (!this.checkpoint) {
            throw new errors_1.IgNoCheckpointError();
        }
        return `/api/v1${this.checkpoint.challenge.api_path}`;
    }
    get cookieCsrfToken() {
        try {
            return this.extractCookieValue('csrftoken');
        }
        catch (_a) {
            State.stateDebug('csrftoken lookup failed, returning "missing".');
            return 'missing';
        }
    }
    get cookieUserId() {
        return this.extractCookieValue('ds_user_id');
    }
    get cookieUsername() {
        return this.extractCookieValue('ds_user');
    }
    isExperimentEnabled(experiment) {
        return this.experiments.includes(experiment);
    }
    extractCookie(key) {
        const cookies = this.cookieJar.getCookies(this.constants.HOST);
        return _.find(cookies, { key }) || null;
    }
    extractCookieValue(key) {
        const cookie = this.extractCookie(key);
        if (cookie === null) {
            State.stateDebug(`Could not find ${key}`);
            throw new errors_1.IgCookieNotFoundError(key);
        }
        return cookie.value;
    }
    extractUserId() {
        try {
            return this.cookieUserId;
        }
        catch (e) {
            if (this.challenge === null || !this.challenge.user_id) {
                throw new errors_1.IgUserIdNotFoundError();
            }
            return String(this.challenge.user_id);
        }
    }
    async deserializeCookieJar(cookies) {
        this.cookieJar['_jar'] = await Bluebird.fromCallback(cb => tough_cookie_1.CookieJar.deserialize(cookies, this.cookieStore, cb));
    }
    async serializeCookieJar() {
        return Bluebird.fromCallback(cb => this.cookieJar['_jar'].serialize(cb));
    }
    async serialize() {
        const obj = {
            constants: this.constants,
            cookies: JSON.stringify(await this.serializeCookieJar()),
        };
        for (const [key, value] of Object.entries(this)) {
            obj[key] = value;
        }
        return obj;
    }
    async deserialize(state) {
        State.stateDebug(`Deserializing state of type ${typeof state}`);
        const obj = typeof state === 'string' ? JSON.parse(state) : state;
        if (typeof obj !== 'object') {
            State.stateDebug(`State deserialization failed, obj is of type ${typeof obj} (object expected)`);
            throw new TypeError('State isn\'t an object or serialized JSON');
        }
        State.stateDebug(`Deserializing ${Object.keys(obj).join(', ')}`);
        if (obj.constants) {
            this.constants = obj.constants;
            delete obj.constants;
        }
        if (obj.cookies) {
            await this.deserializeCookieJar(obj.cookies);
            delete obj.cookies;
        }
        for (const [key, value] of Object.entries(obj)) {
            this[key] = value;
        }
    }
    generateDevice(seed) {
        const chance = new Chance(seed);
        this.deviceString = chance.pickone(devices);
        const id = chance.string({
            pool: 'abcdef0123456789',
            length: 16,
        });
        this.deviceId = `android-${id}`;
        this.uuid = chance.guid();
        this.phoneId = chance.guid();
        this.adid = chance.guid();
        this.build = chance.pickone(builds);
    }
    generateTemporaryGuid(seed, lifetime) {
        return new Chance(`${seed}${this.deviceId}${Math.round(Date.now() / lifetime)}`).guid();
    }
}
State.stateDebug = debug_1.default('ig:state');
__decorate([
    decorators_1.Enumerable(false),
    __metadata("design:type", Object)
], State.prototype, "constants", void 0);
__decorate([
    decorators_1.Enumerable(false),
    __metadata("design:type", String)
], State.prototype, "proxyUrl", void 0);
__decorate([
    decorators_1.Enumerable(false),
    __metadata("design:type", Object)
], State.prototype, "cookieStore", void 0);
__decorate([
    decorators_1.Enumerable(false),
    __metadata("design:type", Object)
], State.prototype, "cookieJar", void 0);
__decorate([
    decorators_1.Enumerable(false),
    __metadata("design:type", Object)
], State.prototype, "checkpoint", void 0);
__decorate([
    decorators_1.Enumerable(false),
    __metadata("design:type", Object)
], State.prototype, "challenge", void 0);
exports.State = State;
//# sourceMappingURL=state.js.map
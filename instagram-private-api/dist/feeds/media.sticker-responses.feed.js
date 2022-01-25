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
const feed_1 = require("../core/feed");
const class_transformer_1 = require("class-transformer");
class MediaStickerResponsesFeed extends feed_1.Feed {
    constructor() {
        super(...arguments);
        this.maxId = undefined;
    }
    async items() {
        const response = await this.request();
        return response[this.rootName][this.itemName];
    }
    async request() {
        const { body } = await this.client.request.send({
            url: `/api/v1/media/${this.mediaId}/${this.stickerId}/${this.name}/`,
            method: 'GET',
            qs: {
                max_id: this.maxId || void 0,
            },
        });
        this.state = body;
        return body;
    }
    set state(response) {
        this.maxId = response[this.rootName].max_id;
        this.moreAvailable = response[this.rootName].more_available;
    }
}
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], MediaStickerResponsesFeed.prototype, "maxId", void 0);
exports.MediaStickerResponsesFeed = MediaStickerResponsesFeed;
//# sourceMappingURL=media.sticker-responses.feed.js.map
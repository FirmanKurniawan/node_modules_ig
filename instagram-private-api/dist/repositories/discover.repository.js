"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("../core/repository");
class DiscoverRepository extends repository_1.Repository {
    async chaining(targetId) {
        const { body } = await this.client.request.send({
            url: '/api/v1/discover/chaining/',
            qs: {
                target_id: targetId,
            },
        });
        return body;
    }
    async topicalExplore() {
        const { body } = await this.client.request.send({
            url: '/api/v1/discover/topical_explore/',
            qs: {
                is_prefetch: true,
                omit_cover_media: false,
                use_sectional_payload: true,
                timezone_offset: this.client.state.timezoneOffset,
                session_id: this.client.state.clientSessionId,
                include_fixed_destinations: false,
            },
        });
        return body;
    }
    async markSuSeen() {
        const { body } = await this.client.request.send({
            url: '/api/v1/discover/mark_su_seen/',
            method: 'POST',
            form: this.client.request.sign({
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
            }),
        });
        return body;
    }
    async profileSuBadge() {
        const { body } = await this.client.request.send({
            url: '/api/v1/discover/profile_su_badge/',
            method: 'POST',
            form: this.client.request.sign({
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
            }),
        });
        return body;
    }
}
exports.DiscoverRepository = DiscoverRepository;
//# sourceMappingURL=discover.repository.js.map
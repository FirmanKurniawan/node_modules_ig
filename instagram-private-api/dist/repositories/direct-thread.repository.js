"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("../core/repository");
const Chance = require("chance");
class DirectThreadRepository extends repository_1.Repository {
    async approve(threadId) {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/${threadId}/approve/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
            },
        });
        return body;
    }
    async approveMultiple(threadIds) {
        const { body } = await this.client.request.send({
            url: '/api/v1/direct_v2/threads/approve_multiple/',
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
                thread_ids: JSON.stringify(threadIds),
            },
        });
        return body;
    }
    async decline(threadId) {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/${threadId}/decline/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
            },
        });
        return body;
    }
    async declineMultiple(threadIds) {
        const { body } = await this.client.request.send({
            url: '/api/v1/direct_v2/threads/decline_multiple/',
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
                thread_ids: JSON.stringify(threadIds),
            },
        });
        return body;
    }
    async declineAll() {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/decline_all/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
            },
        });
        return body;
    }
    async approveParticipantRequests(threadId, userIds) {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/${threadId}/approve_participant_requests/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                user_ids: JSON.stringify(userIds),
                share_join_chat_story: true,
                _uuid: this.client.state.uuid,
            },
        });
        return body;
    }
    async getByParticipants(recipientUsers) {
        const { body } = await this.client.request.send({
            url: '/api/v1/direct_v2/threads/get_by_participants/',
            method: 'GET',
            qs: {
                recipient_users: JSON.stringify(recipientUsers),
            },
        });
        return body;
    }
    async updateTitle(threadId, title) {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/${threadId}/update_title/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
                title,
            },
        });
        return body;
    }
    async mute(threadId) {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/${threadId}/mute/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
            },
        });
        return body;
    }
    async unmute(threadId) {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/${threadId}/unmute/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
            },
        });
        return body;
    }
    async addUser(threadId, userIds) {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/${threadId}/add_user/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                user_ids: JSON.stringify(userIds),
                _uuid: this.client.state.uuid,
            },
        });
        return body;
    }
    async leave(threadId) {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/${threadId}/leave/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
            },
        });
        return body;
    }
    async hide(threadId) {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/${threadId}/hide/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
                use_unified_inbox: true,
            },
        });
        return body;
    }
    async markItemSeen(threadId, threadItemId) {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/${threadId}/items/${threadItemId}/seen/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
                use_unified_inbox: true,
                action: 'mark_seen',
                thread_id: threadId,
                item_id: threadItemId,
            },
        });
        return body;
    }
    async broadcast(options) {
        const mutationToken = new Chance().guid();
        const recipients = options.threadIds || options.userIds;
        const recipientsType = options.threadIds ? 'thread_ids' : 'recipient_users';
        const recipientsIds = recipients instanceof Array ? recipients : [recipients];
        const form = Object.assign({ action: 'send_item', [recipientsType]: JSON.stringify(recipientsType === 'thread_ids' ? recipientsIds : [recipientsIds]), client_context: mutationToken, _csrftoken: this.client.state.cookieCsrfToken, device_id: this.client.state.deviceId, mutation_token: mutationToken, _uuid: this.client.state.uuid }, options.form);
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/broadcast/${options.item}/`,
            method: 'POST',
            form: options.signed ? this.client.request.sign(form) : form,
            qs: options.qs,
        });
        return body;
    }
    async deleteItem(threadId, itemId) {
        const { body } = await this.client.request.send({
            url: `/api/v1/direct_v2/threads/${threadId}/items/${itemId}/delete/`,
            method: 'POST',
            form: {
                _csrftoken: this.client.state.cookieCsrfToken,
                _uuid: this.client.state.uuid,
            },
        });
        return body;
    }
}
exports.DirectThreadRepository = DirectThreadRepository;
//# sourceMappingURL=direct-thread.repository.js.map
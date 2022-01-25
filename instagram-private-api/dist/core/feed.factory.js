"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feeds_1 = require("../feeds");
const class_transformer_1 = require("class-transformer");
const Chance = require("chance");
const user_story_feed_1 = require("../feeds/user-story.feed");
const list_reel_media_viewer_feed_1 = require("../feeds/list-reel-media-viewer.feed");
const media_inline_child_comments_feed_1 = require("../feeds/media.inline-child-comments.feed");
const media_sticker_responses_feed_1 = require("../feeds/media.sticker-responses.feed");
class FeedFactory {
    constructor(client) {
        this.client = client;
    }
    accountFollowers(id) {
        const feed = new feeds_1.AccountFollowersFeed(this.client);
        feed.id = id || this.client.state.cookieUserId;
        return feed;
    }
    accountFollowing(id) {
        const feed = new feeds_1.AccountFollowingFeed(this.client);
        feed.id = id || this.client.state.cookieUserId;
        return feed;
    }
    news() {
        return new feeds_1.NewsFeed(this.client);
    }
    discover() {
        return new feeds_1.DiscoverFeed(this.client);
    }
    pendingFriendships() {
        return new feeds_1.PendingFriendshipsFeed(this.client);
    }
    blockedUsers() {
        return new feeds_1.BlockedUsersFeed(this.client);
    }
    directInbox() {
        return new feeds_1.DirectInboxFeed(this.client);
    }
    directPending() {
        return new feeds_1.DirectPendingInboxFeed(this.client);
    }
    directThread(options, seqId) {
        const feed = new feeds_1.DirectThreadFeed(this.client);
        feed.id = options.thread_id;
        feed.cursor = options.oldest_cursor;
        feed.seqId = seqId;
        return feed;
    }
    user(id) {
        const feed = new feeds_1.UserFeed(this.client);
        feed.id = id;
        return feed;
    }
    tag(tag) {
        const feed = new feeds_1.TagFeed(this.client);
        feed.tag = tag;
        return feed;
    }
    tags(tag, tab = 'top') {
        const feed = new feeds_1.TagsFeed(this.client);
        feed.tag = tag;
        feed.tab = tab;
        return feed;
    }
    location(id, tab = 'ranked') {
        const feed = new feeds_1.LocationFeed(this.client);
        feed.id = id;
        feed.tab = tab;
        return feed;
    }
    mediaComments(id) {
        const feed = new feeds_1.MediaCommentsFeed(this.client);
        feed.id = id;
        return feed;
    }
    reelsMedia(options) {
        return class_transformer_1.plainToClassFromExist(new feeds_1.ReelsMediaFeed(this.client), options);
    }
    userStory(userId) {
        return class_transformer_1.plainToClassFromExist(new user_story_feed_1.UserStoryFeed(this.client), { userId });
    }
    reelsTray(reason = 'cold_start') {
        return class_transformer_1.plainToClassFromExist(new feeds_1.ReelsTrayFeed(this.client), { reason });
    }
    timeline(reason) {
        const feed = new feeds_1.TimelineFeed(this.client);
        if (reason) {
            feed.reason = reason;
        }
        return feed;
    }
    musicTrending(product = 'story_camera_music_overlay_post_capture') {
        return class_transformer_1.plainToClassFromExist(new feeds_1.MusicTrendingFeed(this.client), { product });
    }
    musicSearch(query, product = 'story_camera_music_overlay_post_capture') {
        const options = {
            query,
            product,
            searchSessionId: new Chance(query).guid(),
        };
        return class_transformer_1.plainToClassFromExist(new feeds_1.MusicSearchFeed(this.client), options);
    }
    musicGenre(id, product = 'story_camera_music_overlay_post_capture') {
        return class_transformer_1.plainToClassFromExist(new feeds_1.MusicGenreFeed(this.client), {
            id,
            product,
        });
    }
    musicMood(id, product = 'story_camera_music_overlay_post_capture') {
        return class_transformer_1.plainToClassFromExist(new feeds_1.MusicMoodFeed(this.client), {
            id,
            product,
        });
    }
    usertags(id) {
        return class_transformer_1.plainToClassFromExist(new feeds_1.UsertagsFeed(this.client), { id });
    }
    postsInsightsFeed(options) {
        return class_transformer_1.plainToClassFromExist(new feeds_1.PostsInsightsFeed(this.client), { options });
    }
    storiesInsights(timeframe) {
        return class_transformer_1.plainToClassFromExist(new feeds_1.StoriesInsightsFeed(this.client), { timeframe });
    }
    saved() {
        return new feeds_1.SavedFeed(this.client);
    }
    listReelMediaViewers(mediaId) {
        return class_transformer_1.plainToClassFromExist(new list_reel_media_viewer_feed_1.ListReelMediaViewerFeed(this.client), { mediaId });
    }
    mediaInlineChildComments(mediaId, commentId, minId) {
        return class_transformer_1.plainToClassFromExist(new media_inline_child_comments_feed_1.MediaInlineChildCommentsFeed(this.client), {
            mediaId,
            commentId,
            nextMinId: minId,
        });
    }
    igtvBrowse(isPrefetch) {
        return class_transformer_1.plainToClassFromExist(new feeds_1.IgtvBrowseFeed(this.client), {
            isPrefetch: !!isPrefetch,
        });
    }
    storyQuestionResponses(mediaId, stickerId) {
        return class_transformer_1.plainToClassFromExist(new media_sticker_responses_feed_1.MediaStickerResponsesFeed(this.client), {
            mediaId,
            stickerId,
            name: 'story_question_responses',
            rootName: 'responder_info',
            itemName: 'responders',
        });
    }
    storyPollVoters(mediaId, stickerId) {
        return class_transformer_1.plainToClassFromExist(new media_sticker_responses_feed_1.MediaStickerResponsesFeed(this.client), {
            mediaId,
            stickerId,
            name: 'story_poll_voters',
            rootName: 'voter_info',
            itemName: 'voters',
        });
    }
    storyQuizParticipants(mediaId, stickerId) {
        return class_transformer_1.plainToClassFromExist(new media_sticker_responses_feed_1.MediaStickerResponsesFeed(this.client), {
            mediaId,
            stickerId,
            name: 'story_quiz_participants',
            rootName: 'participant_info',
            itemName: 'participants',
        });
    }
    storySliderVoters(mediaId, stickerId) {
        return class_transformer_1.plainToClassFromExist(new media_sticker_responses_feed_1.MediaStickerResponsesFeed(this.client), {
            mediaId,
            stickerId,
            name: 'story_slider_voters',
            rootName: 'voter_info',
            itemName: 'voters',
        });
    }
    igtvChannel(id) {
        if (/[0-9]/.test(id.toString())) {
            id = `user_${id}`;
        }
        return class_transformer_1.plainToClassFromExist(new feeds_1.IgtvChannelFeed(this.client), {
            channelId: id,
        });
    }
    igtvChaining(id) {
        return this.igtvChannel(`chaining_${id}`);
    }
    liked() {
        return new feeds_1.LikedFeed(this.client);
    }
}
exports.FeedFactory = FeedFactory;
//# sourceMappingURL=feed.factory.js.map
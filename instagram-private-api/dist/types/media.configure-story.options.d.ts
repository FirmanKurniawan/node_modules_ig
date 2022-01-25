import { MediaConfigureOptions } from './media.configure.options';
import { MediaConfigureVideoOptions } from './media.configure-video.options';
export interface MediaConfigureStoryBaseOptions {
    story_media_creation_date?: string;
    client_shared_at?: string;
    audience?: 'besties';
    configure_mode: '1' | '2';
    camera_position?: string;
    allow_multi_configures?: '0' | '1';
    thread_ids?: string[] | string;
    recipient_users?: string[] | string;
    client_context?: string;
    view_mode?: 'replayable' | 'once' | string;
    reply_type?: 'story' | string;
    caption?: string;
    mas_opt_in?: 'NOT_PROMPTED';
    story_sticker_ids?: string | 'question_sticker_ma' | 'countdown_sticker_time' | 'chat_sticker_id';
    story_hashtags?: StoryHashtag[] | string;
    story_locations?: [StoryLocation] | string;
    geotag_enabled?: '1' | '0';
    posting_latitude?: string;
    posting_longitude?: string;
    media_latitude?: string;
    media_longitude?: string;
    reel_mentions?: StoryMention[] | string;
    story_polls?: [StoryPoll] | string;
    internal_features?: 'polling_sticker';
    story_sliders?: [StorySlider] | string;
    story_questions?: [StoryQuestion] | string;
    story_countdowns?: [StoryCountdown] | string;
    attached_media?: [StoryAttachedMedia] | string;
    story_chats?: [StoryChat] | string;
    story_quizs?: [StoryQuiz] | string;
    story_cta?: [StoryCta] | string;
}
export interface MediaConfigureStoryPhotoOptions extends MediaConfigureOptions, MediaConfigureStoryBaseOptions {
}
export interface MediaConfigureStoryVideoOptions extends MediaConfigureVideoOptions, MediaConfigureStoryBaseOptions {
}
export interface StoryChat extends StorySticker {
    text: string;
    start_background_color: string;
    end_background_color: string;
    has_started_chat: false;
    is_sticker: true;
}
export interface StorySticker {
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
}
export interface StoryCta {
    links: [{
        webUri: string;
    }];
}
export interface StoryAttachedMedia extends StorySticker {
    media_id: string;
    is_sticker: boolean;
}
export interface StoryCountdown extends StorySticker {
    text: string;
    text_color: string;
    start_background_color: string;
    end_background_color: string;
    digit_color: string;
    digit_card_color: string;
    end_ts: number;
    following_enabled: boolean;
    is_sticker: true;
}
export interface StoryQuestion extends StorySticker {
    viewer_can_interact: true;
    background_color: string;
    text_color: string;
    question_type: 'text';
    question: string;
    profile_pic_url: string;
    is_sticker: true;
}
export interface StorySlider extends StorySticker {
    question: string;
    background_color: string;
    text_color: string;
    emoji: string;
    is_sticker: true;
}
export interface StoryPoll extends StorySticker {
    question: string;
    viewer_vote: 0;
    viewer_can_vote: true;
    is_sticker: true;
    tallies: [StoryPollTallie, StoryPollTallie];
}
export interface StoryPollTallie {
    text: string;
    count: 0;
    font_size: number;
}
export interface StoryMention extends StorySticker {
    user_id: string | number;
}
export interface StoryLocation extends StorySticker {
    is_sticker: boolean;
    location_id: string;
}
export interface StoryHashtag extends StorySticker {
    tag_name: string;
    use_custom_title: boolean;
    is_sticker: boolean;
}
export interface StoryQuiz extends StorySticker {
    question: string;
    options: Array<{
        text: string;
        count: number;
    }>;
    correct_answer: string;
    viewer_can_answer: boolean;
    viewer_answer: number;
    text_color: string;
    start_background_color: string;
    end_background_color: string;
}

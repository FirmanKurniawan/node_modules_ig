import { Response } from 'request';
export declare type IgAppModule = 'feed_timeline' | 'newsfeed' | 'profile' | 'media_view_profile' | 'video_view_profile' | 'photo_view_profile' | 'followers' | 'following' | 'self_followers' | 'self_following' | 'comment_likers' | 'comment_owner' | 'feed_contextual_post' | 'feed_contextual_hashtag' | 'feed_contextual_location' | 'feed_contextual_newsfeed_multi_media_liked' | 'likers_likers_media_view_profile' | 'likers_likers_photo_view_profile' | 'likers_likers_video_view_profile' | 'self_likers_self_likers_media_view_profile' | 'self_likers_self_likers_photo_view_profile' | 'self_likers_self_likers_video_view_profile' | 'story_camera_music_overlay_post_capture' | 'story_camera_music_overlay_pre_capture' | 'story_viewer_profile' | 'story_viewer_default' | 'find_friends_contacts' | 'explore_people' | 'igtv_feed_timeline' | string;
export declare type IgResponse<Body> = Pick<Response, Exclude<keyof Response, 'body'>> & {
    body: Body;
};

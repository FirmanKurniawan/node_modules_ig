import { Feed } from '../core/feed';
import { UserStoryFeedResponseItemsItem, UserStoryFeedResponseRootObject } from '../responses/user-story.feed.response';
export declare class UserStoryFeed extends Feed<UserStoryFeedResponseRootObject, UserStoryFeedResponseItemsItem> {
    userId: string | number;
    items(): Promise<UserStoryFeedResponseItemsItem[]>;
    request(): Promise<UserStoryFeedResponseRootObject>;
    protected set state(response: any);
}

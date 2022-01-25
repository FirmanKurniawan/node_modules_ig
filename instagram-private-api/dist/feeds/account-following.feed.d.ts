import { Feed } from '../core/feed';
import { AccountFollowingFeedResponse, AccountFollowingFeedResponseUsersItem } from '../responses';
export declare class AccountFollowingFeed extends Feed<AccountFollowingFeedResponse, AccountFollowingFeedResponseUsersItem> {
    id: number | string;
    private nextMaxId;
    set state(body: AccountFollowingFeedResponse);
    request(): Promise<AccountFollowingFeedResponse>;
    items(): Promise<AccountFollowingFeedResponseUsersItem[]>;
}

import { Feed } from '../core/feed';
import { DirectInboxFeedResponse, DirectInboxFeedResponseThreadsItem } from '../responses';
import { DirectThreadEntity } from '../entities';
export declare class DirectPendingInboxFeed extends Feed<DirectInboxFeedResponse, DirectInboxFeedResponseThreadsItem> {
    private cursor;
    private seqId;
    set state(body: DirectInboxFeedResponse);
    request(): Promise<DirectInboxFeedResponse>;
    items(): Promise<DirectInboxFeedResponseThreadsItem[]>;
    records(): Promise<DirectThreadEntity[]>;
}

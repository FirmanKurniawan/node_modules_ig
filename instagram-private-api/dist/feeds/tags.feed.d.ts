import { Feed } from '../core/feed';
import { TagsFeedResponse, TagsFeedResponseMedia } from '../responses';
export declare class TagsFeed extends Feed<TagsFeedResponse, TagsFeedResponseMedia> {
    tag: string;
    tab: 'top' | 'recent' | 'places';
    private nextMaxId;
    private nextPage;
    private nextMediaIds;
    protected set state(body: TagsFeedResponse);
    request(): Promise<TagsFeedResponse>;
    items(): Promise<TagsFeedResponseMedia[]>;
}

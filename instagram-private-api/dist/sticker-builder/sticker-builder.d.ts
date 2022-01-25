import { Diff } from 'utility-types';
import { AttachmentSticker, ChatSticker, CountdownSticker, HashtagSticker, InstaSticker, LocationSticker, MentionSticker, PollSticker, QuestionSticker, QuizSticker, SliderSticker } from './stickers';
export declare type StickerConfig = any & {
    story_sticker_ids: any;
};
export declare class StickerBuilder {
    private stickers;
    add(sticker: InstaSticker): this;
    build(): StickerConfig;
    static hashtag(options: Diff<HashtagSticker, InstaSticker>): HashtagSticker;
    static mention(options: Diff<MentionSticker, InstaSticker>): MentionSticker;
    static mentionReel(mediaInfo: {
        pk: string;
        user: {
            pk: string | number;
        };
    }, additional?: Partial<MentionSticker>): MentionSticker;
    static location(options: Diff<LocationSticker, InstaSticker>): LocationSticker;
    static countdown(options: Diff<CountdownSticker, InstaSticker>): CountdownSticker;
    static chat(options: Diff<ChatSticker, InstaSticker>): ChatSticker;
    static poll(options: Diff<PollSticker, InstaSticker>): PollSticker;
    static question(options: Diff<QuestionSticker, InstaSticker>): QuestionSticker;
    static quiz(options: Diff<QuizSticker, InstaSticker>): QuizSticker;
    static slider(options: Diff<SliderSticker, InstaSticker>): SliderSticker;
    static attachment(options: Diff<AttachmentSticker, InstaSticker>): AttachmentSticker;
    static attachmentFromMedia(mediaInfo: {
        pk: string;
        user: {
            pk: string | number;
        };
    }, additional?: Partial<AttachmentSticker>): AttachmentSticker;
}

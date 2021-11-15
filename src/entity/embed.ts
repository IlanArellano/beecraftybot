import { ColorResolvable } from 'discord.js';

interface Author {
    name: string;
    icon_url: string;
    url: string;
}

interface ThumbnailorImage {
    url: string | undefined;
}

interface Fields {
    name: string;
    value: string;
    inline?: boolean;
}

interface Footer {
    text: string;
    icon_url: string;
}

export interface EmbedModel {
    color: ColorResolvable;
    url?: string;
    title: string;
    author: Author;
    description: string;
    thumbnail: ThumbnailorImage | undefined;
    fields: Fields[];
    image: ThumbnailorImage | undefined;
    timestamp: Date;
    footer: Footer;
}
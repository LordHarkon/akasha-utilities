import { md5 } from "./md5";

export type DefaultType = "404" | "mp" | "identicon" | "monsterid" | "wavatar" | "retro" | "robohash" | "blank";

export const DefaultOptions = ["404", "mp", "identicon", "monsterid", "wavatar", "retro", "robohash", "blank"];

export type RatingType = "g" | "pg" | "r" | "x";

export type GravatarOptions = {
    s?: number;
    size?: number;
    d?: DefaultType;
    default?: DefaultType;
    r?: RatingType;
    rating?: RatingType;
};

export const avatarURL = (email: string, options: GravatarOptions) => {
    const baseURL = "https://www.gravatar.com/avatar/";

    if (options?.s || options?.size) {
        if (options?.s < 1 || options?.size) throw new Error("Size cannot be smaller than 1px");
        if (options?.s > 2048 || options?.size > 2048) throw new Error("Size cannot be bigger than 2048px");
    }

    if (options?.d)
        if (!DefaultOptions.includes(options.d)) throw new Error(`${options.d} is not a valid default option`);

    if (options?.default)
        if (!DefaultOptions.includes(options.default))
            throw new Error(`${options.default} is not a valid default option`);

    const hash = md5(email);
    const query = new URLSearchParams(options as Record<string, string>);

    return baseURL + hash + query.toString();
};

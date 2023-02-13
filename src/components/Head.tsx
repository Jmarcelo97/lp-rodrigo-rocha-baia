import NextHead from "next/head";

type HeadProps = {
    title?: string;
};

export function Head({ title }: HeadProps) {
    return (
        <NextHead>
            <title>{title ? `${title} | Rodrigo Rocha Baia` : "Rodrigo Rocha Baia"}</title>
        </NextHead>
    );
}
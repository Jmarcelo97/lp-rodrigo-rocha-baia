import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="pt-BR" className="scroll-smooth">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />

                <link rel="icon" type="image/png" sizes="64x64" href="/favicon64x64.png" />
                <link rel="shortcut icon" href="/favicon32x32.png" />

                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@700&family=Poppins:wght@300;400;700&display=swap" />
            </Head>
            <body className="bg-gradient-to-l from-[#016D6A] to-black">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
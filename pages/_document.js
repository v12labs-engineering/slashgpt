/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>SlashGPT - Instant ChatGPT access wherever you want</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
        <meta name="description" content="SlashGPT - Instant ChatGPT access wherever you want." />
        <meta property="og:title" content="/gpt" />
        <meta property="og:description" content="SlashGPT - Instant ChatGPT access wherever you want." />
        <meta property="og:image" content="/image2.png" />
        <meta property="og:url" content="https://slashgpt.xyz" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-96BV5EPXF2"/>
        <script async src='/crisp.js'/>
      </body>
    </Html>
  )
}

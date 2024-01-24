import Head from "next/head";
import { AppProps } from "next/app";
import { Stack } from "@mui/material"
import { EmotionCache } from "@emotion/react";
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;
  return (
      <Stack>
        <Head>
          <title>Vault</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Stack>
  );
}
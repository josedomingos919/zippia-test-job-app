import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../src/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

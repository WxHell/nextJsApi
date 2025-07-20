// pages/_app.js

import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  // Check if the page has a getLayout function
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

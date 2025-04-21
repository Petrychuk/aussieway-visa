// pages/_app.js
import '@/styles/globals.css';
import Wrapper from '@/components/common/Wrapper';

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}


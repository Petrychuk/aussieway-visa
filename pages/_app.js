// pages/_app.js
import '@/styles/globals.css';
import 'animate.css';
import Wrapper from '@/components/layout/Wrapper';

export default function App({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}


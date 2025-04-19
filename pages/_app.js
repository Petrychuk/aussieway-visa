import '@/styles/base/globals.css';
import '@/styles/base/variables.css';
import '@/styles/layout/header.module.css';
//import '@/styles/layout/footer.css';
//import '@/styles/layout/intro.css';
import '@/styles/responsive/mobile.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// components/common/Wrapper.js
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer/Footer';

export default function Wrapper({ children }) {
  return (
    <>
      <Header /> 
      <main className="wrapper">{children}</main>
      <Footer /> 
    </>
  );
}


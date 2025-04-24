import { useState, useEffect } from 'react';
import styles from '@/styles/layout/subscribe.module.css';
import 'animate.css';
import Image from 'next/image';
import qrCode from '@/public/img/qr-whatsapp.png';

export default function SubscribeBlock() {
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.preventDefault();
      setError('Please enter a valid email address.');
      setStatus('');
    } else {
      setError('');
      setStatus('subscribed');
      setSubmitting(true);
    }
  };

  useEffect(() => {
    if (status === 'subscribed') {
      const timeout = setTimeout(() => {
        setStatus('');
        setEmail('');
        setName('');
        setSubmitting(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  return (
    <section className={`${styles.subscribeSection} animate__animated animate__fadeIn`}> 
      <div className={styles.container}>
        <h2 className={styles.title}>Stay Updated!</h2>
        <p className={styles.subtitle}>Subscribe for the latest visa news, tips and resources straight to your inbox.</p>
        <form
          action="https://online.us9.list-manage.com/subscribe/post?u=6ef3722616ec8c05e7d7cf1ce&amp;id=4ec525948b&amp;f_id=00f669e1f0"
          method="post"
          target="_blank"
          className={`${styles.form} animate__animated animate__fadeInUp animate__delay-1s`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="FNAME"
            placeholder="Your name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="EMAIL"
            placeholder="Your email address"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_6ef3722616ec8c05e7d7cf1ce_4ec525948b" tabIndex="-1" />
          </div>
          <button type="submit" className={styles.button} disabled={submitting}>
            {submitting ? 'Sending...' : 'Subscribe'}
          </button>
        </form>
        {error && (
          <p className={`animate__animated animate__shakeX ${styles.errorMessage}`}>{error}</p>
        )}
        {status === 'subscribed' && !error && (
          <p className={`animate__animated animate__fadeInUp ${styles.successMessage}`}>
            🎉 Thank you for subscribing!
          </p>
        )}

        <div className={styles.qrContainer}>
          <p className={styles.qrNote}>Or connect with us via WhatsApp:</p>
          <a href="https://wa.me/message/WUMLL7EBKTBAJ1" target="_blank" rel="noopener noreferrer">
            <Image src={qrCode} alt="QR WhatsApp" width={150} height={150} />
          </a>
        </div>
      </div>
    </section>
  );
}

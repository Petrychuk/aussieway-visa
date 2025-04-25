import { useState } from 'react';
import styles from '@/styles/layout/contact-form.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.error || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send message.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h3>Make an Enquiry</h3>
      <p>Please use the form below to get in touch with us. We&apos;ll get back to you as soon as possible</p>

      <div className={styles.row}>
        <div style={{ flex: 1 }}>
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className={styles.error}>{errors.name}</div>}
        </div>

        <div style={{ flex: 1 }}>
          <input
            className={styles.input}
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>
      </div>

      <input
        className={styles.input}
        name="subject"
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
      />
      {errors.subject && <div className={styles.error}>{errors.subject}</div>}

      <textarea
        className={styles.textarea}
        name="message"
        placeholder="Type your message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && <div className={styles.error}>{errors.message}</div>}

      <button type="submit" className={styles.button} disabled={isSending}>
        {isSending ? 'Sending...' : 'Send Message'}
      </button>

      {status && (
        <p className={status.type === 'error' ? styles.error : styles.success}>
          {status.message}
        </p>
      )}
    </form>
  );
}

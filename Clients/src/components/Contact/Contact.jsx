import React, { useState } from 'react';
import { BirdFlock, BirdDivider } from '../../design-system/Birds';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

const VISIT_SLOTS = ['Weekday Morning', 'Weekday Afternoon', 'Weekend Morning', 'Weekend Afternoon'];

const INITIAL_FORM = { name: '', email: '', phone: '', slot: '', message: '' };

export default function Contact() {
  const [form, setForm]         = useState(INITIAL_FORM);
  const [errors, setErrors]     = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const sectionRef = useScrollReveal();

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Please enter your name.';
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = 'Enter a valid email address.';
    if (!form.phone.match(/^[0-9+\- ]{8,15}$/)) e.phone = 'Enter a valid phone number.';
    if (!form.slot) e.slot = 'Please select a preferred slot.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    // Simulate async submission (replace with EmailJS or your API)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="contact section section--dark" ref={sectionRef}>
      {/* Decorative birds */}
      <div className="contact__birds" aria-hidden="true">
        <BirdFlock color="rgba(201,168,76,0.12)" />
      </div>

      <div className="container">
        <div className="contact__grid">
          {/* Left info */}
          <div className="contact__info reveal reveal--left">
            <p className="section__eyebrow">Get in Touch</p>
            <span className="gold-line" />
            <h2 className="contact__title">
              Schedule Your<br /><em>Site Visit</em>
            </h2>
            <p className="contact__desc">
              Experience Wood Breeze in person. Our team will guide you through the plots, amenities, and the natural beauty that surrounds this exceptional community.
            </p>

            <BirdDivider color="rgba(201,168,76,0.4)" />

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon" aria-hidden="true">📞</span>
                <div>
                  <div className="contact__detail-label">Phone</div>
                  <a href="tel:+917661955553" className="contact__detail-value">+91 76619 55553</a>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon" aria-hidden="true">✉️</span>
                <div>
                  <div className="contact__detail-label">Email</div>
                  <a href="mailto:info@woodbreeze.in" className="contact__detail-value">info@woodbreeze.in</a>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon" aria-hidden="true">📍</span>
                <div>
                  <div className="contact__detail-label">Office</div>
                  <div className="contact__detail-value contact__detail-value--small">
                    Blisscorp, The Executive Centre, Level 7, Unit 3B,<br />
                    Sattva Knowledge City, Raidurg, Hyderabad — 500 081
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917661955553?text=Hi+Wood+Breeze+Team!+I+would+like+to+know+more+about+your+project."
              target="_blank"
              rel="noopener noreferrer"
              className="contact__whatsapp btn"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 1.5C5.3 1.5 1.5 5.3 1.5 10c0 1.5.4 2.9 1.1 4.1L1.5 18.5l4.5-1.1c1.2.6 2.6 1 4 1 4.7 0 8.5-3.8 8.5-8.5C18.5 5.3 14.7 1.5 10 1.5zm0 15.4c-1.3 0-2.5-.3-3.6-.9l-.3-.2-2.7.7.7-2.6-.2-.3C3.3 12.4 3 11.2 3 10c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7z" fill="#25D366"/>
                <path d="M13.8 11.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.8.9-.1.2-.3.2-.5.1-.8-.4-1.6-.9-2.2-1.6-.4-.5-.8-1-.9-1.2-.1-.2 0-.3.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3 0-.2 0-.3-.1-.5-.1-.2-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.4c-.2 0-.4.1-.6.2-.4.4-1.3 1.2-1.3 3s1.3 3.5 1.5 3.7c.2.2 2.6 4 6.3 5.5 3.7 1.5 3.7 1 4.4.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.5-.4z" fill="#25D366"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="contact__form-wrap reveal reveal--right reveal--delay-2">
            {submitted ? (
              <div className="contact__success" role="alert">
                <div className="contact__success-icon" aria-hidden="true">✓</div>
                <h3>Thank You!</h3>
                <p>We've received your request and will contact you within 24 hours to confirm your site visit.</p>
                <button className="btn btn--outline contact__success-reset" onClick={() => setSubmitted(false)}>
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Site visit booking form"
              >
                <h3 className="contact__form-title">Book a Site Visit</h3>

                <div className="contact__field">
                  <label htmlFor="cf-name" className="contact__label">Full Name *</label>
                  <input
                    id="cf-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                    autoComplete="name"
                    aria-describedby={errors.name ? 'cf-name-error' : undefined}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <span id="cf-name-error" className="contact__error" role="alert">{errors.name}</span>}
                </div>

                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="cf-email" className="contact__label">Email *</label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <span className="contact__error" role="alert">{errors.email}</span>}
                  </div>
                  <div className="contact__field">
                    <label htmlFor="cf-phone" className="contact__label">Phone *</label>
                    <input
                      id="cf-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={`contact__input ${errors.phone ? 'contact__input--error' : ''}`}
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && <span className="contact__error" role="alert">{errors.phone}</span>}
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="cf-slot" className="contact__label">Preferred Visit Slot *</label>
                  <select
                    id="cf-slot"
                    name="slot"
                    value={form.slot}
                    onChange={handleChange}
                    className={`contact__input ${errors.slot ? 'contact__input--error' : ''}`}
                    aria-invalid={!!errors.slot}
                  >
                    <option value="">Select a time slot</option>
                    {VISIT_SLOTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.slot && <span className="contact__error" role="alert">{errors.slot}</span>}
                </div>

                <div className="contact__field">
                  <label htmlFor="cf-message" className="contact__label">Message <span style={{ fontWeight: 400 }}>(optional)</span></label>
                  <textarea
                    id="cf-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Any specific requirements or questions…"
                    rows={3}
                    className="contact__input contact__input--textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--primary contact__submit"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <span className="contact__spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : 'Book My Site Visit'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

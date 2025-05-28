import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const FormArea = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    company: '',
    subject: '',
    message: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('Envoi en cours...');

    const templateParams = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      company: formData.company,
      subject: formData.subject,
      message: formData.message,
      email: formData.email,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID
        templateParams, // Données du formulaire
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID // User ID
      );

      if (response.status === 200) {
        setStatusMessage('Message envoyé avec succès !');

        // Facebook Pixel: Suivi de l'événement "Lead" ou un événement personnalisé
        if (typeof window !== "undefined" && window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Formulaire de Contact',
            content_category: 'Contact',
            value: 0.0,
            currency: 'EUR',
            email: formData.email,
          });
        }
      } else {
        setStatusMessage('Une erreur est survenue.');
      }
    } catch (error) {
      setStatusMessage(`Erreur lors de l'envoi du message: ${error.message || JSON.stringify(error)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="contact__form-area-item">
              <input
                type="text"
                name="first_name"
                placeholder="Prénom"
                required
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="contact__form-area-item">
              <input
                type="text"
                name="last_name"
                placeholder="Nom"
                required
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="contact__form-area-item">
              <input
                type="text"
                name="company"
                placeholder="Société (si applicable)"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="contact__form-area-item">
              <input
                type="email"
                name="email"
                placeholder="Votre Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="contact__form-area-item">
              <input
                type="text"
                name="subject"
                placeholder="Objet du message"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <div className="contact__form-area-item">
              <textarea
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="contact__two-right-form-item">
              <button type="submit" className="btn-one" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </div>
          </div>
        </div>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </>
  );
};

export default FormArea;

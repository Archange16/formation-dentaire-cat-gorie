// pages/api/send-email.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { first_name, last_name, company, subject, message, email } = req.body;

    // Vérifie que toutes les informations nécessaires sont présentes
    if (!first_name || !last_name || !email || !message) {
      return res.status(400).json({ message: 'Tous les champs requis doivent être remplis.' });
    }

    try {
      const response = await axios.post(
        'https://api.brevo.com/v3/smtp/email',
        {
          sender: {
            name: `${first_name} ${last_name}`,
            email: 'kevin@cuspide.fr' // L'email de l'expéditeur (remplacer avec le vôtre)
          },
          to: [
            {
              email: 'asathoud16@gmail.com', // L'email du destinataire
              name: 'Recipient Name'
            }
          ],
          subject: subject || 'Message depuis le formulaire de contact',
          htmlContent: `
            <html>
              <body>
                <p><strong>Nom :</strong> ${first_name} ${last_name}</p>
                <p><strong>Société :</strong> ${company || 'N/A'}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Message :</strong></p>
                <p>${message}</p>
              </body>
            </html>
          `,
        },
        {
          headers: {
            accept: 'application/json',
            'api-key': process.env.SENDINBLUE_API_KEY, // Ajoutez votre clé API ici
            'content-type': 'application/json',
          },
        }
      );

      res.status(200).json({ message: 'Message envoyé avec succès !', data: response.data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi du message.', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}

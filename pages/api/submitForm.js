import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { first_name, last_name, company, subject, message, email } = req.body;

    try {
      // Configuration de l'API Brevo pour ajouter un contact
      const response = await axios.post(
        'https://api.brevo.com/v3/contacts', // URL de l'API Brevo pour ajouter un contact
        {
          email: email, 
          attributes: {
            FIRSTNAME: first_name,
            LASTNAME: last_name,
            COMPANY_NAME: company || 'Non précisé',
            SUBJECT: subject || 'Non précisé',
            OBSERVATION: message || 'Non précisé',
          },
          listIds: [52], 
          updateEnabled: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'api-key': process.env.SENDINBLUE_API_KEY, 
          },
        }
      );

      // Répondre avec un message de succès
      res.status(200).json({ message: 'Formulaire soumis avec succès', data: response.data });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      // Répondre avec une erreur si l'API échoue
      res.status(500).json({ message: 'Erreur lors de l\'envoi du formulaire', error: error.message });
    }
  } else {
    // Répondre avec un code 405 si la méthode n'est pas POST
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}

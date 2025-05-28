import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      // Envoi des données à l'API Brevo pour ajouter l'email à la liste
      const response = await axios.post(
        'https://api.brevo.com/v3/contacts', // URL de l'API Brevo pour ajouter un contact
        {
            email: email, 
            attributes: {
                EMAIL: email,
            },
            listIds: [55], 
            updateEnabled: true,
          },
        {
          headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'api-key': process.env.SENDINBLUE_API_KEY, // Clé API Brevo stockée dans les variables d'environnement
          },
        }
      );

      // Réponse de succès
      res.status(200).json({ message: 'Formulaire soumis avec succès', data: response.data });
    } catch (error) {
      console.error('Erreur lors de l\'envoi à Brevo:', error);
      // Réponse d'erreur
      res.status(500).json({ message: 'Erreur lors de l\'envoi du formulaire', error: error.message });
    }
  } else {
    // Si la méthode HTTP n'est pas POST
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}

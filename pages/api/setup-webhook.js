import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Données à envoyer à l'API Revolut
      const data = JSON.stringify({
        url: 'https://www.kevin-attallah.com/api/webhook', // URL de production
        events: [
          'ORDER_COMPLETED',
          'ORDER_AUTHORISED',
        ],
      });

      // Configuration de la requête Axios
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://merchant.revolut.com/api/1.0/webhooks',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${process.env.REVOLUT_API_KEY}`,
        },
        data: data,
      };

      // Log des données et de la configuration
      console.log('Envoi des données à Revolut:', data);
      console.log('Configuration de la requête:', config);

      // Envoi de la requête à l'API Revolut
      const response = await axios(config);

      // Réponse réussie
      res.status(200).json(response.data);
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur lors de la configuration du webhook:', error.response ? error.response.data : error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
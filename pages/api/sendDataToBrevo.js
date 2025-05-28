import axios from 'axios';

export default async function handler(req, res) {
  // Vérifier que la méthode HTTP est bien POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée, POST attendu' });
  }
 
  // Extraire les données envoyées par la requête
  const { name, email, mount, formation, phone, cardholderName, billingAddress } = JSON.parse(req.body);
  const { countryCode, region, city, postcode, streetLine1, streetLine2 } = billingAddress;

  // Vérification des données nécessaires
  if (!name || !email || !phone || !city || !postcode || !streetLine1) {
    return res.status(400).json({ error: 'Données manquantes, veuillez fournir toutes les informations nécessaires.' });
  }
 
  try {
    // Préparer les données à envoyer à Brevo
    const contactData = {
      email,
      attributes: {
        EMAIL: email,
        FIRSTNAME: name,
        PHONE_CABINET: phone,
        JOB_TITLE: formation,
        NOMBRE_DE_CAS_TOTAL: mount,
        VILLE: city,
        CODE_POSTALE: postcode,
        ADRESS: streetLine1
      },
      listIds: [53], // Remplacer par l'ID de votre liste dans Brevo
      updateEnabled: true, // Permet la mise à jour des contacts existants
    };

    // Envoyer les données à l'API Brevo
    const response = await axios.post('https://api.brevo.com/v3/contacts',
      contactData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'api-key': process.env.SENDINBLUE_API_KEY, // Assurez-vous que cette variable d'environnement est définie
        },
        //body: JSON.stringify(contactData)
      }
    );

    // Répondre avec un succès
    return res.status(200).json({
      message: 'Contact ajouté ou mis à jour avec succès dans Brevo',
      data: response.data,
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi des données à Brevo:', error);

    if (error.response) {
      console.error('Réponse d\'erreur de Brevo:');
    } else if (error.request) {
      console.error('Aucune réponse reçue:', error.request);
    } else {
      console.error('Erreur lors de la configuration de la requête:', error.message);
    }

    return res.status(500).json({
      message: 'Erreur lors de l\'envoi des données à Brevo',
      error: error.response ? error.response.data : error.message,
    });
  }
}
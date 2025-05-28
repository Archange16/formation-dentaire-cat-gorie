// pages/api/create-order.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Parse le corps de la requête en JSON
    try {
      req.body = req.body;
    } catch (error) {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }

    // Récupérer les données de la requête
    const { amount, currency, description } = req.body;
    // Validation des données
    if (!amount || !currency) {
      return res.status(400).json({ error: 'Champs obligatoires manquants : montant et devise' });
    }

    // Données de la commande
    const orderData = JSON.stringify({
      amount: Number(amount) * 100, // Convertir en nombre
      currency: currency.toUpperCase(), // Convertir en majuscules
      description
      //capture_mode: 'automatic', // Mode de capture automatique
    });
    
    try {
      // Envoyer la requête à l'API Revolut https://sandbox-merchant.revolut.com/api/orders https://merchant.revolut.com/api/orders
      const response = await fetch("https://merchant.revolut.com/api/orders", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${process.env.REVOLUT_API_KEY}`,
          "Revolut-Api-Version": '2024-09-01',
        },
        body: orderData,
      });

      // Traiter la réponse
      const data = await response.json();

      if (response.ok) {
        // Retourner les données de la réponse
        return res.status(200).json(data);
      } else {
        // Retourner les erreurs de l'API Revolut
        return res.status(response.status).json({
          error: 'Impossible de créer la commande',
          details: data,
        });
      }
    } catch (error) {
      // Gestion des erreurs réseau ou autres
      return res.status(500).json({
        error: 'Internal Server Error',
        details: error.message,
      });
    }
  } else {
    // Retourner une erreur si la méthode n'est pas POST
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
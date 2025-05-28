// pages/api/webhook.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const event = req.body;

    // Traitez l'événement du webhook (par exemple, pour mettre à jour l'état de la commande)
    console.log("Webhook reçu:", event);

    res.status(200).send('OK');
  } else {
    res.status(405).send('Méthode non autorisée');
  }
}

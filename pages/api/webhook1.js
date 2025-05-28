// pages/api/webhook.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { payment_status, order_id } = req.body;
  
      // Gérer le statut du paiement
      if (payment_status === 'SUCCESS') {
        // Mets à jour ton système (par exemple, donner l'accès à la formation)
        console.log(`Le paiement pour la commande ${order_id} a été effectué avec succès.`);
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ error: 'Paiement échoué' });
      }
    } else {
      res.status(405).json({ error: 'Méthode non autorisée' });
    }
  }
  
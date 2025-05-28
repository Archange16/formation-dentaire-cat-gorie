// pages/api/expiration.js

import { createClient } from '@supabase/supabase-js';

// Configurez Supabase avec vos variables d'environnement
const supabase = createClient(
  /* process.env.SUPABASE_URL, // Remplacez par l'URL de votre projet Supabase
  process.env.SUPABASE_ANON_KEY  */// Remplacez par votre clé publique Supabase
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Récupérer l'heure d'expiration
export const handler = async (req, res) => {
  const { method } = req;

  // Gestion de la méthode GET pour récupérer l'heure d'expiration
  if (method === 'GET') {
    try {
      const { userId } = req.query; // Récupérer l'ID utilisateur depuis la query string

      // Requête à Supabase pour récupérer l'heure d'expiration pour cet utilisateur
      const { data, error } = await supabase
        .from('expirations') // Nom de la table dans la base de données
        .select('end_time') // Sélectionner l'heure d'expiration
        .eq('user_id', userId) // Filtrer par ID utilisateur
        .single(); // S'assurer qu'il y a une seule entrée pour cet utilisateur

      // Si une erreur se produit, on renvoie une erreur au client
      if (error) {
        return res.status(500).json({ error: 'Erreur de récupération des données' });
      }

      // Retourner l'heure d'expiration
      return res.status(200).json({ endTime: data.end_time });
    } catch (error) {
      // Gestion des erreurs générales
      return res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des données' });
    }
  }

  // Gestion de la méthode POST pour mettre à jour ou ajouter l'heure d'expiration
  if (method === 'POST') {
    try {
      const { userId, endTime } = req.body; // Récupérer les données envoyées dans le corps de la requête

      // Ajouter ou mettre à jour l'heure d'expiration pour cet utilisateur
      const { data, error } = await supabase
        .from('expirations')
        .upsert([{ user_id: userId, end_time: endTime }]); // upsert permet de créer ou mettre à jour la ligne

      // Si une erreur se produit, on renvoie une erreur au client
      if (error) {
        return res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'expiration' });
      }

      // Retourner un message de succès
      return res.status(200).json({ message: 'Expiration mise à jour avec succès', data });
    } catch (error) {
      // Gestion des erreurs générales
      return res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour des données' });
    }
  }

  // Si la méthode HTTP utilisée n'est pas GET ou POST, on renvoie une erreur 405 (Méthode non autorisée)
  return res.status(405).json({ error: 'Méthode HTTP non autorisée' });
};

export default handler;

"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Déclare globalement l'interface fbq sur l'objet window
declare global {
  interface Window {
    fbq: {
      (cmd: 'track', event: string, params?: Record<string, unknown>): void;
      (cmd: 'init', id: string): void;
      (cmd: 'trackSingle', id: string, event: string, params?: Record<string, unknown>): void;
      push: (...args: unknown[]) => void;
    };
  }
}

type Currency = 'USD' | 'EUR' | 'GBP' | string;

// Hook personnalisé pour gérer Facebook Pixel
const useFacebookPixel = () => {
  const [isClient, setIsClient] = useState(false); // État pour vérifier si le code s'exécute côté client
  const [isMounted, setIsMounted] = useState(false); // Pour vérifier si le composant est monté
  const router = useRouter();

  // S'assure que le code ne s'exécute que côté client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return; // Attendre que le rendu côté client soit effectué
    setIsMounted(true);
  }, [isClient]);

  // Effet qui s'exécute uniquement lorsque le composant est monté et côté client
  useEffect(() => {
    if (!isMounted) return; // Ne pas exécuter cet effet tant que le composant n'est pas monté côté client

    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView'); // Enregistrer un événement de vue de page
        console.log('Facebook Pixel - PageView tracked for:', url);
      }
    };

    // Attacher un écouteur pour les changements de route
    router.events.on('routeChangeComplete', handleRouteChange);

    // Nettoyage de l'écouteur lorsque le composant est démonté
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [isMounted, router.events]);

  // Fonction pour vérifier si le Pixel Facebook est disponible dans le window
  const isPixelAvailable = (): boolean => {
    return typeof window !== 'undefined' && typeof window.fbq === 'function';
  };

  // Fonction pour suivre un événement générique avec les paramètres optionnels
  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (isPixelAvailable()) {
      try {
        window.fbq('track', eventName, parameters); // Enregistrer l'événement sur Facebook Pixel
        console.log(`Facebook Pixel - ${eventName} tracked`, parameters);
      } catch (error) {
        console.error(`Facebook Pixel - Error tracking ${eventName}:`, error);
      }
    } else {
      console.warn(`Facebook Pixel - ${eventName} not tracked (fbq not available)`);
    }
  };

  // Suivi spécifique de l'événement "AddPaymentInfo" (ajout d'informations de paiement)
  const trackAddPaymentInfo = (parameters?: Record<string, unknown>) => {
    trackEvent('AddPaymentInfo', parameters);
  };

  // Suivi spécifique de l'événement "AddToCart" (ajout au panier)
  const trackAddToCart = (content: { content_ids: string[]; content_type: string; value?: number; currency?: Currency }) => {
    trackEvent('AddToCart', content);
  };

  // Suivi spécifique de l'événement "AddToWishlist" (ajout à la liste de souhaits)
  const trackAddToWishlist = (content: { content_ids: string[]; content_type: string; value?: number; currency?: Currency }) => {
    trackEvent('AddToWishlist', content);
  };

  // Suivi spécifique de l'événement "CompleteRegistration" (inscription complète)
  const trackCompleteRegistration = (parameters?: { status?: string; [key: string]: unknown }) => {
    trackEvent('CompleteRegistration', parameters);
  };

  // Suivi spécifique de l'événement "FindLocation" (recherche de localisation)
  const trackFindLocation = (parameters?: { location?: string; [key: string]: unknown }) => {
    trackEvent('FindLocation', parameters);
  };

  // Suivi spécifique de l'événement "InitiateCheckout" (initiation de paiement)
  const trackInitiateCheckout = (content: { content_ids?: string[]; content_type?: string; value?: number; currency?: Currency; num_items?: number }) => {
    trackEvent('InitiateCheckout', content);
  };

  // Suivi spécifique de l'événement "Lead" (prospect)
  const trackLead = (parameters?: { value?: number; currency?: Currency; [key: string]: unknown }) => {
    trackEvent('Lead', parameters);
  };

  // Suivi spécifique de l'événement "Purchase" (achat)
  const trackPurchase = (value: number, currency: Currency = 'USD', parameters?: Record<string, unknown>) => {
    trackEvent('Purchase', { value, currency, ...parameters });
  };

  // Suivi spécifique de l'événement "Schedule" (planification)
  const trackSchedule = (parameters?: { schedule_type?: string; [key: string]: unknown }) => {
    trackEvent('Schedule', parameters);
  };

  // Suivi spécifique de l'événement "ViewContent" (vue de contenu)
  const trackViewContent = (content: { content_ids: string[]; content_type: string; value?: number; currency?: Currency }) => {
    trackEvent('ViewContent', content);
  };

  // Retourne toutes les fonctions de suivi d'événements
  return {
    trackAddPaymentInfo,
    trackAddToCart,
    trackAddToWishlist,
    trackCompleteRegistration,
    trackFindLocation,
    trackInitiateCheckout,
    trackLead,
    trackPurchase,
    trackSchedule,
    trackViewContent,
    trackCustomEvent: trackEvent,
  };
};

export default useFacebookPixel;

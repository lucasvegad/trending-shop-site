import ofertasData from '../data/ofertas.json';
import type { Offer } from './types';

export const getAllOffers = (): Offer[] => ofertasData.offers as Offer[];

// export_public_offers.py ordena el JSON con la fecha más reciente primero.
export const getLatestDate = (): string | undefined => getAllOffers()[0]?.published_date;

export const getTodayOffers = (): Offer[] => {
  const latestDate = getLatestDate();
  return getAllOffers().filter((o) => o.published_date === latestDate);
};

// Categorías con al menos una oferta vigente hoy — fuente única para el
// <select> de la home y para los links de categoría del footer, así
// ningún link lleva nunca a un callejón sin salida.
export const getActiveCategories = (): string[] =>
  [...new Set(getTodayOffers().map((o) => o.category))].sort();

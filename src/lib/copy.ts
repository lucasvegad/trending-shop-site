import type { Offer } from './types';

// Copy genérico de posicionamiento por categoría — no afirma características
// puntuales del producto (evita fabricar datos), solo encuadra el rubro.
// Rota entre variantes por product_id para que páginas indexadas de la
// misma categoría no compartan la frase exacta.
const BENEFIT_VARIANTS: Record<string, string[]> = {
  'Tecnología': [
    'Conectividad y practicidad para el día a día.',
    'Tecnología que se integra a tu rutina sin complicaciones.',
    'Para tener siempre a mano lo que necesitás.',
  ],
  'Hogar': [
    'Pensado para hacerte la vida más fácil en casa.',
    'Un aliado más para el día a día del hogar.',
    'Sumá comodidad a tu rutina doméstica.',
  ],
  'Salud y Belleza': [
    'Para sumar a tu rutina de cuidado personal.',
    'Cuidarte todos los días, sin complicarte.',
    'Un básico para tu rutina de bienestar.',
  ],
  'Deportes y Fitness': [
    'Para sumar a tu rutina de entrenamiento.',
    'Pensado para acompañarte en cada entrenamiento.',
    'Sumá constancia a tu rutina fitness.',
  ],
  'Moda': [
    'Un básico que combina con todo.',
    'Para renovar tu placard sin gastar de más.',
    'Un imprescindible que no puede faltar.',
  ],
  'Juguetes y Hobbies': [
    'Para disfrutar en casa o para regalar.',
    'Horas de diversión aseguradas.',
    'Ideal para sorprender con un regalo.',
  ],
  'Otros': [
    'Una oferta que vale la pena aprovechar hoy.',
    'Buen precio, buen momento para llevarlo.',
  ],
};

const hashProductId = (productId: string): number =>
  productId.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);

export const getBenefit = (offer: Offer): string => {
  const variants = BENEFIT_VARIANTS[offer.category] ?? BENEFIT_VARIANTS['Otros'];
  const index = hashProductId(offer.product_id) % variants.length;
  return variants[index];
};

// Cada razón está atada a un campo real — nunca se inventa un número o dato.
export const getReasons = (offer: Offer): string[] => {
  const reasons = [`Ahorrás ${offer.discount_pct}% hoy`];
  if (offer.sold_text) {
    reasons.push(`Ya lo eligieron ${offer.sold_text}`);
  }
  reasons.push(
    offer.trending
      ? 'Es tendencia esta semana'
      : 'Las ofertas cambian todos los días — esta puede no estar mañana'
  );
  return reasons;
};

export const TRUST_CTA_LINE = 'Compra segura y envío rápido a través de Mercado Libre';

export const money = (n: number) =>
  n.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });

// Relleno proporcional de estrellas (0-100) para una escala 0-5, usado con
// un overlay de ancho variable sobre 5 estrellas de fondo.
export const starFillPercent = (rating: number) => Math.max(0, Math.min(100, (rating / 5) * 100));

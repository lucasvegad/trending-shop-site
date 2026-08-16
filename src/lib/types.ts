export type Offer = {
  product_id: string;
  title: string;
  image_url: string | null;
  discount_pct: number;
  price_before: number;
  price_after: number;
  installments_text: string | null;
  rating: number | null;
  sold_text: string | null;
  affiliate_link: string;
  trending: boolean;
  category: string;
  published_date: string;
};

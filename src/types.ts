export enum ProductFilter {
  won,
  redeemed,
}

export type Product = {
  id: string;
  createdAt: string;
  product: string;
  points: string;
  is_redemption: boolean;
  image: string;
};
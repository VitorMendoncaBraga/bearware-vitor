import { app } from "@/utils/axiosConfig";

interface INewestProducts {
  id: string;
  product_id: string;
  slug: string;
  created_at: Date;
  price_in_cents: number;
  image_url: string;
  color: string;
  productName: string;
  productDescription: string;
}

export async function getNewestProducts() {
  const response = await app.get<INewestProducts[]>("/new-products");
  return response.data;
}

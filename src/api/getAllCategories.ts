import { app } from "@/utils/axiosConfig";

 interface IGetAllCategoriesResponse {
  id: string;
  name: string;
  slug: string;
  created_at: Date;
}

export async function getAllCategories() {
  const response = await app.get<IGetAllCategoriesResponse[]>("/categories");
  return response.data;
}

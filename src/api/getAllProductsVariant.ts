import { app } from "@/utils/axiosConfig";

export async function getAllProductsVariant(){
 const response = await app.get("/products")
 console.log(response.data)
 return response.data
}
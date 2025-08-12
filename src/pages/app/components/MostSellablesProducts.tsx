import { getAllProductsVariant } from "@/api/getAllProductsVariant";
import { useQuery } from "@tanstack/react-query";
import ProductItem from "./ProductItem";

export interface IProductsVariantQueryReponse {
  name: string;
  id: string;
  slug: string;
  created_at: Date;
  description: string;
  category_id: string | null;
  category: {
    name: string;
    id: string;
    slug: string;
    created_at: Date;
  } | null;
  variants: {
    name: string;
    id: string;
    slug: string;
    created_at: Date;
    product_id: string;
    price_in_cents: number;
    image_url: string;
    color: string;
  }[];
}
export function MostSellablesProducts() {
  const { data: responseData } = useQuery<IProductsVariantQueryReponse[]>({
    queryKey: ["products-variant"],
    queryFn: getAllProductsVariant,
  });

  return (
    <div className=" ">
      <h1 className="text-2xl font-bold mb-4">Mais vendidos</h1>{" "}
      {/* Adicionei um estilo ao título */}
      {/* 👇 ATENÇÃO: CLASSES ALTERADAS AQUI 👇 */}
      <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {responseData?.map((product) => (
          // É uma boa prática adicionar uma 'key' única ao mapear arrays no React
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

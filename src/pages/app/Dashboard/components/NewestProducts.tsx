import { getNewestProducts } from "@/api/getNewestProducts";
import { formatCurrency } from "@/utils/formatCurrency";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export function NewestProducts() {
  const { data: newestProducts } = useQuery({
    queryKey: ["newest-products"],
    queryFn: getNewestProducts,
  });

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl mb-4">Novos produtos</h1>
      <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {newestProducts?.map((product) => (
          <Link to={`/${product.slug}`} className="flex flex-col gap-4">
            <img
              src={product.image_url}
              width={150}
              height={150}
              alt=""
              className="rounded-4xl"
            />
            <div className="flex flex-col gap-1 max-w-[150px]">
              <p className="font-bold">{product.productName}</p>
              <p className="text-muted-foreground truncate">
                {product.productDescription}
              </p>
            </div>
            <p className="font-bold">
              {formatCurrency(product.price_in_cents / 100)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

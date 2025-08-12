import { Link } from "react-router-dom"
import type { IProductsVariantQueryReponse } from "./MostSellablesProducts"
import { formatCurrency } from "@/utils/formatCurrency"
interface IProductItemProps{
    product: IProductsVariantQueryReponse
}

export default function ProductItem({product}: IProductItemProps) {
  return (
    <Link to={"/"} className="flex flex-col gap-4">
      <img src={product.variants[0].image_url} width={150} height={150} alt="" className="rounded-4xl"  />
      <div className="flex flex-col gap-1 max-w-[150px]">
        <p className="font-bold">{product.name}</p>
        <p className="text-muted-foreground truncate">{product.description}</p>
      </div>
      <p className="font-bold">{formatCurrency((product.variants[0].price_in_cents)/100)}</p>
    </Link>
  )
}

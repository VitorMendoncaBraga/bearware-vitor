export function formatCurrency(price: number){
    const formattedPrice = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
    return formattedPrice.format(price)
}
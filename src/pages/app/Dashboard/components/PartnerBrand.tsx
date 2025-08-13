

interface PartnerBrandProps{
    brandImg: string,
    brandName: string
}

export function PartnerBrand({brandImg, brandName} : PartnerBrandProps) {
  return (
    <div className='flex flex-col gap-2 items-center'>
      <div className='border h-[70px] w-[70px] flex items-center justify-center rounded-2xl'>
        <img src={brandImg} alt={brandName} />
      </div>
      <p className="font-bold">{brandName}</p>
    </div>
  )
}

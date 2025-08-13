import { PartnerBrand } from "@/pages/app/Dashboard/components/PartnerBrand";
import NikeImg from "../../../assets/simple-icons_nike.svg";
import Banner_2 from "../../../assets/banner_2.png";
import Banner from "../../../assets/banner.png";
import AdidasImg from "../../../assets/simple-icons_adidas.svg";
import ConverseImg from "../../../assets/simple-icons_converse.svg";
import NewBalanceImg from "../../../assets/simple-icons_newbalance.svg";
import PoloImg from "../../../assets/simple-icons_polo.svg";
import PumaImg from "../../../assets/simple-icons_puma.svg";
import ZaraImg from "../../../assets/simple-icons_zara.svg";
import { MostSellablesProducts } from "./components/MostSellablesProducts";
import { Categories } from "./components/Categories";
import { NewestProducts } from "./components/NewestProducts";
import { Footer } from "@/components/Footer";

export function Dashboard() {
  return (
    <>
      <div className="px-5">
        <div className="w-full ">
          <img src={Banner} alt="" width={"100%"} />
        </div>
        <div className="py-5">
          <h1 className="font-bold text-md">Marcas parceiras</h1>
          <div className="flex gap-7 mt-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            <PartnerBrand brandImg={NikeImg} brandName="Nike" />
            <PartnerBrand brandImg={AdidasImg} brandName="Adidas" />
            <PartnerBrand brandImg={PumaImg} brandName="Puma" />
            <PartnerBrand brandImg={NewBalanceImg} brandName="NewBalance" />
            <PartnerBrand brandImg={ConverseImg} brandName="Converse" />
            <PartnerBrand brandImg={PoloImg} brandName="Polo" />
            <PartnerBrand brandImg={ZaraImg} brandName="Zara" />
          </div>
        </div>
        <MostSellablesProducts />
        <Categories />
        <div className="w-full">
          <img src={Banner_2} alt="" width={"100%"} />
        </div>
        <NewestProducts />
      </div>
      <Footer />
    </>
  );
}

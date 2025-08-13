
import { House, LogOut, Menu, ShoppingBag, Truck } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg'
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "@/api/getAllCategories";



export function Navbar() {

  const {data: categories} = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories
    })

  return (
    <div className="flex p-5 justify-between items-center">
      <img src={Logo} alt="" />
      <div className="flex">
        <Link to={"/carrinho"}><Button variant={"ghost"}><ShoppingBag /></Button></Link>
      <Sheet  >
        
        <SheetTrigger asChild>
          <Button variant={"ghost"} className="xl:hidden">
                <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent  side="right" className="w-9/10 font-poppins px-5 py-4">
          <SheetHeader  >
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="flex items-center justify-between border-b py-6">
                <span className="font-bold text-black text-[16px] ">Olá. Faça seu login!</span>
                <Button className="rounded-2xl bg-purple-950 font-bold"> 
                  Login
                  <LogOut />
                </Button>
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-2 border-b pb-4 ">
            
            <Button className="flex gap-4 items-center justify-start " variant={"ghost"}>
              <House />
              <Link to={"/"}><p className="">Início</p></Link>
            </Button>
            <Button className="flex gap-4 items-center justify-start " variant={"ghost"}>
              <Truck />
              <Link to={"/meus-pedidos"}><p className="">Meus pedidos</p></Link>
            </Button>
            <Button className="flex gap-4 items-center justify-start " variant={"ghost"}>
              <ShoppingBag />
              <Link to={"/carrinho"}><p className="">Sacola</p></Link>
            </Button>

          </div>
          <div className="flex flex-col">
            {
              categories?.map((category) => (
                <Link to={`/${category.slug}`}><Button  variant={"ghost"}>{category.name}</Button></Link>
              ))
            }
           
          </div>
        </SheetContent>
      </Sheet>
      </div>

    </div>
  );
}

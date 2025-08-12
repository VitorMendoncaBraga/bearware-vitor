import { Navbar } from "@/components/Navbar"
import { Outlet } from "react-router-dom"

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
        <Navbar />
        <div className="px-5">
            <Outlet />
        </div>
    </div>
  )
}

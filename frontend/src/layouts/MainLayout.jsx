import React from 'react'
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div  className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <main className="pt-24"> <Outlet /> </main>
    </div>
  )
}

export default MainLayout
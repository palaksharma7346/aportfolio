import React from 'react'
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div>
        <div className="flex-1 p-5"> <Outlet /> </div>
    </div>
  )
}

export default AdminLayout
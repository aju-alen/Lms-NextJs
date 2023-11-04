import React from 'react'
import { MobileSidebar } from './MobileSidebar'
import { NavbarRoutes } from '@/components/Navbar-routes'

const Navbar = () => {
  return (
    <div className=' p-4 border-b h-full flex items-center bg-white shadow-sm'>
       <div className="md:hidden">
       <MobileSidebar  />
       </div>
       <NavbarRoutes />

    </div>
  )
}

export default Navbar
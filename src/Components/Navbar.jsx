import React, { useEffect } from 'react'
import NavBreadcrumbTrail from './NavBreadcrumbTrail'
import NavSearchBar from './NavSearchBar'
import NavIcons from './NavIcons'

const Navbar = () => {

  useEffect(()=> {
    console.log("redered : Navbar")

  }, [])
  return (
    <div className='flex justify-between px-10 py-2 bg-white h-[5vh] text-lg '>
        <NavBreadcrumbTrail />
        <NavSearchBar />
        <NavIcons />
    </div>
  )
}

export default Navbar
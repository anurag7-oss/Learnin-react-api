import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex w-screen  justify-center gap-10'>
      <NavLink className={(e)=>{
        return[
        e.isActive ? 'text-red-300' : "",
        e.isActive ? 'font-semibold' : ""
        ].join(" ");
      }} to="/">Home</NavLink>
      <NavLink className={(e)=>{
        return[
        e.isActive ? 'text-red-300' : "",
        e.isActive ? 'font-semibold' : ""
        ].join(" ");
      }}  to="/apis">Apis</NavLink>
    </nav>
  )
}

export default Nav
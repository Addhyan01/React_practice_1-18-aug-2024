import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <header>Header Main</header>
        <Outlet />
        <footer>Footer Main</footer>
    
    </>
  )
}

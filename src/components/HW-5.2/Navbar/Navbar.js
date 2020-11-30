import React from 'react'
import './Navbar.css'
import NavbarItem from './NavbarItem'

export default function Navbar({ list, ...props }) {
  return (
    <ul className="nav__list">
      { list.map((item) => <NavbarItem { ...item } key={ item.text } />) }
    </ul>
  )
}

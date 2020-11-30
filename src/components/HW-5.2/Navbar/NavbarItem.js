import React from 'react'

export default function NavbarItem({ link, text, ...props }) {
  return (
    <li className="nav__list_item">
      <a className="nav__list_link" href={ link }>{ text }</a>
    </li>
  )
}

import React from 'react'

export default function NewsItem({ link, icon, text, ...props}) {
  return (
    <li className="news__list_item">
      <a className="news__list_item_link" href={ link }>
        <i className="news__list_item_icon">{ icon }</i>
        <span className="news__list_item_text">{ text }</span>
      </a>
    </li>
  )
}

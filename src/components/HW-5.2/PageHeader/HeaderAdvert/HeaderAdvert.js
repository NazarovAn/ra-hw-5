import React from 'react'
import './HeaderAdvert.css'

export default function HeaderAdvert({ link, imgSrc, imgAlt, heading, text, ...props }) {
  return (
    <div className="header__advert">
      <a className="header__advert_link" href={ link }>
        <img className="header__advert_img" src={ imgSrc } alt={ imgAlt } />
        <h4 className="header__advert_heading">{ heading }</h4>
        <span className="header__advert_text">{ text }</span>
      </a>
    </div>
  )
}

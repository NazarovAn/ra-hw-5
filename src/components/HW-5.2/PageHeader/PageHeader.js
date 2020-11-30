import React from 'react'
import './PageHeader.css'
import HeaderNews from './HeaderNews/HeaderNews'
import HeaderAdvert from './HeaderAdvert/HeaderAdvert'

export default function PageHeader({ news, advert, ...props }) {
  return (
    <div className="decmpn__header">
      <HeaderNews { ...news }/>
      <HeaderAdvert {...advert} />
    </div>
  )
}

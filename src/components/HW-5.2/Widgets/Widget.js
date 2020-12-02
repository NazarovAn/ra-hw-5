import React from 'react'
import Broadcast from './Widgets/Broadcast'
import Random from './Widgets/Random'
import Recent from './Widgets/Recent'
import TVList from './Widgets/TvList'
import Weather from './Widgets/Weather'

export default function Widget({ type, title, link, content, ...props }) {
  return (
    <div className="decmpn__widgets_item">
      <a className="decmpn__widgets_link" href={ link }>
        <h4 className="decmpn__widgets_item_title">{ title }</h4>
      </a>
      { type === 'broadcast' ? <Broadcast content={ content } /> : null }
      { type === 'random' ? <Random { ...content } /> : null }
      { type === 'recent' ? <Recent content={ content } /> : null }
      { type === 'tv-list' ? <TVList content={ content } /> : null }
      { type === 'weather' ? <Weather { ...content } /> : null }
    </div>
  )
}

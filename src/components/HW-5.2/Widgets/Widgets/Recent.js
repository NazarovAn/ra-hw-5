import React from 'react'
import './Recent.css'

export default function Recent(props) {
  return (
    <div className="decmpn__widgets_recent">
      { props.content.map(item => {
        return (
          <div className="decmpn__widgets_recent_id" key={ item.id }>
            <a className="decmpn__widgets_recent_site_link" href={ item.siteLink }>
              <span className="decmpn__widgets_recent_site_name">{ item.siteName }</span>
            </a>
            <a className="decmpn__widgets_recent_link" href={ item.link }>
              <span className="decmpn__widgets_recent_text">{ item.text }</span>
            </a>
          </div>
          )
      }) }
    </div>
  )
}

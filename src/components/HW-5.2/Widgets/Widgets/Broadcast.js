import React from 'react'
import './Broadcast.css'

export default function Broadcast(props) {
  return (
    <div className="decmpn__widgets_broadcast">
      { props.content.map(item => {
        return (
          <div className="decmpn__widgets_broadcast_item" key={ item.id }>
            <i className="decmpn__widgets_broadcast_icon">icon&nbsp;</i>
            <span className="decmpn__widgets_broadcast_text">{ item.text }&nbsp;</span>
            <a className="decmpn__widgets_broadcast_link" href={ item.link }>
              <span className="decmpn__widgets_broadcast_name">{ item.name }</span>
            </a>
          </div>
          )
      }) }
    </div>
  )
}

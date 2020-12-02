import React from 'react'
import './TvList.css'

export default function TvList(props) {
  return (
    <div className="decmpn__widgets_tv_list">
      { props.content.map(item => {
        return (
          <div className="decmpn__widgets_tv_list_item" key={ item.id }>
            <span className="decmpn__widgets_tv_list_time">{ item.time }&nbsp;</span>
            <a className="decmpn__widgets_tv_list_show_link" href={ item.showLink }>
              <span className="decmpn__widgets_tv_list_show_name">{ item.showName }&nbsp;</span>
            </a>
            <a className="decmpn__widgets_tv_list_channel_link" href={ item.channelLink }>
              <span className="decmpn__widgets_tv_list_channel_name">{ item.channelName }</span>
            </a>
          </div>
          )
      }) }
    </div>
  )
}

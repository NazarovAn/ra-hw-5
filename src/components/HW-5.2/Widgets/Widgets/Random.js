import React from 'react'

export default function Random({ link, text, ...props }) {
  return (
    <div className="decmpn__widgets_random">
      <a className="decmpn__widgets_random_link" href={ link }>
        <span className="decmpn__widgets_random_text">{ text }</span>
      </a>
    </div>
  )
}

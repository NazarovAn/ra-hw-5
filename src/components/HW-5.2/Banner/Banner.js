import React from 'react'
import './Banner.css'

export default function Banner({ link, height, width, src, position, ...props }) {
  return (
    <a className="decmpn__banner_link" href={ link } style={{ width }}>
      <div className="decmpn__banner"
        style={{
          height,
          width,
          backgroundImage: `url(${ src })`,
          backgroundPosition: position,
        }}
      />
    </a>
  )
}

import React from 'react'
import './Weather.css'

export default function Weather({ icon, temp, morning, day, ...props }) {
  return (
    <div className="decmpn__widgets_weather">
      <div className="decmpn__widgets_weather_icon" style={{ backgroundImage: `url(${ icon })` }} />
      <span className="decmpn__widgets_weather_temp_now">{ temp }</span>
      <div className="decmpn__widgets_weather_temp_other">
        <span>Утром: { morning }</span>
        <span>Днём: { day }</span>
      </div>      
    </div>
  )
}

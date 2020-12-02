import React from 'react'
import './Widgets.css'
import Widget from './Widget'

export default function Widgets(props) {
  return (
    <div className="decmpn__widgets">
      { props.widgets.map((item) => <Widget { ...item } key={ item.type } />) } 
    </div>
  )
}

import React from 'react'
import './Search.css'

export default function Search({ logoSrc, example, exampleLink, ...props }) {
  return (
    <form className="dcmpn__input_wrapper">
      <div className="decmpn__input_logo" style={{ backgroundImage: `url(${ logoSrc })` }}/>
      <input className="decmpn__input" />
      <button className="decmpn__input_btn">Найти</button>
      <span className="decmpn__input_example">
        Найдется все. Например,&nbsp;
        <a className="decmpn__input_example_variant" href={ exampleLink }>{ example }</a>
      </span>
    </form>
  )
}

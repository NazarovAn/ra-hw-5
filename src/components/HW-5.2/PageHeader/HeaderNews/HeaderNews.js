import React from 'react'
import './HeaderNews.css'
import NewsItem from './NewsItem'

export default function HeaderNews({ type, time, list, ...props }) {
  return (
    <div className="news__header_wrapper">
      <div className="news__heading">
        <span className="news__heading_type">
          { type.map((item) => <a className="news__type_link" key={ item } href={ `/${ item }` }>{ item }</a>) }
        </span>
        <span className="news__heading_time">{ time }</span>
      </div>
      <ul className="news__list">
        { list.map((item) => <NewsItem {...item} key={ item.id }/>) }
      </ul>
    </div>
  )
}

import React from 'react'
import PropTypes from 'prop-types'
import './Decomposition.css'
import PageHeader from './PageHeader/PageHeader'
import Navbar from './Navbar/Navbar'

export default  function Decomposition({ pageHeader, navbar, ...props }) {
  return (
    <div className="decmpn">
      <PageHeader { ...pageHeader } />
      <Navbar list={ navbar }/>
    </div>
  )
}

Decomposition.propTypes = {
  // Props для компонента PageHeader
  pageHeader: PropTypes.exact({
    // Props для компонента HeaderNews
    news: PropTypes.exact({
      // Тип фильтра для новостей
      type: PropTypes.array.isRequired,
      // Время последнего обновления новостей
      time: PropTypes.string.isRequired,
      // Список новостей
      list: PropTypes.arrayOf(
        PropTypes.exact({
          // Иконка новости
          icon: PropTypes.string.isRequired,
          // Ссылка на новость
          link: PropTypes.string.isRequired,
          // Текст новости
          text: PropTypes.string.isRequired,
          // Id новости
          id: PropTypes.string.isRequired,
        })
      )
    }),
    // Props для компонента HeaderAdvert
    advert: PropTypes.exact({
      // Рекламная ссылка
      link: PropTypes.string.isRequired,
      // Сссылка на изображение
      imgSrc: PropTypes.string.isRequired,
      // Alt для изображения
      imgAlt: PropTypes.string.isRequired,
      // Рекламный заголовок
      heading: PropTypes.string.isRequired,
      // Рекламный текст
      text: PropTypes.string.isRequired,
    })
  }),
  // Список ссылок для NavBar
  navbar: PropTypes.arrayOf(      
    PropTypes.exact({
      // Ссылка
      link: PropTypes.string.isRequired,
      // Текст ссылки
      text: PropTypes.string.isRequired,
    })
  )
}

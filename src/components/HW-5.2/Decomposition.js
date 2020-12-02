import React from 'react'
import PropTypes from 'prop-types'
import './Decomposition.css'
import PageHeader from './PageHeader/PageHeader'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import Banner from './Banner/Banner'
import Widgets from './Widgets/Widgets'

export default  function Decomposition({ pageHeader, navbar, search, banner, widgets, ...props }) {
  return (
    <div className="decmpn">
      <PageHeader { ...pageHeader } />
      <Navbar list={ navbar }/>
      <Search { ...search } />
      <Banner { ...banner }/>
      <Widgets widgets={ widgets } />
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
  ),
  // Props для компонента Search
  search: PropTypes.exact({
    // Ссылка на логотип
    logoSrc: PropTypes.string.isRequired,
    // Текст примера поиска
    example: PropTypes.string.isRequired,
    // Ссылка на пример
    exampleLink: PropTypes.string.isRequired,
  }),
  // Props для компонента Banner
  banner: PropTypes.exact({
    // Рекламная ссылка
    link: PropTypes.string.isRequired,
    // Ширина
    width: PropTypes.string.isRequired,
    // Высота
    height: PropTypes.string.isRequired,
    // Ссылка на баннер
    src: PropTypes.string.isRequired,
    // Позиция баннера внутри окна
    position: PropTypes.string,
  }),
  // Props для компонента Widgets
  widgets: PropTypes.arrayOf(
    PropTypes.exact({
      // Тип виджета
      type: PropTypes.string.isRequired,
      // Заголовок виджета
      title: PropTypes.string.isRequired,
      // Ссылка на главную страницу виджета
      link: PropTypes.string.isRequired,
      // Контент виджета
      content: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
      ]),
    })
  )
}

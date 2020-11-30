import { nanoid } from 'nanoid'
import advertImg from './PageHeader/HeaderAdvert/img/advertImg.jpg'

const data = {
  pageHeader: {
    news: {
      type: ['News from nowhere', 'Somewhere', 'Recomended'],
      time: new Date().toUTCString(),
      list: [
        {
          icon: 'icon 1',
          link: '/link 1',
          text: 'header news text 1',
          id: nanoid(),
        },
        {
          icon: 'icon 2',
          link: '/link 2',
          text: 'header news text 2',
          id: nanoid(),
        },
        {
          icon: 'icon 3',
          link: '/link 3',
          text: 'header news text 3',
          id: nanoid(),
        },
        {
          icon: 'icon 4',
          link: '/link 4',
          text: 'header news text 4',
          id: nanoid(),
        },
        {
          icon: 'icon 5',
          link: '/link 5',
          text: 'header news text 5',
          id: nanoid(),
        },
        {
          icon: 'icon 6',
          link: '/link 6',
          text: 'header news text 6',
          id: nanoid(),
        },
      ],
    },
    advert: {
      link: '/advertLink',
      imgSrc: advertImg,
      imgAlt: 'advertImgAlt',
      heading: 'page header advert heading',
      text: 'page header advert text',
    }
  },
  navbar: [
    {
      link: '/navbar-link-1',
      text: 'First'
    },
    {
      link: '/navbar-link-2',
      text: 'Second'
    },
    {
      link: '/navbar-link-3',
      text: 'Third'
    },
    {
      link: '/navbar-link-4',
      text: 'Fourth'
    },
    {
      link: '/navbar-link-5',
      text: 'Fifth'
    }
  ]
}

export default data
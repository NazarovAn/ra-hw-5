import { nanoid } from 'nanoid'
import advertImg from './PageHeader/HeaderAdvert/img/advertImg.jpg'
import logo from './Search/img/logo.jpg'
import banner from './Banner/img/banner.jpeg'
import weatherIcon from './Widgets/Widgets/img/weaterIcon.jpg'

const data = {
  pageHeader: {
    news: {
      type: ['Nowhere', 'Somewhere', 'Recomended'],
      time: new Date().toUTCString(),
      list: [
        {
          icon: 'i1',
          link: '/link 1',
          text: 'header news text 1',
          id: nanoid(),
        },
        {
          icon: 'i2',
          link: '/link 2',
          text: 'header news text 2',
          id: nanoid(),
        },
        {
          icon: 'i3',
          link: '/link 3',
          text: 'header news text 3',
          id: nanoid(),
        },
        {
          icon: 'i4',
          link: '/link 4',
          text: 'header news text 4',
          id: nanoid(),
        },
        {
          icon: 'i5',
          link: '/link 5',
          text: 'header news text 5',
          id: nanoid(),
        },
        {
          icon: 'i6',
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
  ],
  search: {
    logoSrc: logo,
    example: 'random search',
    exampleLink: '/exampleLink',
  },
  banner: {
    link: '/banner-link',
    width: '650px',
    height: '100px',
    src : banner,
    position: '0 -50px',
  },
  widgets: [
    {
      type: 'weather',
      title: 'Погода',
      link: '/weather',
      content: {
        icon: weatherIcon,
        temp: '+17\u2103',
        morning: '+15',
        day: '+18',
      }
    },
    {
      type: 'recent',
      title: 'Посещённое',
      link: '/recent',
      content: [
        {
          id: nanoid(),
          siteLink: '/siteLink',
          siteName: 'siteName',
          text: 'visited text',
          link: '/visited-link'
        },
        {
          id: nanoid(),
          siteLink: '/siteLink',
          siteName: 'second siteName',
          text: 'already visited text',
          link: '/visited-link'
        },
        {
          id: nanoid(),
          siteLink: '/siteLink',
          siteName: 'final Name',
          text: 'final visited text',
          link: '/visited-link'
        },
      ]
    },
    {
      type: 'random',
      title: 'Random',
      link: '/random',
      content: {
        link: '/link-to-smth',
        text: 'random text'
      }
    },
    {
      type: 'tv-list',
      title: 'Телепрограмма',
      link: '/tv-list',
      content: [
        {
          id: nanoid(),
          time: '10.00',
          showName: 'random name',
          showLink: '/random-show-link',
          channelName: 'random channel',
          channelLink: '/random-channel-link'
        },
        {
          id: nanoid(),
          time: '11.20',
          showName: 'second name',
          showLink: '/random-show-link',
          channelName: 'channel',
          channelLink: '/random-channel-link'
        },
        {
          id: nanoid(),
          time: '12.00',
          showName: 'another name',
          showLink: '/random-show-link',
          channelName: 'random ch',
          channelLink: '/random-channel-link'
        },
      ]
    },
    {
      type: 'broadcast',
      title: 'Эфир',
      link: '/broadcast',
      content: [
        {
          text: 'first broadcast',
          name: 'fstBrdcast',
          link: '/fstBrdcast',
          id: nanoid(),
        },
        {
          text: 'second broadcast',
          name: 'Brdcast the second',
          link: '/scdBrdcast',
          id: nanoid(),
        },
        {
          text: 'final broadcast',
          name: 'fn Brdc',
          link: '/fnBrdcast',
          id: nanoid(),
        }
      ]
    },
  ]
}

export default data

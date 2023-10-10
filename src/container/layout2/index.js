import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)
const NAV__LIST = [
  {
    nav: [
      { text: 'База знань', id: 1 },
      { text: 'Інформація', id: 2 },
    ],
    solid__item: [{ id: 1 }, { id: 2 }],
  },
]

const createPost = () => {
  const postMain = createElement('main', 'main')

  NAV__LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'nav__list nav--viewed'
        : 'nav__list',
    )

    const navHeader = createElement('div', 'nav')

    postData.nav.forEach((item) => {
      const navItem = createElement(
        'button',
        `nav-item--${item.id}`,
        item.text,
      )
      navHeader.append(navItem)
    })

    const navHeaderSolid = createElement(
      'div',
      'nav__solid__item',
    )

    postData.solid__item.forEach((solid) => {
      const navSolidItem = createElement(
        'div',
        `nav__solid--${solid.id}`,
      )
      navHeaderSolid.append(navSolidItem)
    })

    post.append(navHeader)
    post.append(navHeaderSolid)
    postMain.append(post)
  })

  return postMain
}

page.append(createPost())

// ========

const NAV__IMAGE = [
  {
    src: '/img/nav__img.png',
  },
]
const createImage = () => {
  const navImg = createElement('div', 'nav__img')

  NAV__IMAGE.forEach((params) => {
    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    navImg.append(img)
  })

  return navImg
}

page.appendChild(createImage())

// =============

const createInfo = () => {
  const postDiv = document.createElement('div', 'post')

  const POST_DATA = {
    header: 'Що таке база знань?',
    info: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
  }

  const header = document.createElement(
    'h1',
    'post__header',
  )
  header.textContent = POST_DATA.header

  const info = document.createElement('div', 'post__info')
  info.textContent = POST_DATA.info

  postDiv.append(header)
  postDiv.append(info)

  return postDiv
}

page.append(createInfo())

// ===========

const NAV_BUTTON_TEXT = "Перейти до ком'юніті у Телеграм"

const createButton = (text) => {
  const button = createElement(
    'button',
    'nav__button',
    text,
  )
  return button
}

const button = createButton(NAV_BUTTON_TEXT)
page.append(button)

import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: false,
  },

  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій',
    date: '15.01',
    viewed: true,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postDate) => {
    const post = createElement(
      'div',
      postDate.viewed
        ? 'post button post--viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post__header')

    // =====

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postDate.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )

      categoryList.append(categorySpan)
    })

    // ======

    const dateSpan = createElement(
      'span',
      'post__date',
      postDate.date,
    )

    postHeader.append(categoryList, dateSpan)

    // ========

    const infoParadraph = createElement(
      'p',
      'post__info',
      postDate.info,
    )

    post.append(postHeader, infoParadraph)

    // =============

    postList.append(post)
  })

  return postList
}

const post = createPost()
page.append(post)

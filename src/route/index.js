// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
const nav = require('./nav')
const scroll = require('./scroll')
const layout = require('./layout')
const layout2 = require('./layout2')
const jsToDoList = require('./js-to-do-list')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/nav', nav)
router.use('/scroll', scroll)
router.use('/layout', layout)
router.use('/layout2', layout2)
router.use('/js-to-do-list', jsToDoList)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router

const fs = require('fs')
const path = require('path')

// В Node JS первый параметр асинхронной функции это ошибка 
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err
//   }

//   console.log('Папка создана')

// })

// const filePath = path.join(__dirname, 'test', 'text.txt')
// fs.writeFile(filePath, 'Hello Node JS!', err => {
//   if (err) {
//     throw err
//   }

//   console.log('Файл создан')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')
// fs.appendFile(filePath, '\nHello again!', err => {
//   if (err) {
//     throw err
//   }

//   console.log('Файл создан')
// })

// 1 способ чтения файла
// fs.readFile(filePath, (err, content) => {
//   if (err) {
//     throw err
//   }

//   const data = Buffer.from(content)
//   console.log('Content:', data.toString())
// })

// 2 способ чтения файла
fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }

  console.log('Content:', content)
})
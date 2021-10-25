const { exec } = require('child_process')
const EventEmitter = require('events')
const { threadId } = require('worker_threads')

// const emitter = new EventEmitter()
// emitter.on('anything', data => {
//  console.log('On: anything', data) 
// })

// emitter.emit('anything', {a: 1})

// setTimeout(() => {
//   emitter.emit('anything', {a: 4})
// }, 1500)

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('Subscribe...')
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('Dispatching...')
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher()

dis.subscribe('aa', data => {
  console.log('ON: aa', data)
})

dis.dispatch('aa', { aa: 22 })
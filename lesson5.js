// var a = 1
// 
// 
// console.log(this.a)
// console.log(this)

// var user = {
//   name: 'George',
//   age: 23,
//   sayHi: function() {
//     console.log('Hi!' + user.name)
//   }
// }

// console.log(user.sayHi())

// var userThis = {
//   name: 'George',
//   age: 23,
//   sayHi: function() {
//     console.log(this)
//     console.log('Hi!' + this.name)
//   }
// }

// user.sayHi()
// userThis.sayHi()


// function f() {
//   console.log(this)
// }

// f()

// console.log(window.document.head)
// console.log(window.document.body.childNodes)

// console.log(document.getElementsByTagName('li')[1])

// console.log(document.getElementById('li'))

// console.log(document.getElementsByClassName('li')[0])

// console.log(document.querySelector('#li'))

// console.log(document.querySelectorAll('.li'))



// function createDiv() {
//   for (var i = 0; i < 5; i++) {
//     var div = document.createElement('div')
//
//     div.innerText = 'my message' + i
//     document.body.appendChild(div)
//   }
// }
// function addRedClass() {
//   var random = Math.floor(Math.random() * document.querySelectorAll('div').length)
//   var div = document.querySelectorAll('div')[random]
//
//   div.className = 'red'
// }
//
// setTimeout(createDiv, 1000)
// setTimeout(addRedClass, 3000)

// var body = document.body
// var div = document.createElement('div')
//
// div.className = 'change'
// div.style.backgroundColor = '#000'
// div.style.transitionTimingFunction = 'ease-in-out'
// div.style.transitionDuration = '.1s'
// div.style.width = '100px'
// div.style.height = '100px'
//
// var i = 0
//
// var changeColor = function() {
//   var div = document.querySelector('.change')
//
//   if (i > 255) {
//     i = 0
//   } else {
//     i++
//   }
//   // var randomRed = Math.floor(Math.random() * 255)
//   // var randomGreen = Math.floor(Math.random() * 255)
//   // var randomBlue = Math.floor(Math.random() * 255)
//
//   // div.style.backgroundColor = 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')'
//   div.style.backgroundColor = 'rgb(' + i + ',' + i + ',' + i + ')'
// }
//
// body.appendChild(div)
//
//
// setInterval(changeColor, 200)
// // document.body.appendChild(document.createElement('div'))
// // document.body.appendChild(document.createElement('div'))






// var colors = ['red', 'yellow', 'green']

// var redDiv = document.createElement('div'),
//     yellowDiv = document.createElement('div'),
//     greenDiv = document.createElement('div')
//
// redDiv.style.backgroundColor = colors[0]
// yellowDiv.style.backgroundColor = colors[1]
// greenDiv.style.backgroundColor = colors[2]
//
// document.body.appendChild(redDiv)
// document.body.appendChild(yellowDiv)
// document.body.appendChild(greenDiv)


// var colors = ['red', 'yellow', 'green', 'pink', 'brown']
// var createColorfullDiv = function(color) {
//   var div = document.createElement('div')

//   div.style.width = '100px'
//   div.style.height = '100px'
//   div.style.backgroundColor = color

//   document.body.appendChild(div)
// }

// colors.forEach(createColorfullDiv)


// for (var i = 0; i < colors.length; i++) {
//
//   var div = document.createElement('div')
//
//   div.style.width = '100px'
//   div.style.height = '100px'
//   div.style.backgroundColor = colors[i]
//
//   document.body.appendChild(div)
//
// }

// console.log(colors)

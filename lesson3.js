// var a = 1
// var a = 10
// 
// while (a < 10) {
  // console.log(a)
  // a++
// }

// var a = 10

// do {
//   console.log(a + '1233')
//   a++
// } while (a < 10)

// for (var i = 0; i < 10; i++) {
//   console.log(i)
//   if (i === 5) break
// }


// var name = prompt('Введи имя', '')

// if (name === 'Стас') {
//   console.log('Ты Стас')
// } else if (name === 'Жора') {
//   console.log('К сожалению, вы не Стас')
// } else {
//   console.log('пнх')
// }

// switch (name) {
//   case 'Стас':
//     console.log('Ты Стас')
//     break
//   case 'Жора':
//     console.log('К сожалению, вы не Стас')
//     break
//   case 'asd':
//     console.log('К сожалению, вы не Стас')
//     break
//   case 'sfsdf':
//     console.log('К сожалению, вы не Стас')
//     break
//   case 'asdasdass':
//     console.log('К сожалению, вы не Стас')
//     break
//   default:
//     console.log('ошибка')
// }
//
// switch (name) {
//   case 'Стас':
//     console.log('Ты Стас')
//     break
//   case 'Жора':
//   case 'какой-то ответ':
//   case 'м-да, ответ':
//   case 'что-то':
//     console.log('К сожалению, вы не Стас')
//     break
//   default:
//     console.log('пнх')
// }



// var sumBlaBlaBla = function () {
//
// }
//
// function sumBlaBlaBla() {
//
// }


// function sayHelloWorld () {
//   console.log('hello, world')
// }
//
// sayHelloWorld()

// var wordFromUser = prompt('Введи какое-нибудь слово', 'Жора')

// function sayMyWord (word) {
//   switch (word) {
//     case 'Жора': console.log('Ты вызвал функцию с Жорой')
//       break
//     default: console.log('Ты ввел что-то странное')
//   }
// }

// sayMyWord(wordFromUser)

// const user = {
//   name: 'Стас',
//   age: 23,
// }

// function f(obj) {
//   console.log(obj.name, obj.age)
// }

// f(user)

// function sum(a, b) {
//   return a + b
// }

// console.log(sum(4, 9))

// function f(number) {
  // var a = 9
  // console.log(a)
  // console.log(number)
  // return a + number
// }
// 
// console.log(f(1))



// function checkIsPositive(number) {
//   if (number > 0) return true
//   return false
// }



// var dataAge = prompt('Введи возраст')
//
// if (checkIsPositive(dataAge)) {
//   console.log('число ' + dataAge + ' прошло валидацию на позитивность')
// } else {
//   console.log('число ' + dataAge + ' не валидно')
// }


// var array = ['asdasd', 'aqwesd', 'a123sd', 'a sfgsd', ';k;lasd']

// array.forEach(function(element) {
//   console.log(element + '11111111')
// })

// for (var i = 0; i < array.length; i++) {
//   console.log(array[i] + '11111111')
// }



var date = new Date()
var currentHour = date.getHours()
var currentMinute = date.getMinutes()
var expectedHour = 19
var expectedMinute = 04



function compareTimeWithCurrent(hour, minute) {
  var currentFullTime = currentHour + ':' + currentMinute
  var expectedFullTime = hour + ':' + minute

  if (currentHour < expectedHour) {
    return 'Вернись чуть позже'
  }
  if (expectedFullTime === currentFullTime) {
    return 'Сейчас то время, которое вы ожидали'
  }
  if ((currentHour === expectedHour) && (currentMinute > expectedMinute)) {
    var minuteDefference =  currentMinute- expectedMinute;
    return 'Еще не настало твое время, вернись через ' + minuteDefference + ' минут(ы)'
  }
}

console.log(compareTimeWithCurrent(expectedHour, expectedMinute))
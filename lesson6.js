// window.onload = function() {
//   var button = document.getElementsByTagName('button')[0]
//   var ul = document.getElementsByTagName('ul')[0]
//   var div = document.querySelector('.example')
//   var input = document.querySelector('input')
//   function alertOne() {
//     alert(1)
//   }
//
//   function alertTwo() {
//     alert(2)
//   }
//
//   function onInputChange(event) {
//     console.log(this.value)
//     console.dir(this)
//     // console.log(event.target.value)
//     event.target.value = event.target.value.toUpperCase().trim()
//   }
//
//   // function disableElement(event) {
//   //   event.target.disabled = true
//   // }
//
//   function changeInputBackgroundColor(event) {
//     var randomRed = Math.floor(Math.random() * 255)
//     var randomGreen = Math.floor(Math.random() * 255)
//     var randomBlue = Math.floor(Math.random() * 255)
//
//     event.target.style.backgroundColor = 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')'
//   }
//
//   // function addListener (type, callback, bool) {
//   //   // какой-то код
//   //   if(type === 'change') {
//   //     //делаем что-то
//   //   }
//   //   var Event = {asd: 1}
//   //
//   //   callback(Event)
//   //   // какой-то код
//   // }
// //
// // button.onclick = function() {
// //   alertOne()
// //   alertTwo()
// // }
//   input.addEventListener('input', onInputChange)
//   input.addEventListener('input', changeInputBackgroundColor)
//   input.addEventListener('blur', changeInputBackgroundColor)
//   // input.addEventListener('blur', disableElement)
//   input.addEventListener('focus', changeInputBackgroundColor)
//
//   // ul.addEventListener('click', function(e) {
//   //   console.log(e.target)
//   // })
//   var selectedLi;
//
//   ul.addEventListener('click', ulListener)
//
//   function ulListener(evt) {
//     if (evt.target.nodeName === 'UL') return
//     highlight(evt.target)
//   }
//
//   function highlight(element) {
//     if (selectedLi) {
//       selectedLi.classList.remove('red')
//     }
//     selectedLi = element
//     selectedLi.classList.add('red')
//   }
//   // button.addEventListener('click', alertOne)
//   // button.addEventListener('click', alertTwo)
//   // div.addEventListener('mouseenter', alertTwo)
// }
var button = document.getElementsByTagName('button')[0]
var input = document.querySelector('.city')
var weatherText = document.querySelector('.weather_message')
var errorText = document.querySelector('.error')

function getRecepies() {
  var city = input.value || 'Minsk'
  var xhr = new XMLHttpRequest()
  var onProgress = function() {
    button.innerText = 'Loading...'
  }
  var onError = function() {
    button.innerText = 'Отправить запрос'
    console.log('Запрос упал или что-то пошло не так')
  }
  var onLoaded = function () {
    button.innerText = 'Узнать погоду!'
    var res = JSON.parse(xhr.response)

    switch (xhr.status) {
      case 200: {
        weatherText.innerText = 'В городе ' + res.city.name + ' сейчас ' + Math.round(res.list[0].main.temp) + ' градусов'
        weatherText.classList.add('current_weather')
      }
        break;
      case 404: {
        errorText.classList.add('red')
        errorText.innerText = res.message
      }
      break;
      default: return
    }
  }

  weatherText.classList.remove('current_weather')
  errorText.classList.remove('red')
  errorText.innerText = ''
  weatherText.innerText = ''

  xhr.open(
    'GET',
    'https://api.openweathermap.org/data/2.5/forecast?q='+ city + '&units=metric&APPID=8540b7f6d7f0c3c5504a832fccccac03'
  )
  xhr.send()
  xhr.onprogress = onProgress
  xhr.onload = onLoaded
  xhr.onerror = onError
}

button.addEventListener('click', getRecepies)



// function sum(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c
//     }
//   }
// }


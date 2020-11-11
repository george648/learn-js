var arr = [7, 2, 19, 8, 5]
// arr.length = 10
// console.log(arr)
// console.log(arr.pop()) // - удаляет последний элемент и выводит его
// console.log(arr.shift()) // - удаляет первый элемент и выводит его
// console.log(arr.length) // - длина массива
// console.log(arr.length = 0, arr) // самый быстрый способ очистить массив
// console.log(arr.unshift(9), arr)// - добавляет один или несколько элементов в начало и возвращает новую длину массива
// console.log(arr.unshift(9, 1, 7), arr)
// console.log(arr.push(23, 6, 9), arr) // - добавляет один или несколько элементов в конец и возвращает новую длину массива
// console.log(arr.concat(2)) // - добавляет элемент к массиву или массив к массиву
// console.log(arr.concat([5,5,4]))
// console.log(arr.join('-'))
// console.log(arr.join(' '))
// console.log(arr.indexOf(8)) // проверяет существует ли элемент в массиве и если да - возвращает его индекс, если нет - возвращает -1
// console.log(arr.indexOf(2))
// console.log(arr.includes(8)) // проверяет существует ли элемент в массиве
// console.log(arr.reverse()) // разворачивает массив
// console.log(arr.slice(-2, -1)) // указывает диапазон обрезки массива
// console.log(arr.splice(2)) // обрезает массив с указанного индекса
// console.log(arr.sort()) // сортирует массив (для 2 значных и более чисел нужно передавать внутрь функцию сортировки)
// console.log(arr.sort(min))


// function min(a, b) {
//   if (a < b) return -1
//   if (a > b) return 1
//   return 0
// }


// for (var key in arr) {
//   console.log(arr[key])
// }

// for (var element of arr) {
//   console.log(element)
// }

// arr.forEach(forForEach)

// function forForEach(element, index) {
//   console.log(index, element)
// }

// var newArr = arr.map(function(element, index, array) {
//   return element + 'mapped'
// })

// console.log(newArr)

// var bool = arr.every(function(element, index, array) {
  // return element < 10
// })

// var bool2 = arr.some(function(element) {
//   return element < 10
// })

// console.log(bool2)

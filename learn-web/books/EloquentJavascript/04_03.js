/*
Список
Объекты могут быть использованы для построения
различных структур данных. Часто встречающаяся
структура – список (не путайте с массивом). Список –
связанный набор объектов, где первый объект содержит
ссылку на второй, второй – на третий, и т.п.
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
В результате объекты формируют цепочку:
Списки удобны тем, что они могут делиться частью своей
структуры. Например, можно сделать два списка, {value:
0, rest: list} и {value: -1, rest: list}, где list – это ссылка на
ранее объявленную переменную. Это два независимых
списка, при этом у них есть общая структура list, которая
включает три последних элемента каждого из них. Кроме
того, оригинальный список также сохраняет свои свойства
как отдельный список из трёх элементов.
Напишите функцию arrayToList, которая строит такую
структуру, получая в качестве аргумента [1, 2, 3], а также
функцию listToArray, которая создаёт массив из списка.
Также напишите вспомогательную функцию prepend,
которая получает элемент и создаёт новый список, где
этот элемент добавлен спереди к первоначальному
списку, и функцию nth, которая в качестве аргументов
принимает список и число, а возвращает элемент на
заданной позиции в списке или же undefined в случае
отсутствия такого элемента.
Если ваша версия nth не рекурсивна, тогда напишите её
рекурсивную версию.
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
*/

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    };
  }
  return list;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

function listToArray(list) {
  var array = [];
  for (var buffer = list; buffer; buffer = buffer.rest)
    array.push(buffer.value);
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

function prepend(value, rest) {
  var list = {
    value: value,
    rest: rest
  }
  return list;
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

function nth(list, number) {
  if (!list) return undefined;
  var element = 0;
  for(var i = 0; i <= number; i++) {
    element = list.value;
    list = list.rest;
  }
  return element;
}

// Рекурсивный вариант nth
function nth(list, number) {
  if (!list) return undefined;
  else if (number == 0) return list.value;
  else return nth(list.rest, number - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

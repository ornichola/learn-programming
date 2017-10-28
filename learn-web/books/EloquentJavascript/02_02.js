/*
FizzBuzz
Напишите программу, которая выводит через console.log
все числа от 1 до 100, с двумя исключениями. Для чисел,
нацело делящихся на 3, она должна выводить ‘Fizz’, а
для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила
«FizzBuzz» для всех чисел, которые делятся и на 3, и на
5.
(На самом деле, этот вопрос подходит для
собеседований, и, говорят, он позволяет отсеивать
довольно большое число кандидатов. Поэтому, когда вы
решите эту задачу, можете себя похвалить.)
*/

for (var number = 1; number <= 100; number++) {
  if (number % 3 == 0) console.log('Fizz');
  else if (number % 5 == 0 && number % 3 != 0) console.log('Buzz');
  else console.log(number);
}

/* ... исправьте её так, чтобы она выводила
«FizzBuzz» для всех чисел, которые делятся и на 3, и на
5.
*/

for (var number = 1; number <= 100; number++) {
  if (number % 3 == 0 && number % 5 == 0) console.log('FizzBuzz');
  else if (number % 3 == 0) console.log('Fizz');
  else if (number % 5 == 0 && number % 3 != 0) console.log('Buzz');
  else console.log(number);
}

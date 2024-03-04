// 11.4. Функции высшего порядка

//Задание 3
function numA(a) {
  return function intFunc(b) {
    return a+b
  }
}

const valueNumA = numA(6);
const result = valueNumA(5);
console.log(result);
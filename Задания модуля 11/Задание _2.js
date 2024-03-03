// 11.3. Параметры и возвращаемое значение

//Задание 2
let num = +prompt ("Введите число от 2 до 1000!")
function isPrime(num) {
  if (num === 0) {
    return alert ("Ошибка! Вы ввели 0!");
  } else if (num === 1) {
    return alert ("Ошибка! Вы ввели 1!");
  } else if (num === 2) {
    return alert ("Число 2 простое!")
  } else if (num > 1000) {
    return alert ("Вы ввели слишком большое число! Пожалуйста, введите число от 2 до 1000!");
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return alert (`Число ${num} не является простым!`)
      } else {
        return alert (`Число ${num} простое!`)
      }
    }
  }
};

isPrime(num);
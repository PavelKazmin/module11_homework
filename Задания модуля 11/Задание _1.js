// 11.1. Функции без параметров

//Задание 1

function getCountEvenOddZeros() {
  const arr = [18, 335, 876, 348, 12, 90, 45, 465, 45, 78, 54, 3456, 1, 93, 8, 2, 0, 0];
  let countZeros = 0,
      countEven = 0, 
      countOdd = 0;   
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        countZeros++;
      } else if (arr[i] % 2 === 0) {
        countEven++;
      } else if (arr[i] % 2 !== 0) {
        countOdd++;
      }   
   }
   console.log(`Четных - ${countEven}, Нечетных - ${countOdd}, Нулей - ${countZeros}`);
}
getCountEvenOddZeros()
// 11.6. Функции обратного вызова

//Задание 4
function counter(a, b) {
    let currentValue = a;
    const countInt = setInterval(function () {
        console.log(currentValue);
        if (currentValue === b) {
            clearInterval(countInt);
        }
        currentValue++
    }, 1000);
}
counter(1, 15)
 
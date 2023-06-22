// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
  let a = 11;
  localStorage.setItem(5, a);
}

// ваше событие здесь!!!
document.querySelector(".b-1").onclick = t1;

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

const a2 = [7, 6, 5];
function t2() {
  localStorage.setItem("a2", JSON.stringify(a2));
}

// ваше событие здесь!!!
document.querySelector(".b-2").onclick = t2;

// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
  let out = "";
  let a3 = localStorage.getItem("a2");
  a3 = JSON.parse(a3);

  a3.forEach((item, index) => {
    out += `${index} ${item}<br>`;
  });

  //   for (i = 0; i < a3.length; i++) {
  //     out += i + " " + a3[i] + "<br>";    /* вариант 1 */
  //   }
  document.querySelector(".out-3").innerHTML = out;
}

// ваше событие здесь!!!
document.querySelector(".b-3").addEventListener("click", t3);

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

const a4 = { hello: "world", hi: "mahai" };

function t4() {
  localStorage.setItem("a4", JSON.stringify(a4));
}

// ваше событие здесь!!!
document.querySelector(".b-4").addEventListener("click", t4);

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
  let out = "";
  let a5 = localStorage.getItem("a4");
  a5 = JSON.parse(a5);

  for (const key in a5) {
    out += `${key} ${a5[key]}<br>`;
  }
  document.querySelector(".out-5").innerHTML = out;
}

// ваше событие здесь!!!
document.querySelector(".b-5").addEventListener("click", t5);

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
  localStorage.clear();
}

// ваше событие здесь!!!
document.querySelector(".b-6").addEventListener("click", t6);

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

let a7 = [];

function t7() {
  if (localStorage.getItem("a7")) {
    a7 = JSON.parse(localStorage.getItem("a7"));
  }
  a7.push(document.querySelector(".i-7").value);

  localStorage.setItem("a7", JSON.stringify(a7));
}

// ваше событие здесь!!!
document.querySelector(".b-7").addEventListener("click", t7);

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
  if (localStorage.getItem("a7")) {
    a7 = JSON.parse(localStorage.getItem("a7"));
  }
  a7.pop();
  localStorage.setItem("a7", JSON.stringify(a7));
}

// ваше событие здесь!!!
document.querySelector(".b-8").addEventListener("click", t8);

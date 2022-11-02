let a = 19;


// >= <= == !=
// if (a != 9) {
//     // true
//     console.log('Yes');
// }
// else {
//     console.log('else');
// }

// 14 < a < 45

const button = document.querySelector('button');
const input = document.querySelector('.age');

// () => стрелочная функция
button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log('welcome!!!');
    }
    else if (num > 60) {
        console.log('Ты точно сюда?');
    }
    else if (num > 60) {
        console.log('Ты точно сюда?');
    }
    else if (num > 60) {
        console.log('Ты точно сюда?');
    }
    else {
        console.log('Ты не пройдешь!!!');
    }
    //сяда

    switch (num) {
        case 15:
            console.log('Еще год потерпи!');
            break;
        case 16:
            console.log('Урраааа можно!!!');
            break;
        default:
            console.log('oooook');
    }
}

let b = 4;

console.log(b == 3 || b == 7); // && - и  || или
let a = 'hello,hi,mahai';
console.log(a.split(','));

let b = [8, 9, 7];

console.log(b);
console.log(b.join('-'));

b.forEach(function (elem, index) {
    console.log(index);
    console.log(elem = elem * 2);
    console.log('--');
});

console.log(b);
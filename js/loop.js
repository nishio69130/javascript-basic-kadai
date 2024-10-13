let num = Math.floor(Math.random() * 5);

console.log('最初の数は' + num + 'です');

while (num !== 0) {
    num = Math.floor(Math.random() * 5);
    console.log('現在の数は' + num + 'です');
}

for (let i=1; i <= 10; i++) {
    console.log(i);
}
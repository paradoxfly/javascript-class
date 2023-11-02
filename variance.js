// 823, 7482, 54156, 516, 546, 98, 7491, 3541, 8423, and  1561.
let a = 823;
let b = 7482;
let c = 54156;
let d = 516;
let e = 546;
let f = 98;
let g = 7491;
let h = 3541;
let i = 8423;
let j = 1561;

const sum = a + b + c + d + e + f + g + h + i + j;

const average = sum / 10;

console.log(average);

a = (a - average) ** 2; 
b = (b - average) ** 2;
c = (c - average) ** 2;
d = (d - average) ** 2;
e = (e - average) ** 2;
f = (f - average) ** 2;
g = (g - average) ** 2;
h = (h - average) ** 2;
i = (i - average) ** 2;
j = (j - average) ** 2;

const sumOfSquares = a + b + c + d + e + f + g + h + i + j;

const variance = sumOfSquares / 10;

console.log(variance);

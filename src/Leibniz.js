let pi4 = 0;
let start = performance.now();

for(let i = 0;i < 100000000;i++){
    pi4 += (1 / (i * 4 + 1) - 1 / (i * 4 + 3));
}

let end = performance.now() - start;

console.log((end/1000) + "[sec]");
console.log(pi4 * 4);



const argarr = process.argv;
const arglen = process.argv.length - 2;
let sum = 0;

for (let i = 0; i < arglen; i++) {
    sum += +argarr[i+2];
}
console.log(sum);

let max = parseInt(prompt ('max num'));
while(!max) {
     max = parseInt(prompt ('val num'));
}
const sunNum = Math.floor(Math.random() * max) + 1;
console.log(sunNum);

let g = parseInt(prompt('first g'));
let tr = 1;
while (g !== sunNum) {
    tr++;
    if (g > sunNum) {
        g = parseInt(prompt('PT lvl'));
    } else {
        g = parseInt(prompt ('tl'));
    }
}
console.log (`'scss' ${tr}`)
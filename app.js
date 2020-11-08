let max = parseInt(prompt ('max num'));
while(!max) {
     max = parseInt(prompt ('val num'));
}
const sunNum = Math.floor(Math.random() * max) + 1;
console.log(sunNum);

let g = parseInt(prompt('first g'));
while (g !== sunNum) {
    if (g > sunNum) {
        g = prompt('PT lvl');
    } else {
        g = prompt ('tl');
    }
}
consolel.log ('scss')
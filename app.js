let max = parseInt(prompt ('max num'));

while(!max) {
    let max = parseInt(prompt ('val num'));
}
const sunNum = Math.floor(Math.random() * max) + 1;
console.log(sunNum);

const sharp = require('sharp');

let jpg = [1];

jpg.map(item => {
    sharp('./input/pic.jpg')
    .toFile('./output/pic.webp')
})  



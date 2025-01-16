
const sharp = require('sharp');

let jpg = [1,2];

jpg.map(item => {
    sharp(`./input/${item}.jpg`)
    .toFile(`./output/${item}.webp`)
})


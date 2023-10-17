const fs = require('fs');
const content = fs.readFileSync('./README.md', 'UTF-8');
const words = content.split(" ");
const reactWord = words.filter((word) => {    
    if( word.toLocaleLowerCase() === 'react' ) {
        return 'react';
    }
});

const reactWordgi = content.match(/react/gi ?? []).length;


console.log('reactWord:', reactWord.length);
console.log('Palabras:', reactWord.length);
console.log('reactWordgi:', reactWordgi);
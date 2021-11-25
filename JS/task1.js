let sentence = "Наука про взаємодію електронів з електромагнітними полями";
let word = "електронів";
if(sentence.includes(word)){
    word[0].toUpperCase() + word.slice(1)
    console.log(`Cлово "${word[0].toUpperCase() + word.slice(1)}" входить в речення`);
}
else{console.log(`Cлово "${word[0].toUpperCase() + word.slice(1)}" не входить в речення`);}
// 'use srtict'

let alphapit = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                   'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let index = console.log(alphapit.indexOf('a'));
let binaryAcordingToAlphapit = ['01000001',
 '01000010',
 '01000011',
 '01000100',
 '01000101',
 '01000110',
 '01000111',
 '01001000',
 '01001001',
 '01001010',
 '01001011',
 '01001100',
 '01001101',
 '01001110',
 '01001111',
 '01010000',
 '01010001',
 '01010010',
 '01010011',
 '01010100',
 '01010101',
 '01010110',
 '01010111',
 '01011000',
 '01011001',
 '01011010',
 '01100001',
 '01100010',
 '01100011',
 '01100100',
 '01100101',
 '01100110',
 '01100111',
 '01101000',
 '01101001',
 '01101010',
 '01101011',
 '01101100',
 '01101101',
 '01101110',
 '01101111',
 '01110000',
 '01110001',
 '01110010',
 '01110011',
 '01110100',
 '01110101',
 '01110110',
 '01110111',
 '01111000',
 '01111001',
 '01111010'
];




const startBtn = document.getElementById('start');



startBtn.addEventListener('click',()=>{
    
    let textHTML = document.getElementById('text-input')
    console.log(textHTML.innerText);
    let text = textHTML.value;
    
    let binary = document.getElementById('binary-output');
    
    
    let words = text.split(' ');
    let chars = [];
    
    let binaryOutput = [];
    
    
    
    
    function sentencensToChars(text) {
    
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            chars.push(char);
        }
        console.log(chars);
    }
    
    let isChar;
    function translator(chars) {
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            console.log(char);
            var charIndex = alphapit.indexOf(char)
            console.log(charIndex);
    
            isChar = alphapit.includes(char);
            console.log(isChar);
    
            if (isChar == true) {
                binaryOutput.push(binaryAcordingToAlphapit[charIndex]);
                
            }
            else {
                binaryOutput.push(' ');
            }
        }
        console.log(binaryOutput)
        binary.innerText = binaryOutput.join(' ')
    }

    sentencensToChars(text)
    translator(chars)

});
// for(const char of chars){

// }

// done on fri, july 30,2021 at 6:12pm by Abdulrahman Tayel (31@ze).
// ᓚᘏᗢ


















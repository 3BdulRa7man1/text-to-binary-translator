document.addEventListener('DOMContentLoaded',()=>{
    // let text = document.getElementById('text');
    let text = 'hi every body';

    let charsArray = [];

    let resulte = document.querySelector('.resulte');
    let startBtn = document.getElementById('start');

    function charsArrayMaker(text){
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            charsArray.push(char);
        }
        console.log(charsArray);
    }


    startBtn.addEventListener('click',charsArrayMaker(text));

    let alphapit = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                   'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let binaryAcordingToAlphapit = [01000001,
        01000010,
        01000011,
        01000100,
        01000101,
        01000110,
        01000111,
        01001000,
        01001001,
        01001010,
        01001011,
        01001100,
        01001101,
        01001110,
        01001111,
        01010000,
        01010001,
        01010010,
        01010011,
        01010100,
        01010101,
        01010110,
        01010111,
        01011000,
        01011001,
        01011010,
        01100001,
        01100010,
        01100011,
        01100100,
        01100101,
        01100110,
        01100111,
        01101000,
        01101001,
        01101010,
        01101011,
        01101100,
        01101101,
        01101110,
        01101111,
        01110000,
        01110001,
        01110010,
        01110011,
        01110100,
        01110101,
        01110110,
        01110111,
        01111000,
        01111001];

    let c;
    function looper(text){
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            c = char
        }
    }

    function isInText(c) {
        looper(text)
        console.log(alphapit.indexOf(c)!==-1); 
    }
    isInText(c);
    function convertor(text) {
    //     for (let i = 0; i < text.length; i++) {
    //         const char = text[i];
    //         if (char == '') {
                
    //         }
    //     }
    // }
    for (const char of text) {
        if (char ) {
            
        }
    }
}

});


let startBtn = document.getElementById('start');
let text = 'hi every body';
    

let wordsArray ;

function sentencesDevider(text) {
    wordsArray = text.spitl(' ');

}

startBtn.addEventListener('click',sentencesDevider(text))
// a		01100001	A		01000001
// b		01100010	B		01000010
// c		01100011	C		01000011
// d		01100100	D		01000100
// e		01100101	E		01000101
// f		01100110	F		01000110
// g		01100111	G		01000111
// h		01101000	H		01001000
// i		01101001	I		01001001
// j		01101010	J		01001010
// k		01101011	K		01001011
// l		01101100	L		01001100
// m		01101101	M		01001101
// n		01101110	N		01001110
// o		01101111	O		01001111
// p		01110000	P		01010000
// q		01110001	Q		01010001
// r		01110010	R		01010010
// s		01110011	S		01010011
// t		01110100	T		01010100
// u		01110101	U		01010101
// v		01110110	V		01010110
// w		01110111	W		01010111
// x		01111000	X		01011000
// y		01111001	Y		01011001
// z		01111010	Z		01011010

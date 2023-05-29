const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');

const inputOriginal2 = document.getElementById('input-original2');
const decifrador = document.getElementById('decifrador');
const resultado2 = document.getElementById('resultado2');
const rango2 = document.getElementById('rango2');

const shiftMessage = () => {
    const wordArray = [...inputOriginal.value.toUpperCase()];
    printChar(0, wordArray, resultado, rango);
}

const printChar = (currentLetterIndex, wordArray, output, shiftRange) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span");
    output.appendChild(spanChar);
    animateChar(spanChar)
        .then(() => {
            const charSinCodificar = wordArray[currentLetterIndex];
            spanChar.innerHTML = alfabeto.includes(charSinCodificar) ? 
                alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(shiftRange.value)) % alfabeto.length] : 
                charSinCodificar;
            printChar(currentLetterIndex + 1, wordArray, output, shiftRange);
        });
}

const animateChar = spanChar => {
    let cambiosDeLetra = 0;
    return new Promise(resolve => {
        const intervalo = setInterval(() => {
            spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            cambiosDeLetra++;
            if(cambiosDeLetra === 3) {
                clearInterval(intervalo);
                resolve();
            }
        }, 50);
    });
}

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shiftMessage();
}

cifrador.onsubmit = submit;


//decifrador en el 

const shiftMessage2 = () => {
    const wordArray = [...inputOriginal2.value.toUpperCase()];
    printChar2(0, wordArray, resultado2, rango2);
}

const printChar2 = (currentLetterIndex, wordArray, output, shiftRange) => {
    if(wordArray.length === currentLetterIndex) return;
    inputOriginal2.value = inputOriginal2.value.substring(1)
    const spanChar = document.createElement("span");
    output.appendChild(spanChar);
    animateChar2(spanChar)
        .then(() => {
            const charSinCodificar = wordArray[currentLetterIndex];
            spanChar.innerHTML = alfabeto.includes(charSinCodificar) ? 
                alfabeto[(alfabeto.indexOf(charSinCodificar) - parseInt(shiftRange.value) + alfabeto.length) % alfabeto.length] : 
                charSinCodificar;
            printChar2(currentLetterIndex + 1, wordArray, output, shiftRange);
        });
}

const animateChar2 = spanChar => {
    let cambiosDeLetra = 0;
    return new Promise(resolve => {
        const intervalo = setInterval(() => {
            spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            cambiosDeLetra++;
            if(cambiosDeLetra === 3) {
                clearInterval(intervalo);
                resolve();
            }
        }, 50);
    });
}

const submit2 = e => {
    e.preventDefault();
    resultado2.innerHTML = '';
    shiftMessage2();
}

decifrador.onsubmit = submit2;

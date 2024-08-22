document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input');
    const encryptButton = document.querySelector('.encrypt');
    const decryptButton = document.querySelector('.decrypt');
    const outputField = document.querySelector('.output');
    const personImage = document.querySelector('.person');
    const noTextParagraph = document.querySelector('.no-text');
    const descriptionParagraph = document.querySelector('.description');
    const copyButton = document.querySelector('.copy');

    outputField.style.display = 'none';
    copyButton.style.display = 'none';

    encryptButton.addEventListener('click', () => {
        const text = inputField.value.toLowerCase();
        if (validateText(text)) {
            const encryptedText = encryptText(text);
            showResultText(encryptedText);
        } else {
            alert("El texto introducido solo debe contener letras minúsculas y sin acentos");
        }
    });

    decryptButton.addEventListener('click', () => {
        const text = inputField.value.toLowerCase();
        if (validateText(text)) {
            const decryptedText = decryptText(text);
            showResultText(decryptedText);
        } else {
            alert("El texto introducido solo debe contener letras minúsculas y sin acentos");
        }
    });

    copyButton.addEventListener('click', () => {
        outputField.select();
        outputField.setSelectionRange(0, 10000);
        navigator.clipboard.writeText(outputField.value);
        alert('Texto copiado al portapapeles');
        outputField.value = '';
    })

    function encryptText(text) {
        return text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    }

    function decryptText(text) {
        return text.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    }

    function validateText(text) {
        return /^[a-z\s]*$/.test(text);
    }

    function showResultText(newText) {
        outputField.value = newText;
        outputField.style.display = 'block';
        copyButton.style.display = 'block'
        personImage.style.display = 'none';
        noTextParagraph.style.display = 'none';
        descriptionParagraph.style.display = 'none';
    }
});

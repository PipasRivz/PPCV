const messages = [
    "Estas segura?",
    "Muy muy MUY segura??",
    "Estas bromeando?",
    "Porfis porfiiiiiiis",
    "Piensalo un segundito Cin",
    "Si dices que no... me voy a awitar",
    "Estaré MUUUUUUY triste...",
    "Extremadamente triste y awitado...",
    "Meno me rindo, dejaré de preguntar...",
    "Bromiiiis pero ya di que si c: ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
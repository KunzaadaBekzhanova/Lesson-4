function resetLights() {
    document.getElementById('red').style.backgroundColor = 'gray';
    document.getElementById('yellow').style.backgroundColor = 'gray';
    document.getElementById('green').style.backgroundColor = 'gray';
}

const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
const message = document.getElementById('message');

redLight.addEventListener('mouseenter', () => {
    resetLights();
    redLight.style.backgroundColor = 'red';
    message.textContent = 'STOP';
});

redLight.addEventListener('mouseleave', () => {
    resetLights();
    message.textContent = '';
});

yellowLight.addEventListener('mouseenter', () => {
    resetLights();
    yellowLight.style.backgroundColor = 'yellow';
    message.textContent = 'WAIT';
});

yellowLight.addEventListener('mouseleave', () => {
    resetLights();
    message.textContent = '';
});

greenLight.addEventListener('mouseenter', () => {
    resetLights();
    greenLight.style.backgroundColor = 'green';
    message.textContent = 'GO';
});

greenLight.addEventListener('mouseleave', () => {
    resetLights();
    message.textContent = '';
});
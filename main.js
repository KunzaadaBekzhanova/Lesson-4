//счетчик в HTML две кнопки (increment, decrement) или ("-", "+") 
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

let count = 0;

incrementButton.addEventListener("click", () => {
  count++;
  counterElement.textContent = count; 
  counterElement.style.color = "green";
});

decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counterElement.textContent = count; 
    counterElement.style.color = "red";
  }
});

// Создать блок 500 на 500 с бордером. Внутри которого будет отлавливаться координаты курсора как на уроке. 
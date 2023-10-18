const loadingBar = document.querySelector('.loadingBarFront');
const container = document.querySelector('.container');
const counterText = document.querySelector('.counter');

// // coded mako
// container.addEventListener('click', () => {
//     let counter = 0;
//     const interval = setInterval(() => {
//         counter++;
//         if (counter >= 100) {
//             clearInterval(interval);
//         }
//         counterText.innerHTML = `%${counter}`;
//         loadingBar.style.width = `${counter}%`;
//     }, 10);
// });

let number = 0;

updateNumber();

function updateNumber() {
    counterText.textContent = number + '%';
    loadingBar.style.width = number + '%';
    number++
    if (number < 101) {
        setTimeout(updateNumber, 20);
    }
}
let winnersBtn = document.querySelector('.winners-btn');
let closeBtn = document.querySelector('.winners__closeBtn');
let winners = document.querySelector('.results__winners');

winnersBtn.addEventListener('click', () => {
    winners.classList.add('winners-active');
});

closeBtn.addEventListener('click', () => {
    winners.classList.remove('winners-active');
});

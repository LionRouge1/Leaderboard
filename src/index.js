import './style.css';
import refresh from './refresh.js';
import submit from './submit.js';

const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M4j8ipwhBO11Kf9GfGqr/scores/';
const table = document.getElementById('scores_list');
const scoreForm = document.getElementById('score_form');
const btnRefresh = document.getElementById('refresh');

const display = async () => {
  table.innerHTML = '';
  const res = await refresh(gameUrl);
  const scores = res.result;
  scores.forEach(({ user, score }) => {
    const list = `<tr><td>${user}:</td><td>${score}</td></tr>`;
    table.insertAdjacentHTML('beforeend', list);
  });
};

btnRefresh.addEventListener('click', display);

display().catch((error) => {
  table.style.color = 'red';
  table.textContent = error;
});

document.querySelector('input[type = "button"]').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  submit(gameUrl, name, score).then((ValMessage) => {
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
    const message = document.createElement('span');
    message.style.color = 'green';
    message.textContent = ValMessage.message;
    scoreForm.appendChild(message);
  }).catch((error) => {
    const message = document.createElement('span');
    message.style.color = 'red';
    message.textContent = error;
    scoreForm.appendChild(message);
  });
});

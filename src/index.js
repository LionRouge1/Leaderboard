import './style.css';
import refresh from './refresh.js';
import submit from './submit.js';

const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M4j8ipwhBO11Kf9GfGqr/scores/';
const table = document.querySelector('#scores_list > tbody');
const btnRefresh = document.getElementById('refresh');

const showError = (message, type = 'success') => {
  const box = document.createElement('span');
  box.style.color = (type === 'success')? 'green' : 'red';
  box.id = 'box_message';
  box.textContent = message;
  document.querySelector('body').appendChild(box);
  setTimeout(() => box.remove(), 6000);
}

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
  showError(error, 'error');
});

document.querySelector('input[type = "button"]').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  submit(gameUrl, name, score).then((ValMessage) => {
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
    showError(ValMessage.message);
  }).catch((error) => {
    showError(error, 'error');
  });
});

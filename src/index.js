import './style.css';
import refresh from './refresh.js';
import submit from './submit.js';
const game_url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M4j8ipwhBO11Kf9GfGqr/scores/';
const table = document.getElementById('scores_list');
const score_form = document.getElementById('score_form');
const btn_refresh = document.getElementById('refresh');

const display = async () => {
 table.innerHTML = '';
 const res = await refresh(game_url);
 const scores = res.result;
 console.log(scores);
 scores.forEach(({user, score}) => {
  const list = `<tr><td>${user}:</td><td>${score}</td></tr>`;
  table.insertAdjacentHTML('beforeend', list);
 });
};

btn_refresh.addEventListener('click',display);

display().catch(error => {
 table.style.color = 'red';
 table.textContent = error;
});

document.querySelector('input[type = "button"]').addEventListener('click', (e) => {
 e.preventDefault;
 const name = document.getElementById('name').value;
 const score = document.getElementById('score').value;
 submit(game_url,name,score).then(ValMessage => {
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
  const message = document.createElement('span');
  message.style.color = 'green';
  message.textContent = ValMessage.message;
  score_form.appendChild(message);
 }).catch(error => {
  const message = document.createElement('span');
  message.style.color = 'red';
  message.textContent = error;
  score_form.appendChild(message);
 });
});

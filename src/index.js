import './style.css';
import getData from './getData.js';

const table = document.querySelector('#scores_list > tbody');
const btnRefresh = document.getElementById('refresh');

const showError = (message, type = 'success') => {
  const box = document.createElement('span');
  box.style.color = (type === 'success') ? 'green' : 'red';
  box.id = 'box_message';
  box.textContent = message;
  document.querySelector('body').appendChild(box);
  setTimeout(() => box.remove(), 6000);
};

const display = async () => {
  table.innerHTML = '';
  const data = new getData();
  const scores = await data.refresh();
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
  const data = new getData(name, score);
  data.submit().then((ValMessage) => {
    document.getElementById('name').value = '';
    document.getElementById('score').value = '';
    showError(ValMessage.message);
  }).catch((error) => {
    showError(error, 'error');
  });
});

let clicks = 0;
let timer = 10;
let timerInterval = null;
let playerName = "";
let gameActive = false;

const startGame = (event) => {
  event.preventDefault();
  playerName = document.querySelector("#yourname").value.trim();
  if (!playerName) return;

  clicks = 0;
  timer = 10;
  gameActive = true;

  document.querySelector("#clickCountDisplay").textContent = `Clicks: 0`;
  document.querySelector("#nameForm").classList.add("hidden");
  document.querySelector("#gameArea").classList.remove("hidden");
  document.querySelector("#timer").textContent = `Time left: ${timer}`;

  timerInterval = setInterval(() => {
    timer--;
    document.querySelector("#timer").textContent = `Time left: ${timer}`;
    if (timer <= 0) endGame();
  }, 1000);
};

const registerClick = () => {
  if (!gameActive) return;
  clicks++;
  document.querySelector("#clickCountDisplay").textContent = `Clicks: ${clicks}`;
};

const endGame = async () => {
  clearInterval(timerInterval);
  gameActive = false;

  document.querySelector("#gameArea").classList.add("hidden");
  document.querySelector("#nameForm").classList.remove("hidden");

  const json = { name: playerName, score: clicks };
  const body = JSON.stringify(json);

  await fetch("/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body
  });

  await loadScores();
};

const loadScores = async () => {
  const response = await fetch("/results");
  const scores = await response.json();

  const tbody = document.querySelector("#scoreTable tbody");
  tbody.innerHTML = "";

  scores.sort((a, b) => b.score - a.score); //sort highets

  scores.forEach((row, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.score}</td>
      <td>${row.clicksPerSecond.toFixed(1)}</td>
      <td><button class="delete-btn" onclick="deleteScore(${index})">Delete</button></td>
    `;
    tbody.appendChild(tr);
  });
};

const deleteScore = async (index) => {
  await fetch(`/delete/${index}`, {
    method: "DELETE"
  });
  await loadScores();
};

window.onload = () => {
  document.querySelector("#nameForm").onsubmit = startGame;
  document.querySelector("#clickButton").onclick = registerClick;
  loadScores();
};

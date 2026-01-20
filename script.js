// ===== GLOBAL O'ZGARUVCHILAR =====
let quizQuestions = [];
let currentIndex = 0;
let correctCount = 0;
let answered = false;

// ===== VARIANTLARNI RANDOM QILISH =====
function shuffleOptions(questionObj) {
  const arr = questionObj.options.map((text, index) => ({
    text,
    isCorrect: index === questionObj.answer
  }));

  // Fisher–Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return {
    question: questionObj.question,
    options: arr.map(o => o.text),
    answer: arr.findIndex(o => o.isCorrect)
  };
}

// ===== BLOCKLAR =====
function startBlock(blockNumber) {
  let start = (blockNumber - 1) * 50;
  let end = blockNumber * 50;

  quizQuestions = questions
    .slice(start, end)
    .map(q => shuffleOptions(q));

  startQuiz();
}

function startAll() {
  quizQuestions = questions.map(q => shuffleOptions(q));
  startQuiz();
}

function startRandom() {
  quizQuestions = questions
    .sort(() => Math.random() - 0.5)
    .slice(0, 50)
    .map(q => shuffleOptions(q));

  startQuiz();
}

// ===== QUIZNI BOSHLASH =====
function startQuiz() {
  currentIndex = 0;
  correctCount = 0;
  answered = false;

  document.getElementById("menu").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");

  showQuestion();
}

// ===== SAVOLNI KO‘RSATISH =====
function showQuestion() {
  answered = false;

  const q = quizQuestions[currentIndex];

  document.getElementById("counter").innerText =
    `Savol ${currentIndex + 1} / ${quizQuestions.length}`;

  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i, btn);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("info").innerText = "";
}

// ===== JAVOBNI TEKSHIRISH =====
function checkAnswer(selectedIndex, btn) {
  if (answered) return;
  answered = true;

  const q = quizQuestions[currentIndex];
  const buttons = document.querySelectorAll("#options button");

  buttons.forEach(b => b.disabled = true);

  if (selectedIndex === q.answer) {
    btn.classList.add("correct");
    document.getElementById("info").innerText = "✅ To‘g‘ri";
    correctCount++;
  } else {
    btn.classList.add("wrong");
    buttons[q.answer].classList.add("correct");
    document.getElementById("info").innerText = "❌ Xato";
  }
}

// ===== KEYINGI SAVOL =====
function nextQuestion() {
  if (!answered) return;

  currentIndex++;
  if (currentIndex < quizQuestions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

// ===== TUGATISH =====
function finishQuiz() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("result").innerHTML = `
    <h2>📊 Natija</h2>
    <p>To‘g‘ri javoblar: <b>${correctCount}</b></p>
    <p>Xato javoblar: <b>${quizQuestions.length - correctCount}</b></p>
    <p>Jami savollar: <b>${quizQuestions.length}</b></p>
    <button onclick="location.reload()">🔁 Qayta boshlash</button>
  `;
}

// ===== HTML ONCLICK UCHUN GLOBAL =====
window.startBlock = startBlock;
window.startAll = startAll;
window.startRandom = startRandom;
window.nextQuestion = nextQuestion;
window.finishQuiz = finishQuiz;

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1,
    prize: "₹1,000"
  },
  {
    question: "Who is known as the Father of the Nation in India?",
    options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Bhagat Singh"],
    answer: 0,
    prize: "₹5,000"
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: 2,
    prize: "₹10,000"
  },
  {
    question: "Which is the largest ocean in the world?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: 2,
    prize: "₹50,000"
  }
];

let currentIndex = 0;
let lock = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const prizeEl = document.getElementById("prize");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  lock = false;
  let q = questions[currentIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  prizeEl.textContent = "";
  q.options.forEach((opt, i) => {
    let btn = document.createElement("div");
    btn.textContent = opt;
    btn.classList.add("option");
    btn.onclick = () => checkAnswer(btn, i);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(btn, index) {
  if (lock) return;
  lock = true;
  let correctIndex = questions[currentIndex].answer;
  if (index === correctIndex) {
    btn.classList.add("correct");
    prizeEl.textContent = `You won ${questions[currentIndex].prize}!`;
  } else {
    btn.classList.add("wrong");
    optionsEl.children[correctIndex].classList.add("correct");
    prizeEl.textContent = "Game Over!";
  }
}

nextBtn.onclick = () => {
  if (!lock) return;
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Congratulations! You completed the quiz!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

loadQuestion();

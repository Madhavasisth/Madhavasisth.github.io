document.addEventListener('DOMContentLoaded', function() {
    function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  // ---- Your existing question array ----
  const allQuestions = [
    {
      question: "What has keys but can't open locks?",
      answers: [
        { text: "A piano", correct: true },
        { text: "A map", correct: false },
        { text: "A clock", correct: false },
        { text: "A lockpick", correct: false }
      ]
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false },
        { text: "Saturn", correct: false }
      ]
    },
    {
      question: "I speak without a mouth and hear without ears. What am I?",
      answers: [
        { text: "An echo", correct: true },
        { text: "A shadow", correct: false },
        { text: "A ghost", correct: false },
        { text: "A mirror", correct: false }
      ]
    },
    {
      question: "What number comes next in the sequence: 2, 3, 5, 7, 11, ?",
      answers: [
        { text: "13", correct: true },
        { text: "14", correct: false },
        { text: "15", correct: false },
        { text: "17", correct: false }
      ]
    },
    {
      question: "Which animal is known as the 'King of the Jungle'?",
      answers: [
        { text: "Lion", correct: true },
        { text: "Tiger", correct: false },
        { text: "Elephant", correct: false },
        { text: "Bear", correct: false }
      ]
    },
    {
      question: "What is always in front of you but can’t be seen?",
      answers: [
        { text: "The future", correct: true },
        { text: "The air", correct: false },
        { text: "Your nose", correct: false },
        { text: "Your eyes", correct: false }
      ]
    },
    {
      question: "Which word is spelled incorrectly in every dictionary?",
      answers: [
        { text: "Incorrectly", correct: true },
        { text: "Dictionary", correct: false },
        { text: "Every", correct: false },
        { text: "Misspelled", correct: false }
      ]
    },
    {
      question: "What gets wetter the more it dries?",
      answers: [
        { text: "A towel", correct: true },
        { text: "A sponge", correct: false },
        { text: "The sun", correct: false },
        { text: "A river", correct: false }
      ]
    },
    {
      question: "Which is heavier: a kilogram of feathers or a kilogram of bricks?",
      answers: [
        { text: "Neither, they weigh the same", correct: true },
        { text: "Feathers", correct: false },
        { text: "Bricks", correct: false },
        { text: "Depends on gravity", correct: false }
      ]
    },
    {
      question: "What can travel around the world while staying in a corner?",
      answers: [
        { text: "A stamp", correct: true },
        { text: "A shadow", correct: false },
        { text: "A coin", correct: false },
        { text: "A compass", correct: false }
      ]
    },
    {
      question: "What has a heart that doesn’t beat?",
      answers: [
        { text: "An artichoke", correct: true },
        { text: "A rock", correct: false },
        { text: "A robot", correct: false },
        { text: "A statue", correct: false }
      ]
    },
    {
      question: "Which month has 28 days?",
      answers: [
        { text: "All of them", correct: true },
        { text: "February", correct: false },
        { text: "June", correct: false },
        { text: "December", correct: false }
      ]
    },
    {
      question: "What is full of holes but still holds water?",
      answers: [
        { text: "A sponge", correct: true },
        { text: "A bucket", correct: false },
        { text: "A net", correct: false },
        { text: "A pipe", correct: false }
      ]
    },
    {
      question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
      answers: [
        { text: "The letter M", correct: true },
        { text: "A second", correct: false },
        { text: "A day", correct: false },
        { text: "A year", correct: false }
      ]
    },
    {
      question: "What can you catch but not throw?",
      answers: [
        { text: "A cold", correct: true },
        { text: "A ball", correct: false },
        { text: "A fish", correct: false },
        { text: "A frisbee", correct: false }
      ]
    },
    {
      question: "What is so fragile that saying its name breaks it?",
      answers: [
        { text: "Silence", correct: true },
        { text: "Glass", correct: false },
        { text: "Ice", correct: false },
        { text: "Egg", correct: false }
      ]
    },
    {
      question: "If you have me, you want to share me. If you share me, you don't have me. What am I?",
      answers: [
        { text: "A secret", correct: true },
        { text: "Money", correct: false },
        { text: "A joke", correct: false },
        { text: "A gift", correct: false }
      ]
    },
    {
      question: "What has one eye but can’t see?",
      answers: [
        { text: "A needle", correct: true },
        { text: "A storm", correct: false },
        { text: "A hurricane", correct: false },
        { text: "A cyclone", correct: false }
      ]
    },
    {
      question: "What goes up but never comes down?",
      answers: [
        { text: "Your age", correct: true },
        { text: "A balloon", correct: false },
        { text: "Smoke", correct: false },
        { text: "A rocket", correct: false }
      ]
    },
    {
      question: "What gets bigger the more you take away?",
      answers: [
        { text: "A hole", correct: true },
        { text: "A debt", correct: false },
        { text: "A shadow", correct: false },
        { text: "A mountain", correct: false }
      ]
    }
  ];

  function getRandomQuestions(count) {
    const questionsCopy = [...allQuestions];
    for (let i = questionsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
    }
    return questionsCopy.slice(0, count);
  }

  // --- Leaderboard system ---
  let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
  const leaderboardList = document.getElementById('leaderboard-list');
  function updateLeaderboard(name, score) {
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    renderLeaderboard();
  }
  function renderLeaderboard() {
    leaderboardList.innerHTML = leaderboard.map((entry, index) => `
      <li>
        <span>${index + 1}. ${entry.name}</span>
        <span>${entry.score}</span>
      </li>
    `).join('');
  }

  // --- Timer system ---
  let timer;
  const timerDisplay = document.createElement('div');
  timerDisplay.className = 'timer';
  document.querySelector('.quiz-area').prepend(timerDisplay);

  function startTimer(duration) {
    let timeLeft = duration;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;
    timerDisplay.classList.remove('warning');
    timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `Time left: ${timeLeft}s`;
      if (timeLeft <= 5) timerDisplay.classList.add('warning');
      if (timeLeft <= 0) {
        clearInterval(timer);
        handleTimeout();
      }
    }, 1000);
  }
  function handleTimeout() {
    feedback.textContent = 'Time expired!';
    feedback.classList.add('show');
    Array.from(answerButtons.children).forEach(btn => btn.disabled = true);
    setTimeout(() => {
      feedback.classList.remove('show');
      currentQuestionIndex++;
      updateProgress();
      if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
      } else {
        showScore();
      }
    }, 1200);
  }

  // --- Quiz state ---
  let questions = [];
  let currentQuestionIndex = 0;
  let score = 0;
  const progress = document.getElementById('progress');
  const questionText = document.getElementById('question-text');
  const answerButtons = document.getElementById('answer-buttons');
  const feedback = document.getElementById('feedback');
  const scoreDiv = document.getElementById('score');
  const achievementsSection = document.getElementById('achievements-section');

  function updateProgress() {
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questions = getRandomQuestions(10);
    scoreDiv.textContent = '';
    renderLeaderboard();
    updateProgress();
    showQuestion(questions[currentQuestionIndex]);
    feedback.textContent = '';
    feedback.classList.remove('show');
  }

  function showQuestion(question) {
     clearInterval(timer);
  startTimer(15);
  updateProgress();

  questionText.textContent = `Q${currentQuestionIndex + 1}: ${question.question}`;
  answerButtons.innerHTML = '';

  // Shuffle the answers array before displaying
  const shuffledAnswers = shuffleArray([...question.answers]);
  shuffledAnswers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.classList.add('answer-btn');
    button.dataset.correct = answer.correct ? "true" : "false";
    button.addEventListener('click', () => selectAnswer(button, answer.correct));
    answerButtons.appendChild(button);
    });
  }

  function selectAnswer(button, isCorrect) {
    clearInterval(timer);
    Array.from(answerButtons.children).forEach(btn => {
      btn.disabled = true;
      btn.classList.remove('correct', 'wrong');
      if (btn.dataset.correct === "true") btn.classList.add('correct');
    });
    if (isCorrect) {
      button.classList.add('correct');
      button.classList.add('pulse');
      setTimeout(() => button.classList.remove('pulse'), 700);
      score++;
      feedback.textContent = 'Correct! 🎉';
    } else {
      button.classList.add('wrong');
      feedback.textContent = 'Wrong! The correct answer is highlighted.';
    }
    feedback.classList.add('show');
    setTimeout(() => {
      feedback.classList.remove('show');
      currentQuestionIndex++;
      updateProgress();
      if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
      } else {
        showScore();
      }
    }, 1200);
  }

  function showScore() {
    clearInterval(timer);
    let userName = prompt('Quiz completed! Enter your name for the leaderboard:');
    if (!userName) userName = "Anonymous";
    updateLeaderboard(userName, score);

    questionText.textContent = 'Quiz Completed!';
    answerButtons.innerHTML = '';
    feedback.textContent = '';
    scoreDiv.innerHTML = `
      <span style="color: var(--navy); font-size:2rem;">Your Score: ${score} / ${questions.length}</span>
      <br><button class="answer-btn" onclick="location.reload()">Restart Quiz</button>
    `;
    progress.style.width = '100%';

    checkAchievements(score, questions.length);
    displayAchievements();
  }

  // --- Daily Challenge ---
  function isNewDailyChallenge() {
    const today = new Date().toISOString().slice(0, 10);
    const lastPlayed = localStorage.getItem('lastDailyQuiz');
    return today !== lastPlayed;
  }
  function startDailyChallenge() {
    questions = getRandomQuestions(10);
    localStorage.setItem('lastDailyQuiz', new Date().toISOString().slice(0, 10));
    startQuiz();
  }
  document.getElementById('daily-challenge-btn').addEventListener('click', startDailyChallenge);

  // --- Achievements & Badges ---
  function checkAchievements(score, total) {
    let achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    let newAchievements = [];
    if (!achievements.includes('first_quiz')) {
      achievements.push('first_quiz');
      newAchievements.push('First Quiz Completed!');
    }
    if (score === total && !achievements.includes('perfect_score')) {
      achievements.push('perfect_score');
      newAchievements.push('Perfect Score!');
    }
    // Add more achievement checks here as needed
    localStorage.setItem('achievements', JSON.stringify(achievements));
    if (newAchievements.length) {
      alert('Achievements unlocked:\n' + newAchievements.join('\n'));
    }
  }
  function displayAchievements() {
    let achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    if (!achievementsSection) return;
    achievementsSection.innerHTML = `
      <h3>Achievements</h3>
      <span class="badge ${achievements.includes('first_quiz') ? 'unlocked' : 'locked'}" title="First Quiz">🏅</span>
      <span class="badge-label">First Quiz</span>
      <span class="badge ${achievements.includes('perfect_score') ? 'unlocked' : 'locked'}" title="Perfect Score">🌟</span>
      <span class="badge-label">Perfect Score</span>
    `;
  }
  displayAchievements();

  // --- Start everything ---
  startQuiz();
});

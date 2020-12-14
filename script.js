const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .10)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The World Largest desert is ?',
    answers: [
      { text: 'sahara', correct: true },
      { text: 'Kalahari', correct: false }
    ]
  },
  {
    question: 'Country that has the highest in Barley Production ?',
    answers: [
      { text: 'India', correct: false },
      { text: 'China', correct: false },
      { text: 'Russia', correct: true },
      { text: 'France', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Do we need self-respect with our friends or family?',
    answers: [
      { text: 'Yes', correct: false },
      { text: 'No', correct: true }
    ]
  },
  {
    question: 'What is IOT?',
        answers: [
      { text: 'Internet Of Things', correct: true },
      { text: 'Intelligent In Tech', correct: false },
      { text: 'Internet of Tech', correct: false },
      { text: 'none of the above', correct: false }
    ]
  },
  {
    question: 'Who is the best cricleter?',
    answers: [
      { text: 'Dhoni', correct: true },
      { text: 'Bumrah', correct: false },
      { text: 'Malinga', correct: false },
      { text: 'Watson', correct: false }
    ]
  },
  {
    question: 'Who is the best Football player?',
    answers: [
      { text: 'Messi', correct: true },
      { text: 'Xavi', correct: false },
      { text: 'Iniesta', correct: false },
      { text: 'Di Maria', correct: false }
    ]
  },
  {
    question: 'Who is the best Basketball player?',
    answers: [
      { text: 'Lebron james', correct: true },
      { text: 'mark willington', correct: false },
      { text: 'peter durking', correct: false },
      { text: 'plesis mark', correct: false }
    ]
  },
  {
    question: 'Which is the best college?',
    answers: [
      { text: 'SVCE', correct: true },
      { text: 'REC', correct: false },
      { text: 'AU', correct: false },
      { text: 'SRM', correct: false }
    ]
  },
  {
    question: 'What is best in life?',
    answers: [
      { text: 'Friends', correct: false },
      { text: 'Money', correct: false },
      { text: 'love', correct: false },
      { text: 'Love and Friends', correct: true }
    ]
  }
]
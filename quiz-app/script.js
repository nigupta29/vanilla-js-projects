const quizData = [
  {
    question: 'What is the largest animal in the world?',
    choices: {
      a: 'Elephant',
      b: 'Giraffe',
      c: 'Blue Whale',
      d: 'Hippopotamus',
    },
    correctChoice: 'c',
  },
  {
    question: 'What is the fastest land animal in the world?',
    choices: {
      a: 'Lion',
      b: 'Cheetah',
      c: 'Leopard',
      d: 'Gazelle',
    },
    correctChoice: 'b',
  },
  {
    question: 'What is the smallest mammal in the world?',
    choices: {
      a: 'Kangaroo Rat',
      b: 'Pygmy Shrew',
      c: 'Bumblebee Bat',
      d: 'Pygmy Marmoset',
    },
    correctChoice: 'c',
  },
  {
    question: 'What is a group of lions called?',
    choices: {
      a: 'Herd',
      b: 'Pack',
      c: 'Pride',
      d: 'Flock',
    },
    correctChoice: 'c',
  },
  {
    question: 'What is a group of dolphins called?',
    choices: {
      a: 'Pod',
      b: 'Herd',
      c: 'Flock',
      d: 'Gang',
    },
    correctChoice: 'a',
  },
]

const quizContainer = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const choicesEl = document.getElementById('choices')
const submitBtn = document.getElementById('submit')
let currentQuestion = 0
let score = 0

function loadQuestion() {
  questionEl.textContent = quizData[currentQuestion].question
  choicesEl.innerHTML = ''
  for (choice in quizData[currentQuestion].choices) {
    const liEl = document.createElement('li')
    const inputEl = document.createElement('input')
    const spanEl = document.createElement('span')
    inputEl.type = 'radio'
    inputEl.name = 'choice'
    inputEl.value = choice
    spanEl.textContent = quizData[currentQuestion].choices[choice]
    liEl.appendChild(inputEl)
    liEl.appendChild(spanEl)
    choicesEl.appendChild(liEl)
  }
}

function getSelected() {
  const answerElements = document.getElementsByName('choice')
  let selectedAnswer
  answerElements.forEach(ansEl => {
    if (ansEl.checked) {
      selectedAnswer = ansEl.value
      return
    }
  })
  return selectedAnswer
}

loadQuestion()

submitBtn.addEventListener('click', () => {
  const selectedChoice = getSelected()
  if (selectedChoice) {
    if (selectedChoice === quizData[currentQuestion].correctChoice) {
      score++
    }
    currentQuestion++
    if (currentQuestion < quizData.length) {
      loadQuestion()
    } else {
      quizContainer.innerHTML = `<h2>Your score is ${score} out of ${quizData.length}</h2>`
      quizContainer.style.textAlign = 'center'
      quizContainer.style.padding = '2rem'
      quizContainer.style.borderRadius = '0'
    }
  } else {
    quizContainer.style.outline = '2px solid red'
    quizContainer.style.outlineOffset = '5px'
    setTimeout(() => {
      quizContainer.style.outline = '0'
    }, 1000)
  }
})

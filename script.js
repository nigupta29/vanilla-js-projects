'use script'

const projects = [
  {
    name: 'Background Color Changer',
    desc: 'Transform your screen with dynamic color-changing backgrounds. Try it now!',
    folderName: 'change-background-color',
  },
  {
    name: 'Random Quotes',
    desc: 'Discover new perspectives: Click to explore our random quote generator!',
    folderName: 'random-quotes',
  },
  {
    name: 'Countdown Timer',
    desc: "Let's check the remaining time until the following New Year.",
    folderName: 'countdown-timer',
  },
  {
    name: 'Random Quotes',
    desc: 'Discover new perspectives: Click to explore our random quote generator!',
    folderName: 'random-quotes',
  },
  {
    name: 'Countdown Timer',
    desc: "Let's check the remaining time until the following New Year.",
    folderName: 'countdown-timer',
  },
  {
    name: 'Random Quotes',
    desc: 'Discover new perspectives: Click to explore our random quote generator!',
    folderName: 'random-quotes',
  },
  {
    name: 'Countdown Timer',
    desc: "Let's check the remaining time until the following New Year.",
    folderName: 'countdown-timer',
  },
  {
    name: 'Quiz App',
    desc: 'Test your animal knowledge with this fun quiz app! 🦁🐘🐅',
    folderName: 'quiz-app',
  },
]

const showcaseList = document.querySelector('#showcase-list')

function createArticleElement({ name, desc, folderName }) {
  const articleElement = `
  <article class="col-sm-12 col-md-6 col-lg-4">
      <div class="card">
        <div class="card-header fw-bold h5">
          ${name}
        </div>
        <div class="card-body">
          <p class="card-text">${desc}</p>
          <a
            href="/${folderName}/index.html"
            role="button"
            class="btn btn-success"
          >
            Preview 🚀
          </a>
        </div>
      </div>
    </article>
  `

  return articleElement
}

function createShowcaseList(projects) {
  let grid = document.createElement('div')
  grid.classList.add('row', 'row-gap-4')

  projects.forEach((project, index) => {
    const articleElement = createArticleElement(project)
    grid.innerHTML += articleElement
  })
  showcaseList.appendChild(grid)
}

createShowcaseList(projects)

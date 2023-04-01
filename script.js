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
]

const showcaseList = document.querySelector('#showcase-list')

function createArticleElement({ name, desc, folderName }) {
  const articleElement = `
  <article>
    <div class="headings">
      <h4>${name}</h4>
      <small>${desc}</small>
    </div>
  
    <a href="${folderName}/index.html" role="button">
      Click here!
    </a>
  </article>`

  return articleElement
}

function createShowcaseList(projects) {
  let grid = document.createElement('div')
  grid.classList.add('grid')

  projects.forEach((project, index) => {
    const articleElement = createArticleElement(project)
    grid.innerHTML += articleElement

    if ((index + 1) % 3 === 0 || index === projects.length - 1) {
      console.log(index)
      showcaseList.appendChild(grid)
      grid = document.createElement('div')
      grid.classList.add('grid')
    }
  })
}

createShowcaseList(projects)

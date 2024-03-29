'use script'

import { projects } from './data.js'

const currentLocation = window.location.href.replace('index.html', '')
const githubRepo = 'https://github.com/nigupta29/vanilla-js-projects/tree/main/'

function createArticleElement({ name, desc, folderName }) {
  const articleElement = `
  <div class="card">
  <div class="card-body">
  <div class="card-body-header">${name}</div>
  <p class="card-text">${desc}</p>
  </div>
  <div class="card-btn-group">
  <a
  href="${githubRepo}${folderName}"
      class="btn btn-github"
      target="__blank__"
      >
      Code ↗
      </a>
    <a href="${currentLocation}${folderName}/index.html" class="btn btn-preview">
    Preview ↗
    </a>
    </div>
</div>
  `

  return articleElement
}

function createShowcaseList(projects) {
  const showcaseList = document.querySelector('#showcase-list')

  projects.forEach(project => {
    const articleElement = createArticleElement(project)
    showcaseList.innerHTML += articleElement
  })
}

createShowcaseList(projects)

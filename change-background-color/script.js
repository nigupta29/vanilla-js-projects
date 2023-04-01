'use strict'

const colors = {
  AliceBlue: '#F0F8FF',
  'Dark Gray': '#333333',
  Blue: '#0000FF',
  Coral: '#FF7F50',
  FireBrick: '#B22222',
  Gray: '#808080',
  Green: '#008000',
  HotPink: '#FF69B4',
  'Lemon Chiffon': '#FFFACD',
  Purple: '#800080',
  Red: '#FF0000',
  Violet: '#7F00FF',
}

const btnGrid = document.querySelector('.button-grid')
const fullBody = document.querySelector('html')
const form = document.querySelector('form')
const hexValueInput = document.querySelector('#hexValue')

const setBackgroundColor = function (hexValue) {
  fullBody.style.backgroundColor = hexValue
}
const setBackgroundColorForPresets = function (event) {
  const bgColor = event.target.dataset.color
  setBackgroundColor(bgColor)
}

for (const [color, hexValue] of Object.entries(colors)) {
  const buttonElement = document.createElement('button')
  buttonElement.innerText = color
  buttonElement.dataset.color = hexValue
  buttonElement.style.borderColor = hexValue
  buttonElement.style.borderWidth = '2px'

  buttonElement.onclick = setBackgroundColorForPresets
  btnGrid.appendChild(buttonElement)
}

form.onsubmit = event => {
  event.preventDefault()
  const hexValue = `#${event.target.hexValue.value}`

  if (hexValue.length === 7) {
    setBackgroundColor(hexValue)
    hexValueInput.ariaInvalid = 'false'
  } else {
    hexValueInput.ariaInvalid = 'true'
  }
}

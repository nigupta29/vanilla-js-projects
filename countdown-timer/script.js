'use strict'

const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')

const newYearDate = new Date('1 Jan 2024')

const formatDigit = digit => (digit > 9 ? digit : `0${digit}`)

function countdownTimer() {
  const currentDateAndTime = new Date()
  const totalSeconds = (newYearDate - currentDateAndTime) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  daysEl.innerHTML = formatDigit(days)
  hoursEl.innerHTML = formatDigit(hours)
  minutesEl.innerHTML = formatDigit(minutes)
  secondsEl.innerHTML = formatDigit(seconds)
}

// Countdown call at the time of page loading
countdownTimer()
// Countdown refresh after 1 second
setInterval(countdownTimer, 1000)

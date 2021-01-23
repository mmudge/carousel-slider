import { createElementFromHTML } from './helpers/createElementFromHTML.js'
import { appWrapper } from './components/appWrapper.js'
import { card } from './components/card.js'

const app = document.getElementById('app')
app.insertAdjacentElement('afterbegin', appWrapper())

const randomNumber = () => Math.floor(Math.random() * Math.floor(5))
const url = 'https://www.nps.gov'

const cards = [
  { title: 'Zion', name: 'Andrea K.', rating: randomNumber(), link: { name: 'Visit now', url } },
  { title: 'Arches', name: 'Mike T.', rating: randomNumber(), link: { name: 'Visit now', url } },
  {
    title: 'Bryce Canyon',
    name: 'Frank R.',
    rating: randomNumber(),
    link: { name: 'Visit now', url },
  },
  {
    title: 'Yosemite',
    name: 'Julia F.',
    rating: randomNumber(),
    link: { name: 'Visit now', url },
  },
  {
    title: 'Grand Teton',
    name: 'Sam L.',
    rating: randomNumber(),
    link: { name: 'Visit now', url },
  },
  {
    title: 'Yellowstone',
    name: 'Jake V.',
    rating: randomNumber(),
    link: { name: 'Visit now', url },
  },
  {
    title: 'Rocky Mountain',
    name: 'David D.',
    rating: randomNumber(),
    link: { name: 'Visit now', url },
  },
  { title: 'Olympic', name: 'Jimmy K.', rating: randomNumber(), link: { name: 'Visit now', url } },
  {
    title: 'Canyon Lands',
    name: 'Ricky B.',
    rating: randomNumber(),
    link: { name: 'Visit now', url },
  },
]

const flexContainer = app.querySelector('.flex-container')

function updateCardsHTML(cards) {
  const oldCards = document.querySelectorAll('.card')
  for (const card of oldCards) {
    card.remove()
  }

  cards.forEach((activeCard) => {
    flexContainer.insertAdjacentElement('beforeend', card(activeCard))
  })
}

let upperLimit = 3
let lowerLimit = 0

function updateActiveCards() {
  const activeCards = cards.slice(lowerLimit, upperLimit)
  updateCardsHTML(activeCards)
  if (upperLimit < 10) {
    lowerLimit = upperLimit
    upperLimit += 3
  } else {
    lowerLimit = 0
    upperLimit = 3
  }
}

updateActiveCards()

setInterval(() => {
  updateActiveCards()
}, 3000)

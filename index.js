import { appWrapper } from './components/appWrapper.js'
import { card } from './components/card.js'

const app = document.getElementById('app')
app.insertAdjacentElement('afterbegin', appWrapper())

const randomNumber = () => Math.floor(Math.random() * Math.floor(5))
const url = 'https://www.nps.gov'
const name = 'Learn more'

const cards = [
  { title: 'Zion', name: 'Andrea K.', rating: randomNumber(), link: { name, url } },
  { title: 'Arches', name: 'Mike T.', rating: randomNumber(), link: { name, url } },
  {
    title: 'Bryce Canyon',
    name: 'Frank R.',
    rating: randomNumber(),
    link: { name, url },
  },
  {
    title: 'Yosemite',
    name: 'Julia F.',
    rating: randomNumber(),
    link: { name, url },
  },
  {
    title: 'Grand Teton',
    name: 'Sam L.',
    rating: randomNumber(),
    link: { name, url },
  },
  {
    title: 'Yellowstone',
    name: 'Jake V.',
    rating: randomNumber(),
    link: { name, url },
  },
  {
    title: 'Rocky Mountain',
    name: 'David D.',
    rating: randomNumber(),
    link: { name, url },
  },
  { title: 'Olympic', name: 'Jimmy K.', rating: randomNumber(), link: { name, url } },
  {
    title: 'Canyon Lands',
    name: 'Ricky B.',
    rating: randomNumber(),
    link: { name, url },
  },
]

const flexContainer = app.querySelector('.flex-container')

function updateCardsHTML(cards) {
  const oldCards = document.querySelectorAll('.card')
  for (const card of oldCards) {
    card.classList.add('not-active')
    setTimeout(() => {
      card.remove()
    }, 200)
  }

  cards.forEach((activeCard) => {
    const newCard = card(activeCard)
    flexContainer.insertAdjacentElement('beforeend', newCard)
    setTimeout(() => {
      newCard.classList.add('active')
    }, 1500)
  })
}

let upperLimit = 3
let lowerLimit = 0

function updateActiveCards() {
  if (upperLimit < 9) {
    lowerLimit = upperLimit
    upperLimit += 3
  } else {
    lowerLimit = 0
    upperLimit = 3
  }

  const activeCards = cards.slice(lowerLimit, upperLimit)
  updateCardsHTML(activeCards)
}

updateActiveCards()

setInterval(() => {
  updateActiveCards()
}, 8000)

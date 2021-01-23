import { card } from '../components/card.js'

export class CardController {
  constructor() {
    this.init()
  }

  url = 'https://www.nps.gov'
  name = 'Learn more'

  cards = [
    { title: 'Zion', name: 'Andrea K.', rating: this.randomNumber(), link: { name: this.name, url: this.url } },
    { title: 'Arches', name: 'Mike T.', rating: this.randomNumber(), link: { name: this.name, url: this.url } },
    {
      title: 'Bryce Canyon',
      name: 'Frank R.',
      rating: this.randomNumber(),
      link: { name: this.name, url: this.url },
    },
    {
      title: 'Yosemite',
      name: 'Julia F.',
      rating: this.randomNumber(),
      link: { name: this.name, url: this.url },
    },
    {
      title: 'Grand Teton',
      name: 'Sam L.',
      rating: this.randomNumber(),
      link: { name: this.name, url: this.url },
    },
    {
      title: 'Yellowstone',
      name: 'Jake V.',
      rating: this.randomNumber(),
      link: { name: this.name, url: this.url },
    },
    {
      title: 'Rocky Mountain',
      name: 'David D.',
      rating: this.randomNumber(),
      link: { name: this.name, url: this.url },
    },
    { title: 'Olympic', name: 'Jimmy K.', rating: this.randomNumber(), link: { name: this.name, url: this.url } },
    {
      title: 'Canyon Lands',
      name: 'Ricky B.',
      rating: this.randomNumber(),
      link: { name: this.name, url: this.url },
    },
  ]

  upperLimit = 3
  lowerLimit = 0

  get flexContainer() {
    return document.querySelector('.flex-container')
  }

  randomNumber() {
    return Math.floor(Math.random() * Math.floor(5))
  }

  updateCardsHTML(cards) {
    const oldCards = document.querySelectorAll('.card')
    for (const card of oldCards) {
      card.classList.add('not-active')
      setTimeout(() => {
        card.remove()
      }, 200)
    }

    cards.forEach((activeCard) => {
      const newCard = card(activeCard)
      this.flexContainer.insertAdjacentElement('beforeend', newCard)
      setTimeout(() => {
        newCard.classList.add('active')
      }, 1500)
    })
  }

  updateActiveCards() {
    if (this.upperLimit < 9) {
      this.lowerLimit = this.upperLimit
      this.upperLimit += 3
    } else {
      this.lowerLimit = 0
      this.upperLimit = 3
    }

    const activeCards = this.cards.slice(this.lowerLimit, this.upperLimit)
    this.updateCardsHTML(activeCards)
  }

  init() {
    this.updateActiveCards()

    setInterval(() => {
      this.updateActiveCards()
    }, 8000)
  }
}

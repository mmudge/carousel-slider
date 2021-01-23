import { appWrapper } from './components/appWrapper.js'
import { CardController } from './models/CardController.js'
import { circle } from './components/circle.js'

const app = document.getElementById('app')
app.insertAdjacentElement('afterbegin', appWrapper())

const cardController = new CardController()

// const dotsContainer = document.querySelector('.dots-container')

// for (let i = 0; i < 3; i++) {
//   dotsContainer.insertAdjacentElement('beforeend', circle())
// }

// const dots = document.querySelectorAll('.dot')

// console.log('dots selector', dots)

// function handleDotClick(index) {
//   console.log('handle dot click', index)
//   cardController.changeActiveCards(index)
// }

// for (let i = 0; i < dots.length; i++) {
//   console.log('adding dots event listener', dots[i])
//   // dots[i].firstChild.addEventListener('click', handleDotClick(i))
//   dots[i].addEventListener('click', () => {
//     handleDotClick(i)
//   })
// }

import { appWrapper } from './components/appWrapper.js'
import { CardController } from './models/CardController.js'

const app = document.getElementById('app')
app.insertAdjacentElement('afterbegin', appWrapper())

new CardController()

// const circle = createElementFromHTML(`
//   <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <circle cx="50" cy="50" r="50"/>
//   </svg>
// `)

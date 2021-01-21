import { createElementFromHTML } from './helpers/createElementFromHTML.js'

const app = document.getElementById('app')

const wrapper = createElementFromHTML('<div class="wrapper"></div>')
app.insertAdjacentElement('afterbegin', wrapper)

const container = createElementFromHTML('<div class="container"></div>')
wrapper.insertAdjacentElement('afterbegin', container)

const flexContainer = createElementFromHTML('<div class="flex-container"></div>')
container.insertAdjacentElement('afterbegin', flexContainer)

for (let i = 0; i < 10; i++) {
  const card = createElementFromHTML('<div class="card"></div>')
  flexContainer.insertAdjacentElement('beforeend', card)
}

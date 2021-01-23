import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export function appWrapper() {
  return createElementFromHTML(`
    <div class="wrapper">
      <div class="container">
        <h1>National Park ratings</h1>
        <div class="cards-container"></div>
        <div class="dots-container"></div>
      </div>
    </div>
  `)
}

import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export function card(cardInfo) {
  return createElementFromHTML(`
    <div class="card">
      <h2>${cardInfo.title}</h2>
      <h4>${cardInfo.name}</h4>
      <h6>${cardInfo.rating}</h6>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  `)
}

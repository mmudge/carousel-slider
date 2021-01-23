import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

export function circle() {
  return createElementFromHTML(`
    <div class="dot">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="#efefef" fill="#efefef">
        <circle cx="50" cy="50" r="50"/>
      </svg>
    </div>
  `)
}

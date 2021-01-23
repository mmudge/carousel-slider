import { createElementFromHTML } from '../helpers/createElementFromHTML.js'

function createStarsHTMLString(rating) {
  let starHTML = ''
  for (let i = 0; i < rating; i++) {
    starHTML += '<div class="star-filled"></div>'
  }

  const unfilledStars = 5 - rating

  for (let i = 0; i < unfilledStars; i++) {
    starHTML += '<div class="star"></div>'
  }

  return starHTML
}

export function card(cardInfo) {
  console.log('card info rating', cardInfo.rating)
  const starsHTML = createStarsHTMLString(cardInfo.rating)
  console.log('star html', starsHTML)

  return createElementFromHTML(`
    <div class="card">
      <h2>${cardInfo.title}</h2>
      <div class="stars">${starsHTML}</div>
      <h4>${cardInfo.name}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  `)
}

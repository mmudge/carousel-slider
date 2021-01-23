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
  const starsHTML = createStarsHTMLString(cardInfo.rating)

  return createElementFromHTML(`
    <a class="card" href="${cardInfo.link.url}" target="_blank">
      <h2>${cardInfo.title}</h2>
      <div class="stars">${starsHTML}</div>
      <h4>${cardInfo.name}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
    </a>
  `)
}

// hamburger icon click & nav link fades
const hamburgerContainer = document.querySelector('#main-nav')
const hamburger = document.querySelector('.hamburger')
const links = document.querySelectorAll('.links li')

hamburger.addEventListener('click', () => {
   hamburgerContainer.classList.toggle('clicked')
   links.forEach(link => {
      link.classList.toggle('fade')
   })
})

// work card layover
const workCards = document.querySelectorAll('.work-card')

workCards.forEach(card => {
   card.addEventListener('mouseover', (e) => {
      console.log(e.currentTarget.querySelector('img').offsetWidth, e.currentTarget.querySelector('img').offsetHeight)
      e.currentTarget.querySelector('.card-title').classList.add('title-hovered')
      e.currentTarget.classList.add('card-hovered')
   })
   card.addEventListener('mouseout', (e) => {
      console.log(e.currentTarget)
      e.currentTarget.querySelector('.card-title').classList.remove('title-hovered')
      e.currentTarget.classList.remove('card-hovered')
   })
})


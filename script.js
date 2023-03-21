const menuBtn = document.querySelector(".mobile")
const navMenu = document.querySelector(".nav-menu")

const mobileMenu = () => {
  menuBtn.classList.toggle("active")
  navMenu.classList.toggle("active")
}

const closeMenu = () => {
  navMenu.classList.toggle("active")
}

// fa-star
const starHover = document.querySelectorAll(".fa-star")
starHover.forEach((button) => {
  button.addEventListener("click", (event) => {
    starHover.forEach((button) => {
      button.classList.remove("fa-star-active")
    })
    const { target } = event
    target.classList.toggle("fa-star-active")
  })
})

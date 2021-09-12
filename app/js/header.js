// all js related to the header portion of the page
const body = document.querySelector("body")
const btnHamburger = document.querySelector("#btnHamburger")
const header = document.querySelector(".header")
// overlay appears when the mobile menu is active
const overlay = document.querySelector(".overlay")
// all elements with ".has-fade" will fade in and out when the mobile menu is toggled on and off
const fadeElems = document.querySelectorAll(".has-fade")

// hamburger button event listener
btnHamburger.addEventListener("click", () => {
	console.log("open hamburger")
	if (header.classList.contains("open")) {
		// close hamburger menu
		body.classList.remove("noscroll")
		header.classList.remove("open")
		fadeElems.forEach((element) => {
			element.classList.remove("fade-in")
			element.classList.add("fade-out")
		})
	} else {
		// open hamburger menu
		body.classList.add("noscroll")
		header.classList.add("open")
		fadeElems.forEach((element) => {
			element.classList.remove("fade-out")
			element.classList.add("fade-in")
		})
	}
})

// fixed a bug where if the mobile menu was open and a user resized the window to larger than the
// mobile menu, then the mobile menu would not dissapear
// now the mobile menu will dissapear if the screen is resized passed mobile view.
let width = window.innerWidth
window.onresize = function () {
	width = this.innerWidth
	if (width > 1023) {
        // close hamburger menu
		body.classList.remove("noscroll")
		header.classList.remove("open")
		fadeElems.forEach((element) => {
			element.classList.remove("fade-in")
		})
    }
}

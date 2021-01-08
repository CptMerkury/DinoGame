const dino = document.querySelector("#dino")
const cactus = document.querySelector("#cactus")

document.addEventListener("keypress", event => {
    if (event.keyCode === 32) {
        jump()
    }
})
document.addEventListener("click", event => {
    jump()
})

const jump = () => {
    if (!dino.classList.length) {
        dino.classList.add("jump")
    }
    setTimeout(() => {
        dino.classList.remove("jump")
    }, 700)
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 70 && cactusLeft > 20 && dinoTop >= 130) {
        location.reload()
        alert("Game Over")
    }
}, 10)


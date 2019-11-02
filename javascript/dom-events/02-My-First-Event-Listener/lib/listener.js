// TODO: React to a click on the button!
const button = document.querySelector("#clickme")
const music = document.querySelector("audio")
button.classList.add ("disabled")
button.addEventListener("click", (event) => {
  button.classList.add("disabled")
  button.innerText = "Bingo"
  music.play()
})



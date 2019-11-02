// TODO: write your code here
// // logic: select wagon, create a eventListener, disappear, reappears in the next box
//  move fowrad upon clickUp,
// until move to the end.

const wagonred = document.querySelector("#player1_race");
let counter1 = 0

document.addEventListener("keyup", (event) => {
  if (event.key == "r") {
  counter1 += 1;
  wagonred.getElementsByTagName("td")[counter1].classList = "active"
  wagonred.getElementsByTagName("td")[counter1 - 1].classList.remove("active")
  }

  if (counter1 == 30) {
    alert("Red WINS!!")
  }


})

const wagonblue = document.querySelector("#player2_race");
let counter2 = 0

document.addEventListener("keyup", (event) => {
  if (event.which == 66) {
  counter2 += 1;
  wagonblue.getElementsByTagName("td")[counter2].classList = "active"
  wagonblue.getElementsByTagName("td")[counter2 - 1].classList.remove("active")
  }

  if (counter2 == 30) {
    alert("Blue WINS!!")
  }
})

const button = document.querySelector("button")
button.addEventListener("click", (event) => {
  window.location.reload(false);
})
// click the button, page refreshes














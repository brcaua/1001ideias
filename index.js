//Função de pop-up para o botão primário
function onOff() {
  document
    .querySelector("#modal")
    .classList
    .toggle("hide")
  document
    .querySelector("body")
    .classList
    .toggle("hideScroll")
  document
    .querySelector("#modal")
    .classList
    .toggle("addScroll")
}
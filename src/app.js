const palo = ["♥︎", "♦︎", "♣︎", "♠︎"];

const numero = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  const CartAleatoria = paloYNumero =>
    paloYNumero[Math.floor(Math.random() * paloYNumero.length)];
  const figura = CartAleatoria(palo);
  document.querySelector(".number").innerHTML = CartAleatoria(numero);
  document.querySelector(".top-suit").innerHTML = figura;
  document.querySelector(".bottom-suit").innerHTML = figura;
  if (figura == "♣︎" || figura == "♠︎") {
    document.getElementById("top-suit").style.color = "black";
    document.getElementById("bottom-suit").style.color = "black";
  }
};

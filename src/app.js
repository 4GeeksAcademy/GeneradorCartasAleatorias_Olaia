const suits = ["♠", "♥", "♦", "♣"];
const values = [
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

function generateCard() {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];

  const cardColor = suit === "♥" || suit === "♦" ? "red" : "black";

  document.getElementById("topSuit").textContent = suit;
  document.getElementById("number").textContent = value;
  document.getElementById("bottomSuit").textContent = suit;

  document.getElementById("topSuit").style.color = cardColor;
  document.getElementById("number").style.color = cardColor;
  document.getElementById("bottomSuit").style.color = cardColor;
}

// function toggleAccordion(button) {
//   const content = button.nextElementSibling;
//   const symbol = button.querySelector(".symbol");

//   if (content.style.display === "block") {
//     content.style.display = "none";
//     symbol.textContent = "+";
//   } else {
//     content.style.display = "block";
//     symbol.textContent = "−";
//   }
// }



function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const item = button.parentElement;
  const symbol = button.querySelector(".symbol");

  const isOpen = content.style.display === "block";
  content.style.display = isOpen ? "none" : "block";
  symbol.textContent = isOpen ? "+" : "-";

  item.classList.toggle("active", !isOpen);
}

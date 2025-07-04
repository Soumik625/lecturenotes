function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const symbol = button.querySelector(".symbol");

  if (content.style.display === "block") {
    content.style.display = "none";
    symbol.textContent = "+";
  } else {
    content.style.display = "block";
    symbol.textContent = "−";
  }
}

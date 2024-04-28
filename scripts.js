const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Close menu when a list item is pressed
const listItems = document.querySelectorAll(".menu li");
listItems.forEach(item => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
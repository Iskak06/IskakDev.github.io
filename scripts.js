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




// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) =>{
//         console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         }
//         else{
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden, .hidden2');
// hiddenElements.forEach((element) => observer.observe(element));
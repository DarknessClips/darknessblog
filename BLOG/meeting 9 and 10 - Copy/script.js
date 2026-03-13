// // const item = document.getElementsByClassName("apps").length
// // console.log(item)
// // let i;
// // for (i=0; i< item; i++) {
// //     var result = document.getElementsByClassName("apps")[i].innerHTML
// //     console.log(result)

// const paragraph = document.createElement("P");
// paragraph.innerHTML = "New Paragraph"
// document.body.appendChild(paragraph)

// document.querySelector(".title")
// document.querySelector("#title")
// document.querySelector("p.title")

// function dayMode() {
//     document.querySelector("body").style.color = "black";
//     document.querySelector("body").style.
//     backgroundColor = "white"
// }

// function nightMode() {
//     document.querySelector("body").style.color = "white";
//     document.querySelector("body").style.
//     backgroundColor = "black"

// }

function rotateGif(element) {
  element.style.transform = "translate(5px, 5px)";
  element.style.transform = "rotate(180deg)";
}

function scrolling() {
  document.getElementById("div").style.color = "blue";
}

const btn = document.querySelector(".button");

btn.onClick = () => {
  alert("Hello World");
};

var btn2 = document.querySelector(".button2");

// btn2.addEventListener("click", function () {
//   alert("Hello World!");
// });

btn2.addEventListener("click", function () {
  console.log("Hello Programmer!");
});

function changeText() {
  const replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll to See";

  document.getElementById("icon-up").style;
  display = "none";

  document.getElementById("icon-down").style.display = "block";
}
var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");
if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");
  });
  const next = document.querySelector(".next");
  next.setAttribute("value", "https:/darks&blog.netlify.app/contact.html");
}

// slides
var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;
//Manual images slider
var manualNav = function (manual) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
  buttons.forEach(function (btn, i) {
    btn.addEventListener("click", function () {
      manualNav(i);
      currentSlide = i;
    });
  });
};

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;
  var repeater = function () {
    setTimeout(function () {
      [...active].forEach(function (activeSlide) {
        activeSlide.classList.remove("active");
      });
      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;
      if (slides.length == 1) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 1000);
  };
  repeater();
};
repeat();

if (slides.length == i) {
  i = 0;
}

var codingProjects = document.querySelectorAll(".project");
codingProjects.forEach((project) => {
  project.dataset.aos = "fade-down";
  project.database.aosDuration = 1500;
});

var codingProjects = document.querySelectorAll(".project");

codingProjects.forEach(project, (index) => {
  project.dataset.aos = "fade-down";
  project.dataset.aosDuration = 1500;
  project.dataset.aosDelay = index * 300;
  [0, 1, 2, 3, 4, 5];
});

// This runs as soon as the user enters the website
let userPassword = prompt("Please enter the password:");

// Check if they entered the specific password you want
if (userPassword === "20250435301") {
    alert("Access granted!");
} else if (userPassword === null) {
    // This triggers if they hit 'Cancel'
    alert("You cancelled the prompt.");
} else {
    alert("Incorrect password.");
}


AOS.init({
  once: true,
});

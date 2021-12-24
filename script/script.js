const burgerContainer_div = document.querySelector(".hamburger");
const navContainer_div = document.querySelector(".navlink-container");
const padding_div = document.getElementById("padding-div");
const next_button = document.getElementById("right-arrow-btn");
const previous_button = document.getElementById("left-arrow-btn");
const backgroundProjectContainer_div = document.getElementById(
  "container-background"
);
const projectImageContainer_div = document.getElementById("project-image");
const projectCount = document.getElementById("project-rank");
const projectTitle = document.getElementById("project-name");
const hiddenParagraph_p = document.querySelector(".hidden-paragraph");
const readMoreBtn_a = document.querySelector(".read-more");
const showLess = document.querySelector(".show-less");

let count = 0;
const header = document.querySelector(".header");
const imgArr = [
  {
    imgSrc: "../imgs/box.png",
    backgroundSrc: "../imgs/backgrounds/box-background.png",
    title: "Random Box Generator",
    info: "",
  },
  {
    imgSrc: "../imgs/Glitch.png",
    backgroundSrc: "../imgs/backgrounds/Glitch-background.png",
    title: "Css Glitch Effect",
    info: "",
  },
  {
    imgSrc: "../imgs/humble-heart.png",
    backgroundSrc: "../imgs/backgrounds/humble-heart-background.png",
    title: "Landing Page For a Yoga Website",
    info: "",
  },
  {
    imgSrc: "../imgs/jokes.png",
    backgroundSrc: "../imgs/backgrounds/jokes-background.png",
    title: "API Generates Jokes with One Click",
    info: "",
  },
  {
    imgSrc: "../imgs/login.png",
    backgroundSrc: "../imgs/backgrounds/login-background.png",
    title: "Login UI with html and css",
    info: "",
  },
];


next_button.addEventListener("click", (e) => {
  e.preventDefault();

  if (count >= 4 || count < 0) {
    count = 0;
  } else {
    count++;
  }

  let projectBackgroundSource = `${imgArr[count].backgroundSrc}`;
  let projectImageSource = imgArr[count].imgSrc;
  backgroundProjectContainer_div.style.background = `url(${projectBackgroundSource})`;
  backgroundProjectContainer_div.style.backgroundSize = "cover";
  backgroundProjectContainer_div.style.backgroundPosition = "left";

  projectImageContainer_div.style.background = `url(${projectImageSource})`;
  projectImageContainer_div.style.backgroundSize = "cover";
  projectImageContainer_div.style.backgroundPosition = "center";

  projectTitle.innerHTML = imgArr[count].title;
  projectCount.textContent = count + 1;
});

previous_button.addEventListener("click", (e) => {

    if(count <= 0){
        count = 4;
    } else {
        count--;
    }
    console.log(count);

    let projectBackgroundSource = `${imgArr[count].backgroundSrc}`;
    let projectImageSource = imgArr[count].imgSrc;
    backgroundProjectContainer_div.style.background = `url(${projectBackgroundSource})`;
    backgroundProjectContainer_div.style.backgroundSize = "cover";
    backgroundProjectContainer_div.style.backgroundPosition = "left";
  
    projectImageContainer_div.style.background = `url(${projectImageSource})`;
    projectImageContainer_div.style.backgroundSize = "cover";
    projectImageContainer_div.style.backgroundPosition = "center";
  
    projectTitle.innerHTML = imgArr[count].title;
    projectCount.textContent = count + 1;
})

burgerContainer_div.addEventListener("click", () => {
  burgerContainer_div.classList.toggle("cross");
  navContainer_div.classList.toggle("show-nav");
  padding_div.classList.toggle("hide");
});

readMoreBtn_a.addEventListener("click", () => {
    readMoreBtn_a.style.display = "none";
    hiddenParagraph_p.style.display = "block";
    hiddenParagraph_p.style.height = "100%";
    hiddenParagraph_p.style.width = "100%";
    hiddenParagraph_p.style.marginTop = "0.5em";
})

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

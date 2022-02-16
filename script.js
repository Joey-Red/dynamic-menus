//Dropdown menu
let hiddenItems = document.querySelectorAll(".hidden-item");
let dropDownButton = document.querySelector(".dropDownItems");
for (let i = 0; i < hiddenItems.length; i+= 1){
  hiddenItems[i].classList.toggle("hidden");
}

dropDownButton.addEventListener('click', () => {
    for (let i = 0; i < hiddenItems.length; i+= 1){
      hiddenItems[i].classList.toggle("hidden");
  };
});

// MOBILE MENU
let stemItems = document.querySelectorAll(".stem-button");
let mainButton = document.querySelector("#main");
for (let i = 0; i < stemItems.length; i+= 1){
  stemItems[i].classList.add('hidden');
};

(mainButton.addEventListener('click', () => {
  showHide()
}));
let showHide = () => {
    for (let i = 0; i < stemItems.length; i+= 1){
      stemItems[i].classList.toggle('hidden');
    };
}

//Picture Carousel
let pictureFrame = document.querySelector(".pictureHolder");
let left = document.createElement("button");
left.textContent="<<";
left.classList.add("left");
let right = document.createElement("button");
right.textContent=">>";
right.classList.add("right");
pictureFrame.append(left, right)




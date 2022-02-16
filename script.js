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
let pictureFrame = document.querySelector(".pictureFrame");
let left = document.createElement("button");
left.textContent="<<";
left.classList.add("left");
let right = document.createElement("button");
right.textContent=">>";
right.classList.add("right");
pictureFrame.append(left, right)


let pictureArray = ["picture1", "picture2", "picture3", "picture4", "picture5"];

pictureFrame.classList.add(pictureArray[0]);
let currentPic = 0;
console.log(currentPic)

right.addEventListener('click', () => {
  pictureFrame.classList.remove(pictureArray[currentPic]);
  if (currentPic === 4){
    currentPic = 1;
  } else {
  currentPic += 1;
  };
  pictureFrame.classList.remove(pictureArray);
  pictureFrame.classList.add(pictureArray[currentPic]);
});
left.addEventListener('click', () => {
  pictureFrame.classList.remove(pictureArray[currentPic]);
  if (currentPic === 0){
    currentPic = 4;
  } else {
  currentPic -= 1;
  }
  pictureFrame.classList.remove(pictureArray[currentPic]);
  pictureFrame.classList.add(pictureArray[currentPic]);
});


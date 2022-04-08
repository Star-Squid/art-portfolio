
let collapsibles = document.getElementsByClassName("collapsible");

// collapse menu items
for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}

// pullout animation
for (let i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 25 + "px";
    }
  });
}

let currentSection;

//make visible selected modal section, capture which section it is
function openModal(section){
  let modalName = "modal-" + section;
  document.getElementById(modalName).style.display = "block";
  currentSection = section;
}

// Close all Modals
function closeModal() {
  let modalName = "modal-" + currentSection;
  document.getElementById(modalName).style.display = "none";
}



////// CREATURES

//show slides starting from x
let slideIndexCreat = 1;
showCreatSlides(slideIndexCreat);

//increase/decrease which slide is shown
function changeCreatSlides(n) {
  showCreatSlides(slideIndexCreat += n);
}

//part of clicky behaviour, it opens the modal and sets it to --current--  //onclick="openModal('plant');currentPlantSlide(1)"
function currentCreatSlide(n) {
  showCreatSlides(slideIndexCreat = n);
}

function showCreatSlides(n) {
  let i;
  let slideName = "slide-" + currentSection;
  let slides = document.getElementsByClassName(slideName);
  if (n > slides.length) {slideIndexCreat = 1}
  if (n < 1) {slideIndexCreat = slides.length}
  for (i = 0; i < slidesCreat.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexCreat-1].style.display = "block";
}

// function showCreatSlides(n) {
//   let i;
//   let slidesCreat = document.getElementsByClassName("slide-creat");
//   if (n > slidesCreat.length) {slideIndexCreat = 1}
//   if (n < 1) {slideIndexCreat = slidesCreat.length}
//   for (i = 0; i < slidesCreat.length; i++) {
//     slidesCreat[i].style.display = "none";
//   }
//   slidesCreat[slideIndexCreat-1].style.display = "block";
// }

//this is used in current- and changeCreatslides
function showSlides(section, number) {
  let i;
  let slides = 'document.getElementsByClassName("slide-' + section + '")';
  console.log(slides);
  // let slidesCreat = document.getElementsByClassName("slide-creat");
  if (number > slides.length) {slideIndexCreat = 1}
  if (number < 1) {slideIndexCreat = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexCreat-1].style.display = "block";
}

////// FACES


let slideIndexFace = 1;
showFaceSlides(slideIndexFace);
 
// Next/previous controls
function changeFaceSlides(n) {
  showFaceSlides(slideIndexFace += n);
}

// Thumbnail image controls
function currentFaceSlide(n) {
  showFaceSlides(slideIndexFace = n);
}

function showFaceSlides(n) {
  let i;
  let slidesFace = document.getElementsByClassName("slide-face");
  if (n > slidesFace.length) {slideIndexFace = 1}
  if (n < 1) {slideIndexFace = slidesFace.length}
  for (i = 0; i < slidesFace.length; i++) {
    slidesFace[i].style.display = "none";
  }
  slidesFace[slideIndexFace-1].style.display = "block";
}


////// PLACES


let slideIndexPlace = 1;
showPlaceSlides(slideIndexPlace);

// Next/previous controls
function changePlaceSlides(n) {
  showPlaceSlides(slideIndexPlace += n);
}

// Thumbnail image controls
function currentPlaceSlide(n) {
  showPlaceSlides(slideIndexPlace = n);
}

function showPlaceSlides(n) {
  let i;
  let slidesPlace = document.getElementsByClassName("slide-place");
  if (n > slidesPlace.length) {slideIndexPlace = 1}
  if (n < 1) {slideIndexPlace = slidesPlace.length}
  for (i = 0; i < slidesPlace.length; i++) {
    slidesPlace[i].style.display = "none";
  }
  slidesPlace[slideIndexPlace-1].style.display = "block";
}


/////PLANTS


let slideIndexPlant = 1;
showPlantSlides(slideIndexPlant);

// Next/previous controls
function changePlantSlides(n) {
  showPlantSlides(slideIndexPlant += n);
}

// Thumbnail image controls
function currentPlantSlide(n) {
  showPlantSlides(slideIndexPlant = n);
}

function showPlantSlides(n) {
  let i;
  let slidesPlant = document.getElementsByClassName("slide-plant");
  if (n > slidesPlant.length) {slideIndexPlant = 1}
  if (n < 1) {slideIndexPlant = slidesPlant.length}
  for (i = 0; i < slidesPlant.length; i++) {
    slidesPlant[i].style.display = "none";
  }
  slidesPlant[slideIndexPlant-1].style.display = "block";
}


////// EVERY CATEGORY - arrow key and escape actions
document.addEventListener('keydown', function(event) {
  const key = event.key;
  switch (key) {
    case "ArrowLeft":
      changeCreatSlides(-1)
      changeFaceSlides(-1)
      changePlantSlides(-1)
      changePlaceSlides(-1)
        break;
    case "ArrowRight":
      changeCreatSlides(1)
      changeFaceSlides(1)
      changePlantSlides(1)
      changePlaceSlides(1)
        break;
      case "Escape":
        // closeModal('creat')
        // closeModal('face')
        // closeModal('place')
        // closeModal('plant')
        closeModal(currentSection)
        break;
    }
});
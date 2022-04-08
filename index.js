////// COLLAPSE MENU ITEMS

//select all collapsible elements
var collapsibles = document.getElementsByClassName("collapsible");

//when a section title gets clicked, make visible the sibling of the title, i.e. content
for (var i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}

// pullout animation
for (var i = 0; i < collapsibles.length; i++) {
  collapsibles[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 25 + "px";
    }
  });
}

//show modal gallery of the selected section, capture which section got clicked
//relies on thumbnail with onclick="openModal(face);currentFaceSlide(1)
var currentSection;

function openModal(section){
  var modalName = "modal-" + section;
  document.getElementById(modalName).style.display = "block";
  currentSection = section;
  console.log(currentSection);

}

// Close all Modals
function closeModal() {
  var modalName = "modal-" + currentSection;
  document.getElementById(modalName).style.display = "none";
}


////// CREATURES

//slightly different than other sections:
//trying to work towards a single set of functions for all sections instead of separate

function showCreatSlides(n) {
  var slideName = "slide-" + currentSection;
  var slides = document.getElementsByClassName(slideName);
  if (n > slides.length) {slideIndexCreat = 1};
  if (n < 1) {slideIndexCreat = slides.length};
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexCreat - 1].style.display = "block";
}

//show slides starting from x
var slideIndexCreat = 1;
showCreatSlides(slideIndexCreat);

//increase/decrease which slide is shown
function changeCreatSlides(n) {
  showCreatSlides(slideIndexCreat += n);
}

//set modal to selected image
function currentCreatSlide(n) {
  showCreatSlides(slideIndexCreat = n);
}


//TRYING TO WRITE A SINGLE FUNCTION to replace show"X"Slides() in each section
//to be used in current"X"Slide and change"X"Slides

// function showSlides(section, number) {
//   var i;
//   var slides = 'document.getElementsByClassName("slide-' + section + '")';
//   console.log(slides);
//   // var slidesCreat = document.getElementsByClassName("slide-creat");
//   if (number > slides.length) {slideIndexCreat = 1}
//   if (number < 1) {slideIndexCreat = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndexCreat-1].style.display = "block";
// }


////// FACES

var slideIndexFace = 1;
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
  var i;
  var slidesFace = document.getElementsByClassName("slide-face");
  if (n > slidesFace.length) {slideIndexFace = 1}
  if (n < 1) {slideIndexFace = slidesFace.length}
  for (i = 0; i < slidesFace.length; i++) {
    slidesFace[i].style.display = "none";
  }
  slidesFace[slideIndexFace - 1].style.display = "block";
}


////// PLACES

var slideIndexPlace = 1;
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
  var i;
  var slidesPlace = document.getElementsByClassName("slide-place");
  if (n > slidesPlace.length) {slideIndexPlace = 1}
  if (n < 1) {slideIndexPlace = slidesPlace.length}
  for (i = 0; i < slidesPlace.length; i++) {
    slidesPlace[i].style.display = "none";
  }
  slidesPlace[slideIndexPlace-1].style.display = "block";
}


/////PLANTS

var slideIndexPlant = 1;
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
  var i;
  var slidesPlant = document.getElementsByClassName("slide-plant");
  if (n > slidesPlant.length) {slideIndexPlant = 1}
  if (n < 1) {slideIndexPlant = slidesPlant.length}
  for (i = 0; i < slidesPlant.length; i++) {
    slidesPlant[i].style.display = "none";
  }
  slidesPlant[slideIndexPlant-1].style.display = "block";
}


////// EVERY SECTION - arrow key and escape actions
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

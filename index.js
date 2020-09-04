let buttonContact = document.getElementById('contactBtn');
let modalContact = document.getElementById('contactModal');

let buttonAbout = document.getElementById('aboutBtn');
let modalAbout = document.getElementById('aboutModal');

let buttonMap = document.getElementById('mapBtn');
let modalMap = document.getElementById('mapModal');

let buttonsClose = document.getElementsByClassName('close');
for (let i = 0; i < buttonsClose.length; i++) {
    buttonsClose[i].addEventListener('click', function() {
        let modals = document.getElementsByClassName('modal');
        for (let j=0; j < modals.length; j++) {
            hide(modals[j])
        }
    })
}


function display(element) {
    element.classList.remove("modal-hidden");
}

function hide(element) {
    element.classList.add("modal-hidden");
}

buttonContact.addEventListener('click', function() {
    display(modalContact);
});

buttonAbout.addEventListener('click', function() {
    display(modalAbout);
});

buttonMap.addEventListener('click', function() {
    display(modalMap);
});


let galleryElements = document.querySelectorAll(".gallery-list li img");

//console.log(galleryElements);


let dropdownLinks = document.querySelectorAll(".dropdown-content a");

//console.log(dropdownLinks);


for (let i = 0; i <dropdownLinks.length; i++) {
    //click
    dropdownLinks[i].addEventListener('click', function(){
        let category = dropdownLinks[i].id;
        //console.log(category);
        
        for (let j = 0; j < galleryElements.length; j++) {
            if (category === 'return-all') {
                display(galleryElements[j].parentElement);
            }
            else {
                if (galleryElements[j].classList.contains(category)) {
                    display(galleryElements[j].parentElement);
                }
                else {
                    hide(galleryElements[j].parentElement);
                }
            } 
        }
    })
}


var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
   
    let slides = document.getElementsByClassName("sliderImg");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} ;
    if (n < 1) {slideIndex = slides.length};
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    };
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}

/*
var slideIndex = 0;
showSlides();

function showSlides() {
  
  var slides = document.getElementsByClassName("sliderImg");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
*/
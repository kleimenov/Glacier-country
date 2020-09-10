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
                display(galleryElements[j].parentElement.parentElement);
            }
            else {
                if (galleryElements[j].classList.contains(category)) {
                    display(galleryElements[j].parentElement.parentElement);
                }
                else {
                    hide(galleryElements[j].parentElement.parentElement);
                }
            } 
        }
    })
}

/*
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
*/

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
  setTimeout(showSlides, 4000); // Change image every 3 seconds
}



   

/*-------*/

const notificationElement = document.querySelector('.notification');
const iconElement = document.querySelector('.weather-icon');
const tempElement =document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');

//to display the weather
function displayWeather() {
    iconElement.innerHTML = `<img src="assets/${weather.iconId}.png"/>`;

    tempElement.innerHTML = `${weather.temperature.value}° <span>C</span>`;

    descElement.innerHTML = weather.description; 


    locationElement.innerHTML = `${weather.city}, ${weather.country}`;

}

function celsiusToFahrenheit(temperature) {
    return (temperature * 9/5) + 32;
}

function fahrenheitToCelsius(temperature) {
    return 9/5 * (temperature - 32);
}

tempElement.addEventListener('click', function() {

    if(weather.temperature.value==="undefined") {return};

    if(weather.temperature.unit === 'celsius') {
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}° <span>F</span>`;

        weather.temperature.unit ="fahrenheit";
    }
    else {
        /*
        let celsius = fahrenheitToCelsius(weather.temperature.value);
        celsius = Math.floor(celsius);
        */
       tempElement.innerHTML = `${weather.temperature.value}° <span>C</span>`;
        
       weather.temperature.unit ="celsius";
    }
}

)


getWeather()
const weather ={};
weather.temperature = {
    unit: "celsius"
}

// app consts and var
const KELVIN = 273;

//API key

const key = '072e3ec2199386d51ce3c8b4fd8b194d';

//src
const linkApi = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY';

function getWeather() {
    console.log("first");
    // let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${key}`;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=Reykjavik&appid=072e3ec2199386d51ce3c8b4fd8b194d`;

    fetch(api).then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data){
        console.log("second");
        weather.temperature.value=Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        console.log("third");
        displayWeather();
    });
}



//show big image if user clicked on imgage
let imageModal = document.getElementById('popUpImageModal');
let img = imageModal.querySelector(".imgPopUp");
//let imgCont = imgBig.querySelector('.modal-content');

for (let i=0; i < galleryElements.length; i++) {
    galleryElements[i].addEventListener('click', function(){
        let img_src = galleryElements[i].src;
        //console.log(img_src);
        //imgCont.innerHTML = `<span class="close">&times;</span><img class="imgPopUp" src="${img_src}"/>`;
        //let img = document.createElement("img");
        //img.classList.add("imgPopUp");
        img.src = img_src;
        //imgCont.appendChild(img)
        //console.log(imgBig);
        display(imageModal);
    })
}


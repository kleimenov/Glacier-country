# "Glacier-country" project. 
(non-commercial project)

* Author: [Ivan Kleimenov](https://github.com/kleimenov).

---
### Description
This is Glacier country (imagined country) website. `Glacier-country` website consists of one web page (home page).

_ The main page is the landing page, where you can find a web page header with a logo. 
The main part of the web page contains an images slider (slides changing automatically), block with small images and weather widged, 
user can filter images by particular topics and open a full image that he chooses. 
At the bottom of the main part of the web page provided three blocks of additional information (contacts, about us, map). 
Footer block with contacts, social networking sites links.


Above was provided a brief description of the Glacier country project.
[You can explore this website detailed here (link on github pages)](https://kleimenov.github.io/Glacier-country/)

---
### Tech descripton and specification

This website includes one web pages. Page is responsive, work with a broad variety of screens in range from mobile devices (screen width 320px)
to desktops (screen width 1200px and higher). This cross-devices website affords users to feel comfortable interacting with content whether the size of the screen their device has.

This project is build with the following technologies:

- HTML;
- CSS;
- JavaScript;
- SASS;
- weather API (fetch data from weather API);

Semantic HTML is used for all webpages markup with the elements of block - element - modifier system in class naming. 
All elements are styled with CSS using the inheritance and cascading rules, and selectors specificity. 
CSS rules are contained in a separate .scss files for easier maitenance and then compiled with the Sass preprocessor into a CSS style master file 
to reduce the number of interactions with a server. Responsiveness is provided by the usage of media queries and sass variables. 

All algorithms were implemented with JavaScript. This includes DOM manipulation (DOM elements creation and modification) and API fetching.

---
### Descriptions of JavaScript features 
1) Weather API implemented on vanilla JavaScript (I use my personal KEY from api.openweathermap.org because of that in open source at Github I use place holder 'password', it means if you want to see real weather please use your personal KEY). Weather API architecture includes following functions: Function displayWeather() creates DOM elements that contains weather data. 
Function getWeather()fetches weather API from outer resource. Functions celsiusToFahrenheit() and fahrenheitToCelsius() calculate and transition data to the measurement sistem convenient for user.
2) Slider architecture includes function showSlides(), this function gets DOM elements that contains images for slider. 
Iterate over images array, and after that check condition and show particular image and change image every 3 seconds.
3) Filter algorithm includes follow steps: find loop over images array, listen for the event a user click on the button, shows the dropdown menu, after choose on specific image type and click the button, 
afther that algorithm find specific images and show just particular image.
4) There are three different modals in this project, the first _contact us form_, second _about us_ information modal, and last is the _map_ modal that use Google API to fetch geo data. 
Implemented algorithm allows to show and hide modals. Algorithm includes following steps: find modal element inside HTML markup, listen for the event a user click on the button, show the modal booking form, 
get user's data, hide modal form when user click on a particular button. Map modal include additionl steps withs allows getting Google API geo data.



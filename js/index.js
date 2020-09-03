const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV-BAR--------------------------------------------------

let services = document.getElementsByTagName('a')[0];
services.innerText = siteContent['nav']['nav-item-1'];

let product = document.getElementsByTagName('a')[1];
product.innerText = siteContent['nav']['nav-item-2'];

let vision = document.getElementsByTagName('a')[2];
vision.innerText = siteContent['nav']['nav-item-3'];

let features = document.getElementsByTagName('a')[3];
features.innerText = siteContent['nav']['nav-item-4'];

let about = document.getElementsByTagName('a')[4];
about.innerText = siteContent['nav']['nav-item-5'];

let contact = document.getElementsByTagName('a')[5];
contact.innerText = siteContent['nav']['nav-item-6'];

// ADDED NAV ELEMENTS

const downloads = document.createElement('a');
downloads.textContent = "Downloads";
const addedNav = document.querySelector('nav');
addedNav.prepend(downloads);

const github = document.createElement('a');
github.textContent = "Github";
addedNav.appendChild(github);

let navLinks = document.getElementsByTagName('a')
navLinks[0].style.color = 'green'
navLinks[1].style.color = 'green'
navLinks[2].style.color = 'green'
navLinks[3].style.color = 'green'
navLinks[4].style.color = 'green'
navLinks[5].style.color = 'green'
navLinks[6].style.color = 'green'
navLinks[7].style.color = 'green'

// CTA ------------------------------------------------------

let ctaSelector = document.querySelector('.cta h1');
ctaSelector.innerHTML = 'DOM<br>Is<br>Awesome'

let ctaButton = document.querySelector('.cta button');
ctaButton.innerHTML = 'Get Started'

let headerimg = document.getElementById("cta-img")
headerimg.setAttribute('src', siteContent["cta"]["img-src"])

// MAIN CONTENT ----------------------------------------------

let features_h4 = document.querySelector('.top-content .text-content h4');
features_h4.textContent = siteContent['main-content']['features-h4'];

let featuresText = document.querySelector('.top-content .text-content p');
featuresText.textContent = siteContent['main-content']['features-content'];

let about_h4 = document.querySelectorAll('.top-content .text-content h4')[1];
about_h4.textContent = siteContent['main-content']['about-h4'];

let aboutText = document.querySelectorAll('.top-content .text-content p')[1];
aboutText.textContent = siteContent['main-content']['features-content'];

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let services_h4 = document.querySelector('.bottom-content .text-content h4');
services_h4.textContent = siteContent['main-content']['services-h4'];

let servicesText = document.querySelector('.bottom-content .text-content p');
servicesText.textContent = siteContent['main-content']['services-content'];

let product_h4 = document.querySelectorAll('.bottom-content .text-content h4')[1];
product_h4.textContent = siteContent['main-content']['product-h4'];

let productText = document.querySelectorAll('.bottom-content .text-content p')[1];
productText.textContent = siteContent['main-content']['product-content'];

let vision_h4 = document.querySelectorAll('.bottom-content .text-content h4')[2];
vision_h4.textContent = siteContent['main-content']['vision-h4'];

let visionText = document.querySelectorAll('.bottom-content .text-content p')[2];
visionText.textContent = siteContent['main-content']['vision-content'];

// Footer/Contact----------------------------------------------------

let contact_h4 = document.getElementsByTagName('h4')[5];
contact_h4.innerText = siteContent['contact']['contact-h4'];

let address = document.getElementsByTagName('p')[5];
address.innerText = siteContent['contact']['address'];

let phone = document.getElementsByTagName('p')[6];
phone.innerText = siteContent['contact']['phone'];

let email = document.getElementsByTagName('p')[7];
email.innerText = siteContent['contact']['email'];

let footer = document.getElementsByTagName('p')[8];
footer.innerText = siteContent['footer']['copyright'];

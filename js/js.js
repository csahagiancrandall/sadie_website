//images
var imgs = document.querySelectorAll("img")

// totop button
var totop = document.querySelector("#totop")

function changeSize(element) {
    console.log("Don't slide away!")
    console.log(element.value)
    console.log(imgs.length)
    for (var index = 0; index < imgs.length; index += 1) {
        console.log(imgs[index])
        if (imgs[index].classList.contains("portrait")) {
            imgs[index].style.width = element.value+"%"
        }
        if (imgs[index].classList.contains("landscape")) {
            imgs[index].style.width = 1.6*element.value+"%"
        }
    }
}

function changeHeaderFontSize() {
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    console.log(width);
    if (width < 440) {
        console.log("Making Font Size Smaller!")
        document.querySelectorAll('nav ul li').forEach(el => el.style.fontSize = "20px");
    }
}

changeHeaderFontSize()

function test() {
    console.log("Working!");
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    totop.style.display = "block";
  } else {
    totop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
//   document.body.scrollTop = 0;
  document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
  document.documentElement.scrollIntoView({behavior: 'smooth', block: 'start'});
}

function show_all() {
    console.log("working!");
    for (var index = 0; index < imgs.length; index += 1) {
        console.log(imgs[index])
        imgs[index].style.removeProperty('display')
    }
}

function show_headshot() {
    for (var index = 0; index < imgs.length; index += 1) {
        if (imgs[index].classList.contains("headshot")) {
            console.log(imgs[index])
            imgs[index].style.removeProperty('display')
        }
        else { 
            imgs[index].style.display = "none"
        }
    }
}

function show_selfie() {
    for (var index = 0; index < imgs.length; index += 1) {
        if (imgs[index].classList.contains("selfie")) {
            console.log(imgs[index])
            imgs[index].style.removeProperty('display')
        }
        else { 
            imgs[index].style.display = "none"
        }
    }
}

function show_friends() {
    for (var index = 0; index < imgs.length; index += 1) {
        if (imgs[index].classList.contains("friends")) {
            console.log(imgs[index])
            imgs[index].style.removeProperty('display')
        }
        else { 
            imgs[index].style.display = "none"
        }
    }
}

function show_family() {
    for (var index = 0; index < imgs.length; index += 1) {
        if (imgs[index].classList.contains("family")) {
            console.log(imgs[index])
            imgs[index].style.removeProperty('display')
        }
        else { 
            imgs[index].style.display = "none"
        }
    }
}

// Change Color Theme
function changeTheme() {
    console.log("Color scheme changed!")
    var body = document.querySelector("body")
    if (body.classList.contains("theme4")) {
        body.classList.add("theme5")
        body.classList.remove("theme4")
        document.documentElement.style.setProperty('--back', '#fff');
        document.documentElement.style.setProperty('--head', '#fff');
        document.documentElement.style.setProperty('--accent', '#fff');
        document.documentElement.style.setProperty('--font', '#000');
        document.documentElement.style.setProperty('--heart-accent', '#f00');        
    }
    else if (body.classList.contains("theme5")) {
        body.classList.add("theme6")
        body.classList.remove("theme5")
        document.documentElement.style.setProperty('--back', '#000');
        document.documentElement.style.setProperty('--head', '#000');
        document.documentElement.style.setProperty('--accent', '#000');
        document.documentElement.style.setProperty('--font', '#fff');
        document.documentElement.style.setProperty('--heart-accent', '#f00');        
    }
    else if (body.classList.contains("theme6")) {
        body.classList.add("theme1")
        body.classList.remove("theme6")
        document.documentElement.style.setProperty('--back', '#6a938b');
        document.documentElement.style.setProperty('--head', '#6a938b');
        document.documentElement.style.setProperty('--accent', '#6a938b');
        document.documentElement.style.setProperty('--font', '#f6d9cb');
        document.documentElement.style.setProperty('--heart-accent', '#c8a67c');        
        }
    else if (body.classList.contains("theme1")) {
        body.classList.add("theme2")
        body.classList.remove("theme1")
        document.documentElement.style.setProperty('--back', '#faf6d7');
        document.documentElement.style.setProperty('--head', '#faf6d7');
        document.documentElement.style.setProperty('--accent', '#f6d9cb');
        document.documentElement.style.setProperty('--font', '#c8a67c');
        document.documentElement.style.setProperty('--heart-accent', '#f6d9cb');        
    }
    else if (body.classList.contains("theme2")) {
        body.classList.add("theme3")
        body.classList.remove("theme2")
        document.documentElement.style.setProperty('--back', '#8BE4DE');
        document.documentElement.style.setProperty('--head', '#8BE4DE');
        document.documentElement.style.setProperty('--accent', '#FFBF69');
        document.documentElement.style.setProperty('--font', '#FFFFFF');
        document.documentElement.style.setProperty('--heart-accent', '#FFBF69');        
    }
    else if (body.classList.contains("theme3")) {
        body.classList.add("theme4")
        body.classList.remove("theme3")
        document.documentElement.style.setProperty('--back', '#364652');
        document.documentElement.style.setProperty('--head', '#d9e5d6ff');
        document.documentElement.style.setProperty('--accent', '#0fa3b1ff');
        document.documentElement.style.setProperty('--font', '#f7a072ff');
        document.documentElement.style.setProperty('--heart-accent', '#0fa3b1ff');        
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

var oldScrollY = window.scrollY;

var songPageIndex = 1;
var sections = document.querySelectorAll("section");
console.log(sections);

window.addEventListener('wheel', function(element) {
    console.log(element.wheelDelta);
});

// Songs page

const slideGallery = document.querySelector('.slides');
const slides = slideGallery.querySelectorAll('div');
const thumbnailContainer = document.querySelector('.thumbnails');
const slideCount = slides.length;

const highlightThumbnail = () => {
    thumbnailContainer
        .querySelectorAll('div.highlighted')
        .forEach(el => el.classList.remove('highlighted'));
    console.log(slideGallery.scrollLeft);
    const slideWidth = document.querySelector('.slides iframe').clientWidth
    const index = Math.floor(slideGallery.scrollLeft / slideWidth);
    thumbnailContainer
        .querySelector(`div[data-id="${index}"]`)
        .classList.add('highlighted');
    console.log(index);
    // slides
    //     .querySelectorAll('iframe.highlighted')
    //     .forEach(el => el.classList.remove('highlighted'));
    // slides
    //     .querySelector(`iframe[data-id="${index}"]`)
    //     .classList.add('highlighted');
};

const scrollToElement = el => {
  const index = parseInt(el.dataset.id, 10);
  const slideWidth = document.querySelector('.slides iframe').clientWidth
  slideGallery.scrollTo(index * slideWidth, 0);
};

thumbnailContainer.innerHTML += [...slides]
  .map((slide, i) => `<div data-id="${i}" class=""></div>`)
  .join('');

thumbnailContainer.querySelectorAll('div').forEach(el => {
  el.addEventListener('click', () => scrollToElement(el));
});

slideGallery.addEventListener('scroll', e => highlightThumbnail());

highlightThumbnail();

// window.addEventListener('scroll', function(element) {
//     console.log(window.scrollY)
//     if (window.scrollY < oldScrollY) {
//         console.log(window.scrollY)
//         console.log('scrolling up')
//         oldScrollY = window.scrollY;

//         // if (songPageIndex < 1) {
//         //     return;
//         // }
//         // songPageIndex--;
//         // sections.forEach((section, i) => {
//         //     if (i === songPageIndex) {
//         //         console.log("scrolling section " + i + " into view");
//         //         section.scrollIntoView({behavior: 'smooth'});
//         //     }
//         // })
//     }
//     else if (window.scrollY > oldScrollY) {
//         console.log(window.scrollY)
//         console.log('scrolling down')
//         oldScrollY = window.scrollY;
//         sections[0].scrollIntoView({behavior: 'smooth'});
//         // if (index > 2) {
//         //     return;
//         // }
//         // songPageIndex++;
//         // sections.forEach((section, i) => {
//         //     if (i === songPageIndex) {
//         //         console.log("scrolling section " + i + " into view");
//         //         section.scrollIntoView({behavior: 'smooth'});
//         //     }
//         // })
//     }
// });
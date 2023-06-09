// Typing 
var i = 0;
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

if (document.getElementById('index')) {
    var txt = ' Sadie Vieira Quinn ';
    window.addEventListener('load', typeWriter())
}

if (document.getElementById('pictures')) {
    var txt = ' Pictures ';
    window.addEventListener('load', typeWriter())
}

if (document.getElementById('songs')) {
    var txt = ' Songs ';
    window.addEventListener('load', typeWriter())
}

if (document.getElementById('books')) {
    var txt = ' Books ';
    window.addEventListener('load', typeWriter())
}

// Change Color Theme
function changeTheme() {
    console.log("Color scheme changed!")
    var body = document.querySelector("body")
    if (body.classList.contains("theme4")) {
        body.classList.add("theme5")
        body.classList.remove("theme4")
        localStorage.setItem("colorTheme", "theme5")
        document.documentElement.style.setProperty('--back', '#fff');
        document.documentElement.style.setProperty('--head', '#fff');
        document.documentElement.style.setProperty('--accent', '#fff');
        document.documentElement.style.setProperty('--font', '#000');
        document.documentElement.style.setProperty('--heart-accent', '#f00');        
    }
    else if (body.classList.contains("theme5")) {
        body.classList.add("theme0")
        body.classList.remove("theme5")
        localStorage.setItem("colorTheme", "theme0")
        document.documentElement.style.setProperty('--back', '#000');
        document.documentElement.style.setProperty('--head', '#000');
        document.documentElement.style.setProperty('--accent', '#000');
        document.documentElement.style.setProperty('--font', '#fff');
        document.documentElement.style.setProperty('--heart-accent', '#f00');        
    }
    else if (body.classList.contains("theme0")) {
        body.classList.add("theme1")
        body.classList.remove("theme0")
        localStorage.setItem("colorTheme", "theme1")
        document.documentElement.style.setProperty('--back', '#6a938b');
        document.documentElement.style.setProperty('--head', '#6a938b');
        document.documentElement.style.setProperty('--accent', '#6a938b');
        document.documentElement.style.setProperty('--font', '#f6d9cb');
        document.documentElement.style.setProperty('--heart-accent', '#c8a67c');        
        }
    else if (body.classList.contains("theme1")) {
        body.classList.add("theme2")
        body.classList.remove("theme1")
        localStorage.setItem("colorTheme", "theme2")
        document.documentElement.style.setProperty('--back', '#faf6d7');
        document.documentElement.style.setProperty('--head', '#faf6d7');
        document.documentElement.style.setProperty('--accent', '#f6d9cb');
        document.documentElement.style.setProperty('--font', '#c8a67c');
        document.documentElement.style.setProperty('--heart-accent', '#f6d9cb');        
    }
    else if (body.classList.contains("theme2")) {
        body.classList.add("theme3")
        body.classList.remove("theme2")
        localStorage.setItem("colorTheme", "theme3")
        document.documentElement.style.setProperty('--back', '#8BE4DE');
        document.documentElement.style.setProperty('--head', '#8BE4DE');
        document.documentElement.style.setProperty('--accent', '#FFBF69');
        document.documentElement.style.setProperty('--font', '#FFFFFF');
        document.documentElement.style.setProperty('--heart-accent', '#FFBF69');        
    }
    else if (body.classList.contains("theme3")) {
        body.classList.add("theme4")
        body.classList.remove("theme3")
        localStorage.setItem("colorTheme", "theme4")
        document.documentElement.style.setProperty('--back', '#d9e5d6');
        document.documentElement.style.setProperty('--head', '#d9e5d6');
        document.documentElement.style.setProperty('--accent', '#F9BE9F');
        document.documentElement.style.setProperty('--font', '#364652');
        document.documentElement.style.setProperty('--heart-accent', '#f7a072');        
    }
}

function initializeTheme(theme) {
    console.log("Color scheme initiated! Changing to " + theme)
    var body = document.querySelector("body")
    if (theme == "theme5") {
        body.classList.add("theme5")
        console.log("theme changed to " + theme)
        document.documentElement.style.setProperty('--back', '#fff');
        document.documentElement.style.setProperty('--head', '#fff');
        document.documentElement.style.setProperty('--accent', '#fff');
        document.documentElement.style.setProperty('--font', '#000');
        document.documentElement.style.setProperty('--heart-accent', '#f00');        
    }
    else if (theme == "theme0") {
        body.classList.add("theme0")
        console.log("theme changed to " + theme)
        document.documentElement.style.setProperty('--back', '#000');
        document.documentElement.style.setProperty('--head', '#000');
        document.documentElement.style.setProperty('--accent', '#000');
        document.documentElement.style.setProperty('--font', '#fff');
        document.documentElement.style.setProperty('--heart-accent', '#f00');        
    }
    else if (theme == "theme1") {
        body.classList.add("theme1")
        console.log("theme changed to " + theme)
        document.documentElement.style.setProperty('--back', '#6a938b');
        document.documentElement.style.setProperty('--head', '#6a938b');
        document.documentElement.style.setProperty('--accent', '#6a938b');
        document.documentElement.style.setProperty('--font', '#f6d9cb');
        document.documentElement.style.setProperty('--heart-accent', '#c8a67c');        
        }
    else if (theme == "theme2") {
        body.classList.add("theme2")
        console.log("theme changed to " + theme)
        document.documentElement.style.setProperty('--back', '#faf6d7');
        document.documentElement.style.setProperty('--head', '#faf6d7');
        document.documentElement.style.setProperty('--accent', '#f6d9cb');
        document.documentElement.style.setProperty('--font', '#c8a67c');
        document.documentElement.style.setProperty('--heart-accent', '#f6d9cb');        
    }
    else if (theme == "theme3") {
        body.classList.add("theme3")
        console.log("theme changed to " + theme)
        document.documentElement.style.setProperty('--back', '#8BE4DE');
        document.documentElement.style.setProperty('--head', '#8BE4DE');
        document.documentElement.style.setProperty('--accent', '#FFBF69');
        document.documentElement.style.setProperty('--font', '#FFFFFF');
        document.documentElement.style.setProperty('--heart-accent', '#FFBF69');        
    }
    else if (theme == "theme4") {
        body.classList.add("theme4")
        console.log("theme changed to " + theme)
        document.documentElement.style.setProperty('--back', '#d9e5d6');
        document.documentElement.style.setProperty('--head', '#d9e5d6');
        document.documentElement.style.setProperty('--accent', '#F9BE9F');
        document.documentElement.style.setProperty('--font', '#364652');
        document.documentElement.style.setProperty('--heart-accent', '#f7a072');        
    }
}

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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
  document.documentElement.scrollIntoView({behavior: 'smooth', block: 'start'});
}

// Pictures Page
var imgs = document.querySelectorAll(".gallery a")

function show_all() {
    console.log("working!");
    for (var index = 0; index < imgs.length; index += 1) {
        console.log(imgs[index])
        imgs[index].style.removeProperty('display')
        imgs[index].removeAttribute('data-lightbox')
        imgs[index].setAttribute('data-lightbox', 'All')
}
}

function show_headshot() {
    for (var index = 0; index < imgs.length; index += 1) {
        if (imgs[index].classList.contains("headshot")) {
            console.log(imgs[index])
            imgs[index].style.removeProperty('display')
            imgs[index].removeAttribute('data-lightbox')
            imgs[index].setAttribute('data-lightbox', 'headshot')
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
            imgs[index].removeAttribute('data-lightbox')
            imgs[index].setAttribute('data-lightbox', 'selfie')
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
            imgs[index].removeAttribute('data-lightbox')
            imgs[index].setAttribute('data-lightbox', 'friends')
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
            imgs[index].removeAttribute('data-lightbox')
            imgs[index].setAttribute('data-lightbox', 'family')
        }
        else { 
            imgs[index].style.display = "none"
        }
    }
}

//Songs Page

$(function(){
    if($('body').is('.songs-page')){
        console.log("Songs Page!");
        const slideGallery = document.querySelector('.slides');
        const slides = slideGallery.querySelectorAll('div');
        const thumbnailContainer = document.querySelector('.thumbnails');

        const highlightThumbnail = () => {
            thumbnailContainer
                .querySelectorAll('div.highlighted')
                .forEach(el => el.classList.remove('highlighted'));
            const slideWidth = document.querySelector('.slides iframe').clientWidth
            const excess = document.querySelector('.slides div').clientWidth - document.querySelector('.slides iframe').clientWidth
            const index = Math.floor(slideGallery.scrollLeft / slideWidth);
            thumbnailContainer
                .querySelector(`div[data-id="${index}"]`)
                .classList.add('highlighted');
        };

        const scrollToElement = el => {
            const index = parseInt(el.dataset.id, 10);
            const slideWidth = document.querySelector('.slides iframe').clientWidth
            slideGallery.scrollTo({left: index * (slideWidth + slideWidth*3/70), behavior: 'smooth'});
        };

        thumbnailContainer.innerHTML += [...slides]
        .map((slide, i) => `<div data-id="${i}" class=""></div>`)
        .join('');

        thumbnailContainer.querySelectorAll('div').forEach(el => {
            el.addEventListener('click', () => scrollToElement(el));
        });

        slideGallery.addEventListener('scroll', e => highlightThumbnail());

        highlightThumbnail();
    }
});

// flipbook 3

$(function(){
    if($('body').is('.books-page')){
        console.log("Books Page!");

        $('.book')
        .on('click', '.active', nextPage)
        .on('click', '.flipped', prevPage);

        var hammertime = new Hammer($('.book')[0]);
        hammertime.on("swipeleft", nextPage);
        hammertime.on("swiperight", prevPage);

        function prevPage() {
        
        $('.flipped')
            .last()
            .removeClass('flipped')
            .addClass('active')
            .siblings('.page')
            .removeClass('active');
        }
        function nextPage() {
        
        $('.active')
            .removeClass('active')
            .addClass('flipped')
            .next('.page')
            .addClass('active')
            .siblings();
            
            
        }
    }
});

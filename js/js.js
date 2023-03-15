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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};


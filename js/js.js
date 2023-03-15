function changeSize(element) {
    console.log("Don't slide away!")
    console.log(element.value)
    var imgs = document.querySelectorAll("img")
    console.log(imgs.length)
    for (var index = 0; index < imgs.length; index += 1) {
        console.log(index)
        if (imgs[index].id == "portrait") {
            imgs[index].style.width = element.value+"%"
        }
        if (imgs[index].id == "landscape") {
            imgs[index].style.width = 1.6*element.value+"%"
        }
    }
}

function test() {
    console.log("Working!");
}

// totop button
let totop = document.getElementById("totop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

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
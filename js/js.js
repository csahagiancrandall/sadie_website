function changeSize(element) {
    console.log("Don't slide away!")
    console.log(element.value)
    var imgs = document.querySelectorAll("img")
    console.log(imgs.length)
    for (var index = 0; index < imgs.length; index += 1) {
        console.log(index)
        imgs[index].style.width = element.value+"%"
    }
}

function test() {
    console.log("Working!");
}
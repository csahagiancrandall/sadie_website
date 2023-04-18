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

function loadTheme() {
    var body = document.querySelector("body")
    if (localStorage.getItem("colorTheme")) {
        let theme = localStorage.getItem("colorTheme")
        console.log("the theme is: " + theme);
        initializeTheme(theme)
    }
    else {
        let random = Math.floor(Math.random() * 6).toString()
        console.log("No color theme found. Setting to random - theme" + random);
        let theme = "theme" + random
        localStorage.setItem("colorTheme", theme)
        initializeTheme(theme)
    }
}

loadTheme()

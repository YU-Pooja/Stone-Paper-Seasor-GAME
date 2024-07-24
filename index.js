function showOrHideRules() {
    if (document.getElementById("rule_wraper").style.display === 'block') {
        document.getElementById("rule_wraper").style.display = 'none';
    } else {
        document.getElementById("rule_wraper").style.display = 'block';
    }
}

function clicked(UserGesture) {
    document.getElementById("3_gestures").style.display = "none"
    document.getElementById("decider-box").style.display = "block"
    document.getElementById("user-choice").style.display = "block"
    document.getElementById("system-choice").style.display = "block"
    document.getElementById("won-result").style.display = "block"
    if (UserGesture === 'paper') {
        let img = document.getElementById("usercircle")
        img.src = "paperimg.png";
        document.getElementById("usercircle").style.backgroundImage = "url(./paperbg.png)";
    } else if (UserGesture === 'seissor') {
        let img = document.getElementById("usercircle")
        img.src = "seissorimg.png";
        document.getElementById("usercircle").style.backgroundImage = "url(./seissorbg.png)";
    }
    let systemGesture = getTheSystemGesture();
    resultDisplay(UserGesture, systemGesture);
}


function getTheSystemGesture() {
    let arr = ["stone", "paper", "seissor"];
    let BackGroundCircle = {
        stone: "url(./stonebg.png)",
        paper: "url(./paperbg.png)",
        seissor: "url(./seissorbg.png)"
    }
    let Images = {
        stone: "stoneimg.png",
        paper: "paperimg.png",
        seissor: "seissorimg.png"
    }
    let SystemGesture = arr[Math.floor(Math.random() * 3)];
    document.getElementById("systemcircle").style.backgroundImage = BackGroundCircle[SystemGesture];
    (document.getElementById("systemcircle")).src = Images[SystemGesture];
    return SystemGesture;
}

function resultDisplay(UserGesture, systemGesture) {
    if (UserGesture === systemGesture) {
        (document.getElementById("won-result")).children[0].innerHTML = "TIE UP";
    } else if ((UserGesture === 'stone' && systemGesture === 'seissor') || (UserGesture === 'paper' && systemGesture === 'stone') || (UserGesture === 'seissor' && systemGesture === 'paper')) {
        (document.getElementById("won-result")).children[0].innerHTML = "YOU WON";
        document.getElementById("user-own").style.display = 'block'
        document.getElementById("ButtonNext").style.display = 'block'
        localStorage.UserScore = Number(localStorage.UserScore) + 1;
    } else {
        (document.getElementById("won-result")).children[0].innerHTML = "YOU LOST";
        document.getElementById("system-own").style.display = 'block';
        localStorage.SystemScore = Number(localStorage.SystemScore) + 1;
    }
    localStoragesetting();
}
localStoragesetting();

function localStoragesetting() {
    if (localStorage.SystemScore && localStorage.UserScore) {
        document.getElementById("your-computer-score").innerHTML = localStorage.UserScore;
        document.getElementById("storage-computer-score").innerHTML = localStorage.SystemScore;
    } else {
        localStorage.SystemScore = 0;
        localStorage.UserScore = 0;
        showOrHideRules("show");
    }
}
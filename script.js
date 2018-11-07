window.addEventListener("load", sidenVises);
let score = 0;
let timeLeft = 15;

let showSettingsEffektSound = true;
let showSettingsMusic = true;


function sidenVises() {
    console.log("siden vises");
    showStart();


}



function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#proevigen").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");

    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#settingsknap").addEventListener("click", settingStart);
    document.querySelector("#kryds").classList.add("hide");
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);
    document.querySelector("#setting_effekt_sound").classList.add("hide");
    document.querySelector("#setting_music").classList.add("hide");

}

function settingStart() {
    console.log("settings")
    document.querySelector("#setting_music").classList.remove("hide");
    document.querySelector("#setting_effekt_sound").classList.remove("hide");
    document.querySelector("#kryds").classList.remove("hide");
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#kryds").addEventListener("click", showStart);

}


function toggleSounds() {
    console.log("toggleSounds");
    /*showSettingsEffektSound = !showSettingsEffektSound;*/

    if (showSettingsEffektSound == false) {
        showSettingsEffektSound = true;
        document.querySelector("#sfx_sprite").classList.add("off_on");
        document.querySelector("#sfx_sprite").classList.remove("on_off");
        document.querySelector("#sfx_sprite").addEventListener('animationend', soundsOff);


        //        soundsOff();
    } else {
        showSettingsEffektSound = false;
        document.querySelector("#sfx_sprite").classList.add("on_off");
        document.querySelector("#sfx_sprite").classList.remove("off_on");
        document.querySelector("#sfx_sprite").addEventListener('animationend', soundsOn);

        //        soundsOn();
    }
}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener('animationend', soundsOff);
    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").classList.add("off");


    //    her slukkes for efx
    //document.querySelector("#hapshaps").muted = true;
    //document.querySelector("#prut1").muted = true;

}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener('animationend', soundsOn);
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");

    //    her tændes for efx
    document.querySelector("#slaa").muted = false;

}




function toggleMusic() {
    console.log("showSettingsMusic function " + showSettingsMusic);
    //showSettingsMusic = !showSettingsMusic;


    if (showSettingsMusic == true) {
        showSettingsMusic = false;
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("on_off");
        document.querySelector("#music_sprite").addEventListener('animationend', musicOff);
        //        musicOn();

    } else {
        showSettingsMusic = true;
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("off_on");
        document.querySelector("#music_sprite").addEventListener('animationend', musicOn);


        //        musicOff();
    }
}

function musicOff() {
    console.log("musicOff function værdi er " + showSettingsMusic);

    document.querySelector("#music_sprite").removeEventListener('animationend', musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");

    //    her slukkes for musikken

    document.querySelector("#slaa").pause();
}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener('animationend', musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");

    //    her tændes for musikken

    document.querySelector("#musik").play();
}



function hideStart() {
    console.log("hide start");

    document.querySelector("#play").removeEventListener("click", hideStart)
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#settingsknap").classList.add("hide");
    document.querySelector("#play").classList.add("hide");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", introRegler);
}

function introRegler() {
    document.querySelector("#intro").classList.remove("hide");
    document.querySelector("#introkryds").classList.remove("hide");
    document.querySelector("#introkryds").addEventListener("click", startGame)
           document.querySelector("#musik").play();
}

function startGame() {
    console.log("start game");
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#introkryds").classList.add("hide");
    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#smiler0").addEventListener("click", smilClick)
    document.querySelector("#smiler1").addEventListener("click", smilClick)
    document.querySelector("#smiler2").addEventListener("click", smilClick)
    document.querySelector("#smiler3").addEventListener("click", smilClick)
    document.querySelector("#smiler4").addEventListener("click", smilClick)
    document.querySelector("#snakker0").addEventListener("click", snakClick)
    document.querySelector("#snakker1").addEventListener("click", snakClick)
    document.querySelector("#snakker2").addEventListener("click", snakClick)
    document.querySelector("#snakker3").addEventListener("click", snakClick)
    document.querySelector("#snakker4").addEventListener("click", snakClick)

        timeLeftFc();
}


function snakClick() {
    console.log("snak")
    score++;
    console.log(score);
    document.querySelector("#score").innerHTML = +score;
    document.querySelector("#slaa").play();
    document.querySelector("#slaa").currentTime = 0;
}

function smilClick() {
    console.log("smil")
    score--;
    console.log(score);
    document.querySelector("#score").innerHTML = +score;
    document.querySelector("#slaa").play();
    document.querySelector("#slaa").currentTime = 0;

}

function timeLeftFc() {
    console.log("timeLeftFc timeLeft er" + timeLeft)
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(timeLeftFc, 1000);
    } else if (score === 10) {
        levelComplete();

    } else {
        gameOver();
    }

    document.querySelector("#time").innerHTML = +timeLeft;
    gameStatus()
}






function gameStatus() {
    console.log("gameStatus");
    if (score == -5) {
        document.querySelector("#gameover").classList.remove("hide");
        document.querySelector("#proevigen").classList.remove("hide");
        document.querySelector("#proevigen").addEventListener("click", showStart);
    } else if (score == 10) {

        document.querySelector("#levelcomplete").classList.remove("hide");
        document.querySelector("#proevigen").classList.remove("hide");
        document.querySelector("#proevigen").addEventListener("click", showStart);
    }


}


function gameOver() {
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#proevigen").classList.remove("hide");
    document.querySelector("#proevigen").addEventListener("click", showStart);
}

function levelComplete() {
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#proevigen").classList.remove("hide");
    document.querySelector("#proevigen").addEventListener("click", showStart);
}

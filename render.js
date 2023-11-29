const GenGame = function () {
    const ALMOST_LOSE_TIME = 3;
    const MAX_TOP = 90
    const MAX_LEFT = 91

    const _sizaCalc= function(top){
        return Math.floor((50 * top) / 100 + 10)
    }

    const _generateFrog = function (i) {
        $(".play").removeClass("won lost")
        $(".play").css("position","relative")
        const frog = $("<div class='frog'><i class='fa-solid fa-frog'></i></div>")
        const top = Math.floor(Math.random() * MAX_TOP);
        const left = Math.floor(Math.random() * MAX_LEFT);
        const size = _sizaCalc(top);
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        frog.css("top", top + "%")
        frog.css("left", left + "%")
        frog.css("font-size", size + "px")
        frog.css("color", "#" + randomColor)
        frog.css("z-index",i)
        $(".play").append(frog)
    }

    const _generateFrogs = function (frogs) {
        $(".play").empty()
        for (let i = 0; i < frogs; i++) {
            _generateFrog(i)
        }

    }
    const normalGen = function(level, frogs){
        $(".start").text("Catch the frog!");
        $(".level").text("Level " + level);
        if (frogs > 1)
            $(".left").text(frogs + " Frogs Left")
        else
            $(".left").text(frogs + " Frog Left")
        _generateFrogs(frogs)
    }

    const newLevel = function (level, timer, frogs) {
        $(".timer").text(timer + " Seconds Left");
        $(".timer").css("color", "yellow")
        $(".start").text("Catch the frog!");
        $(".level").text("Level " + level);
        if (frogs > 1)
            $(".left").text(frogs + " Frogs Left")
        else
            $(".left").text(frogs + " Frog Left")
        _generateFrogs(frogs)
    }
    const updateTime = function (timer) {
        if (timer === Math.floor(timer)) {
            $(".timer").text(timer + " Seconds Left");
            if (timer > ALMOST_LOSE_TIME)
                $(".timer").css("color", "black")
            else
                $(".timer").css("color", "red")
        }
        else {
            $(".timer").text(Math.ceil(timer) + " Seconds Left");
            $(".timer").css("color", "black")
        }
    }
    const gameWon = function () {
        $(".left").text("0 Frogs Left")
        $(".play").empty();
        $(".play").css("position","inherit")
        $(".play").addClass("won")
        $(".play").text("YOU WON CONGRATS!!")
        $(".start").text("Start");
    }
    const gameLost = function () {
        $(".play").empty();
        $(".play").css("position","inherit")
        $(".play").addClass("lost")
        $(".play").text("Alas, no more froggies for you")
        $(".start").text("Start");
    }

    return {
        updateTime, newLevel, gameWon, gameLost,normalGen
    }



}
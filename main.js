const frogGame = FrogGame()
const generator = GenGame()

const render = function () {

    $(".frog").click(function () {
        if (frogGame.caughtFrog()) {
            if (frogGame.wonGame()) {
                generator.gameWon()
            }
            else {
                generator.newLevel(frogGame.getLevel(), frogGame.getMaxTime(), frogGame.getFrogs())
            }
        }
        else {
            generator.normalGen(frogGame.getLevel(), frogGame.getFrogs())
        }
        render()
    })
}
$(".start").click(function () {
    frogGame.restartGame()
    generator.newLevel(frogGame.getLevel(), frogGame.getMaxTime(), frogGame.getFrogs())
    render()
})

setInterval(() => {
    if (!frogGame.wonGame()) {
        frogGame.decreaseTime()
        if (frogGame.getMaxTime() > 0)
            generator.updateTime(frogGame.getMaxTime())
        else if (frogGame.getMaxTime() === 0) {
            generator.updateTime(frogGame.getMaxTime())
            generator.gameLost()
        }
    }
}, 500);

render()
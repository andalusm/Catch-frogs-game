const frogGame = FrogGame()
const generator = GenGame()
const UPDATE_TIME = 500

const render = function () {

    $(".frog").click(function () {
        if (frogGame.caughtFrog()) {
            if (frogGame.wonGame()) {
                generator.gameWon()
            }
            else {
                generator.newLevel(frogGame.getLevel(), frogGame.getTime(), frogGame.getFrogs())
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
    generator.newLevel(frogGame.getLevel(), frogGame.getTime(), frogGame.getFrogs())
    render()
})

setInterval(() => {
    if (!frogGame.wonGame()) {
        frogGame.decreaseTime()
        if (frogGame.getTime() > 0)
            generator.updateTime(frogGame.getTime())
        else if (frogGame.getTime() === 0) {
            generator.updateTime(frogGame.getTime())
            generator.gameLost()
        }
    }
}, UPDATE_TIME);

render()
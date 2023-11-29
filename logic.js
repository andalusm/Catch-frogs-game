const FrogGame = function () {
    let _level = -1;
    let _frogs = -1;
    let _timer = -1;
    const MAX_LEVEL = 6;
    const _levelUp = function () {
        _level++
        _frogs = _level;
        _timer = 2 + _level;
    }

    const restartGame = function(){
        _level = 1;
        _frogs = 1;
        _timer = 3;
    }

    const caughtFrog = function () {
        if (_frogs - 1 === 0) {
            _levelUp();
            return true;
        }
        else {
            _frogs--;
            return false;
        }
    }
    const decreaseTime = function(){
        if(_timer > 0)
            _timer = _timer - 0.5
    }
    const wonGame = function () {
        return _level === MAX_LEVEL;
    }
    const getTime = function () {
        return _timer;
    }
    const getLevel = function () {
        return _level;
    }
    const getFrogs = function () {
        return _frogs;
    }
    return {
        getFrogs, restartGame, getLevel, getTime, wonGame, caughtFrog,decreaseTime
    }
}
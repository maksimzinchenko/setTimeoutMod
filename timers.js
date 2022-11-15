const timerManager = {
    timersIDArray: [],
    setTimeout: function (fn, delay, ...params) {
        let timerId = setTimeout(fn, delay, ...params);
        this.timersIDArray.push(timerId);
        return timerId;
    },
    clearTimeout: function (timerId) {
        let index = this.timersIDArray.indexOf(timerId);
        if (index > -1) {
            this.timersIDArray.splice(index, 1)
        }
    },
    clearAllTimeout: function () {
        while (this.timersIDArray.length > 0) {
            let index = this.timersIDArray.pop();
            clearTimeout(index);
        }
    }
}


// some tests
const tid1 = timerManager.setTimeout(()=>{console.log('1000')}, 1000);
timerManager.clearTimeout(tid1);

timerManager.setTimeout(()=>{console.log('1000')}, 1000);
timerManager.clearAllTimeout();


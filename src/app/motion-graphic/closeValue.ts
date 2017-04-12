export class closeValue {

    flag = 0;
    progress = 0;
    startTime = 0;
    durationTime = 0;
    fromValue = 0;
    toValue = 0;
    minValue = 0;
    maxValue = 1;
    minDuration;
    maxDuration;

    constructor(minTime, maxTime) {
        this.flag = 0;
        this.progress = 0;
        this.startTime = 0;
        this.durationTime = 0;
        this.fromValue = 0;
        this.toValue = 0;
        this.minValue = 0;
        this.maxValue = 1;
        this.minDuration = minTime;
        this.maxDuration = maxTime;
    }

    init() {
        this.durationTime = this.minDuration + (this.maxDuration - this.minDuration) * Math.random();
        this.startTime = Date.now();
        this.progress = Math.min(1, ((Date.now() - this.startTime) / this.durationTime))
        this.fromValue = this.toValue;
        this.toValue = this.minValue + this.maxValue * Math.random();
        this.flag = 1;
        return this.fromValue + (this.toValue - this.fromValue) * this.progress;
    }

    update() {
        this.progress = Math.min(1, ((Date.now() - this.startTime) / this.durationTime));
        if (this.progress == 1) this.flag = 0;
        return this.fromValue + (this.toValue - this.fromValue) * this.progress;
    }

    execution() {
        if (this.flag == 0) {
            return this.init()
        }
        else if (this.flag == 1) {
            return this.update()
        };
    }


}
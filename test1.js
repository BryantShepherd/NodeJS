class Bicycle {
    constructor(cadence, speed, gear) {
        this.cadence = cadence;
        this.speed = speed;
        this.gear = gear;
    }
}

let bicycle = new Bicycle(1, 2, 3);
console.log(bicycle);
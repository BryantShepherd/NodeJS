class Animal {
    constructor(name) {
        this.name = name;
    }
    walk(destination) {
        console.log(this.name, 'is walking to ', destination);
    }
}

var animal = new Animal('elephant');
animal.walk('melbourne');
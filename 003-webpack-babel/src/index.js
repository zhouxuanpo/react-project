console.log('I am index.js');

class Animal {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log('My name is '+this.name);
    }
}

var animal=new Animal('Tong chu Ji');

animal.sayName();

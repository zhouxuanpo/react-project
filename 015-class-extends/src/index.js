
class Person {
    constructor(name , weight){
        this.myName = name;
        this.myWeight = weight;
    }
    sayName() {
        console.log('Hello I am ' + this.myName);
    }
    sayWeight() {
        console.log('My weight is ' + this.myWeight);
    }
}

var zx = new Person('Zhou Xuan','72kg');
var abc = new Person('A b c ','50kg');

zx.sayName();
zx.sayWeight();

abc.sayName();
abc.sayWeight();

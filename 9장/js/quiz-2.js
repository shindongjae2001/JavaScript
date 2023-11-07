class Pet {
    constructor(name,color) {
        this.name=name;
        this.color=color;
    }
    run() {
        document.write(`${this.color} ${this.name}가 달린다.`);
    }
 }

 class Cat extends Pet{
    constructor(name,color,breed) {
        super(name,color);
        this.breed=breed;
    }
    viewInfo() {
        document.write(`이름 : ${this.name}, 품종 : ${this.breed}, 색깔 : ${this.color}<hr>`)
    }
 }

 const Ang = new Cat("앵두","흰색","비숑");
 Ang.viewInfo();
 
 Ang.run();
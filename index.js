// Your code here
class Cat {
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(){
        return `${this.name} says meow!`
    }
   
  }
   
  class Dog {
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(){
        return `${this.name} says woof!`
   
  }
}
const ruffie=new Dog("Ruffie")
ruffie.speak();
  
class Bird {
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(){
        if(this.sex==="male"){
            return `It's me! ${this.name}, the parrot!`
        }
        else if(this.sex==="female"){
            return `${this.name} says squawk!`
        }
    }
  
  }
  let bird;
  let bird2;
  
  
let id: number = 5
id = 5

function addNum(x:number,y:number):number{
    return x+y
}

console.log(addNum(1,3))

function log(message:string|number) : void{

}

//Interface:
interface UserInterface{
    readonly id: number
    name:string
    age? : number
}

const user1 : UserInterface = {
    id:1,
    name:"siska"
}


interface MathFunc {
    (x:number,y:number):number
}

const add: MathFunc =(x:number,y:number):number=>x+y

//Clases:
interface PersonInterface{
    id:number
    name:string
    register():string
}

class Person implements PersonInterface{
    id: number
    name: string
    constructor(){
        console.log(123)
    }

    register(){
        return ""
    }
}

const brad = new Person()

console.log(brad.register())


class Employee extends Person{
    position : string

    constructor(id:number,name:string,position:string){
        super(id,name)
        this.position = position
    }
}


//Generics 

function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numArr = getArray<number>([1,2,3,4])

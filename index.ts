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
class Person{
    id: number
    name: string
    constructor(){
        console.log(123)
    }
}

const brad = new Person()
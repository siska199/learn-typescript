type SomeType = number;

type MyConditionalType = SomeType extends string?string : null

function someFuntion<T>(value:T){
    type A = T extends boolean?'Type A':T extends string ? 'Type B' : T extends number ? 'Type C':'Type D'
    const someOtherFunction= (someArg:T extends boolean?"Type A":"Type B")=>{
        const a:'Type A' | 'Type B' = someArg
    }
    return someOtherFunction;
}

const result = someFuntion('')



type MyType<T> = (() =>T) extends ()=> string|number ?T : never
type MyResult = MyType<string|number|boolean> 


interface Type_Action{
    ADD_TODO : "ADD_TODO"
    DELETE_TODO : "DELETE_TODO"
}

type REDUCER_TYPE = {
    action : Type_Action["ADD_TODO"],
    payload : string
}

const reducer : REDUCER_TYPE = {
    action : "ADD_TODO",
    payload : "name"
}


// interface User {
//     fullname : string
//     username : string
//     image : string
// }

// type ContactSumInfo = Pick<User,'username'|'image'>

// const contactSumInfo :ContactSumInfo = {
//     username : "siska ar",
//     image : "imimim"
// }


// interface Starship {
//     name : string;
//     enableHyperjump : boolean
// }

// const updateStarship = (id : number, starship:Partial<Starship>)=> {

// }

// updateStarship(1,{name : 'Explore'})



// const starship : Recors<string, Starship> = {
//     Explor1 : {
//         name : 'Explore 1',
//         enableHyperjump : true
//     },
//     Explore2 : {
//         name : 'Explore 2',
//         enableHyperjump: false
//     }
// }

//Exclude (Remove union data) and get ununion data from left type 

// type AvailableDrinks = "Coffe" | "Tea" |"Orange Juice" | "Lemonade"

// let johnDrinks : AvailableDrinks = "Coffe"

// type DrinksJaneDosentLike = "Coffe"|"Orange Juice" | "Cappucino"

// type DrinksJaneLike = "Tea" | "Lemonade" | "Mohito"

// const JeneDrinks : Extract<AvailableDrinks,DrinksJaneLike > = "Lemonade"

//Extract (get union data)


// interface StarShipProperties {
//     color? :"blue"|"red"|"green"
// }

// function painStarShip(id:number,color:NonNullable<StarShipProperties["color"]>){
//     return color
// }

// painStarShip(1,"blue")

// type PaintStarshipReturn = ReturnType<typeof painStarShip>


// type Properties = "propA" | "propB"

interface User {
    fullname : string
    username : string
    image : string
}

type myMappedType<T> = {
    [P in keyof T] : T[P] | null
}

type UserSum = myMappedType<User>


// type Pick1<T,Properties extends keyof T> = {
//     [P in Properties] : T[P]
// }

// type MyNewType2 = Pick1<{a:"a",b:"b"},"a"|"b">


interface InitialForm {
    name : string
    fullname : string
    password : string
}

type MapType<T> = {
    [P in keyof T] : T[P]
}
type TInitialType = MapType<InitialForm>

const initialForm = {
    name : "",
    fullname : "",
    password : ""
}

type OnlyKeysInitialForm = keyof typeof initialForm

const getKeyValue = <T extends object, U extends keyof T>(obj: T) => (key: U) =>
  obj[key];

Object.keys(initialForm).map((key)=>{
    console.log(key)
    console.log(getKeyValue(initialForm)(key))
})

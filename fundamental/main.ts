interface MyUser {
    name : string;
    id : string;
    email ? : string;
    phone? : string;
}

// interface MyUserOptional{
//     name? : string;
//     id? : string;
//     email? : string;
// }

type MyUserOptional = Partial<MyUser>

const merge = (user:MyUser,overried:MyUserOptional):MyUser=>{
    return({
        ...user,
        ...overried
    })
}

type RequiredMyUser = Required<MyUser>
type JusEmailAndName = Pick<MyUser,"email"|"name">
const mapById = (users:MyUser[]):Record<string,MyUser>=>{
        return users.reduce((a,v)=>{
            return{
                ...a,
                [v.id]:v
            }
        },{})
}




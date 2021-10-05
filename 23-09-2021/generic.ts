interface Resources<T>{
    uid:number;
    name:string;
    data:object;
}

const docone:Resources<object>={
    uid:1,
    name:'person',
    data: {name:'ketan'}
}
console.log(docone)
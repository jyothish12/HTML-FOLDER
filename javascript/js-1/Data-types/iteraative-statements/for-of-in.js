// for of (for of represent  only arrays )
/*
let name=[1,2,3,4,5,6,7,8]
for(x of name){
    console.log(x)
}
*/



/*
let a=['jyothish',10000,34,"gkjbv",2000]
for(x of a){
    console.log(x)
}
*/



// for in (for in accept only object)

/*
let Details={
    name:"jyothish",Salary:20000,Age:23
}
for (x in Details){
    console.log(x)
}
*/
/*

let data={
    name:"jyothish",Salary:22,Age:23
}
for(x in data){
    console.log()
}
*/    



let data=[ {name:"jyothish",salary:23345,age:33},
    {name:"teja",salary:20435,age:20},
    {name:"srinu",salary:43433,age:43},
    {name:"anusha",salary:45366,age:46}]

for(key of data){

console.log(key.name)
} 
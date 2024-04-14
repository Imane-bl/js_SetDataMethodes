/*
Array methodes 
array.from(iterable,mapfunc,this )
--- variables 
---- string nbrs
---- using nbrs
---- arrow func
----- shorten the method + use arg
*/

console.log(Array.from("OSSAMA"))
console.log(Array.from("1223456",function(n){
 return +n +  +n
//pour applique n comme un nbr
}))

console.log(Array.from("1223456",n => +n +  +n))



let myarray=[1,1,1,2,3,4]
/*
let ss=new Set(myarray)
console.log(Array.from(ss))*/

console.log([...new Set(myarray)])//seperad
//array [1,2,3,4]
function af(){
    return Array.from(arguments);
}
console.log(af("osa","ahmes","sayes"))//trdhali list
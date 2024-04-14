// map methodes 
/*
---set   --> ajouter add inserer
---get 
--- delete(ism key)
----clear 
---- has */
//sinon jpeux faire ca direct 

let mymap= new Map([ 
    [10,"number"],["name","string"],[false,"bool"]]);
/*mymap.set(10,"number");
mymap.set("name","string");*/
//mymap.set("string");//"string"=> undefined sma khas key/value 
// DONC N9DER NHI SET W NST3ML ARRAY FIHA ITEM TA3I LI RAHM
//DEJA F ARRAY
console.log(mymap)
console.log(mymap.get(10))//acces a val number
console.log(mymap.get("name"))// string
console.log(mymap.get(false))// bool

console.log(mymap.size)//3


console.log(mymap.delete(10)) //true
console.log(mymap)
console.log(mymap.size)//2

console.log(mymap.has("name"))//true


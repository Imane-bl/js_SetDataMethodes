/*
map data type    map vs obj
syntax: new Map( iterable with key by default)

-----map => does not contain key by default(no prototype )
-----obj => has default keys

*/

let myobj={}
let myemptyobj= Object.create(null)//null prototype:ibj
// hna koun nhi null ydli erreur car khas tkoun soit null soit obj
let mymap= new Map();

console.log(myobj)// prototype : object
console.log(myemptyobj)// no properties 
//ya un deffirence entre eux 
console.log(mymap)//enteries no properties 


/*------map=> key can be anything [func,obj,..]
-------obj=> not 100% till now */
let mynewobj={
    10:"number",
    "10":"string",

};
console.log(mynewobj[10])//string

let mynewmap= new Map();

mynewmap.set(10,"number")//key,value 
mynewmap.set("10","string") 
mynewmap.set(true,"bool") //n9der nzid hwayj
mynewmap.set(function dosome(){},"func") 

console.log(mynewmap.get(10))  //number//get ytlb lkey ta3i
console.log(mynewmap.get("10"))// string

console.log("-".repeat(20))

console.log(mynewobj) //fih gher string yjib lkhra 
console.log(mynewmap)//hna fih number w string yjibhm g3 m3a lkeys tan

/*----
----map=> orderd by insertion TRTB ELA HSAB ANA WCH DKHLT 
---- obj=>not 100% 
*/




/*----
----map=> get items by size
---- obj=>need to manually */
let len=Object.keys(mynewobj).length;
console.log(len)// 1 car keys yhwlhm lstring donc hatwli endi nfs key 10 10 
//donc yhsbhm wahd eliha 1 kon nbdl 10 tanya b 20 haydli 2



/*----
----map=> loop direct
---- obj=>not direct  
*/


/*----
----map=> better perfrmence f ta3aml lbayant add ou delete 
---- obj=>low perf  
*/
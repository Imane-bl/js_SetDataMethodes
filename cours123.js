
// MAP AND SET
///Cours SET DATA TYPES AND METHODES
/*
 syntax : new set(iterable)
 object to store unique val
 cannot access elm by index!!

 properties:
 --size

 --methodes:
 --add/delete/clear/has
 */

 let mydata=[1,1,1,2,3];
 //let myUniqueData= new Set([1,1,1,2,3]); 
 //let myUniqueData= new Set(mydata); // je peux faire ca aussi 
 //let myUniqueData= new Set().add(1).add(1).add(2);// 1,2 size 2
 let myUniqueData= new Set();
 myUniqueData.add(1).add(1).add(2).add(3)
 
 
 console.log(mydata) //array (5) [1, 1, 1, 2, 3]
 //0-4 length:5

 console.log(myUniqueData)//Set Set(3) {1, 2, 3}
 //0-2 size 3

//-----------------------------------------------
//myUniqueData.delete(1)
//size ywli 2 umhi les deux 1 
console.log(myUniqueData.delete(1))// yrj3li true
//donc delete thws ela lhaja ida kayna wla nn  ida hatit 2à trdli false 
console.log(myUniqueData)
 console.log(myUniqueData.size)// 3


 //mn9derch ndkhl ela l3anaser b index kima array

 //has  biha nerf ida elm kayn wal nn
 let dataautre=[1,1,2,3,"A"];
 myUniqueData.add("A")

console.log(dataautre)
console.log(myUniqueData.has("A"))//true 
console.log(myUniqueData.has("B"))//false 


/*

Set vs WeakSet ( obj li mendouch ref mch exist tra 3amaliyat garbage mash)

f set 3adiya n9der sort ay bayant 
f weakset nhat gher object 

set --> store any data value
weakset--> collection of obj only

-- f memeory mangement ytm automatique in js 3aks c++
*/ 

//==> fkra te weakset hiya ndir clear llobjet ki ywlou mch acceble menhmch ref 


/*  ---1-----------------------------------
set --> store any data value
weakset--> collection of obj only
*/
//Type of data**************************************************
let myset=new Set([1,1,1,2,3,"A","A"])//size 4
console.log(myset)
console.log("#".repeat(20))
//-----------------weakset-----------------------
let myWs=new WeakSet([{a:1,b:1,c:2,d:3, e:"A",f:"A"}])//size 4
console.log(myWs)
console.log("#".repeat(20))
// erreur invalid value  ida mahthmch f obj


//SIZE********************************************************
/*set --> have size prop
weakset --> does not have size */
console.log(`size: ${myset.size}`)

//Value keys alias******************************************
/*set --> have keys,values, entries
weakset --> does not have clear ,keys , values and entries */
let itereteur= myset.keys();
console.log(itereteur)
//console.log(itereteur.next())// val 1 done:false y3ni marhalt iteration mazalt mkhlstch
console.log(itereteur.next().value)//1
console.log(itereteur.next().value)//2



// Foreach*******************************************************
/* set--> can use foreach
weakset--> cant use foeeach*/
myset.forEach(element => {console.log(element)
    
});// 1,2,3,A






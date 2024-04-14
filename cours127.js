//map vs weak map
/*
---map=> key can be anything 
---weakmap=> /// be only obj ndig gher bj */

let mapuser={ name: "elzero"};
let mymap=new Map();
mymap.set(mapuser,"obj val")

mapuser=null; //ovveride memero mch hatnhih psk aw f map say 
console.log(mymap)// obj dakhl/ objMap(1) {{…} => 'obj val'}

//----weakMap
console.log("-".repeat(20))

let wmapuser={ name: "elzero"};
let wmymap=new WeakMap();
wmymap.set(wmapuser,"obj val")
wmapuser=null;//mch hatnhih
//wmymap.set("name","v")//invalid 
 
console.log(wmymap)
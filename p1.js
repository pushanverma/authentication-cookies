let specialCh=["~","@","#","$","%","^","&","*","(",")","-","_","+","{","}","[","]","<",">","?"];
let numericCh=["0","1","2","3","4","5","6","7","8","9"];
let uppercaseCh=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let a="Pushan@1";
let b="pushan";

let arr=a.split('');
// console.log(arr,"...arr")

handleCheck(a);

   var lengthcheck;
   var specialchchcek;
   var numericheck;
   var uppercasecheck;

   if(a.length>=8){
    console.log("length greater than 8");
    lengthcheck=true;
   }

function handleCheck(a){

    console.log(a,"....a")

    for(let i=0;i<a.length;i++){

        let singleChar=a.charAt(i);

        if(specialCh.includes(singleChar)){
            console.log("special char found")
            specialchchcek=true;

        }
        if(numericCh.includes(singleChar)){
                console.log("numeric found")
                numericheck=true;
        }
        if(uppercaseCh.includes(singleChar)){
            console.log("uppercase found")
            uppercasecheck=true;
        }
    }
}







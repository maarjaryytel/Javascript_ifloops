document.addEventListener("DOMContentLoaded", function(){
  console.log("TERE!");  
  
  let hello = "Hello world"
  console.log(hello);

  let rangeStart = 1;
  let rangeEnd = 100;
  let numberToCheck = 61;
  let inRange = false;

  for (let i = rangeStart; i <= rangeEnd; i++) {
       if(i === numberToCheck) {
          inRange = true;
          break;

       }

    }
    /*if(inRange) {
        console.log("The number is in range");
    } else {
        console.log("The number is out of range");
    }*/

    //Ternary Operator
    /*let result = inRange ? "In Range" : "Out of Range";
     console.log(result);*/

     //korrutustabel- write a program to display the multiplication table of given number
//test data
//number : 5
// expected output
//5 x 1 = 5;
//5 x 2 = 10;
//---;
     /*let number = 5;    
     
     for(let i = 1; i <= 10; i++) {
        let string = `${number} X ${i} = ${number*i}`; 
        console.log(string);
        
        //console.log(number, " X ", i , " = ", number*i);
     
      }*/

      let stringLength;
      let string = "Hello world!";
      stringLength = string.length;
      console.log(stringLength);

      /*for(let i = 0; i < 12; i++) {
          console.log(string[i]);
      }
      for(let i = string.length-1; i >=0; i--) {
          console.log(string[i]);

      }*/

     for (let i = 0; i < 12; i++) {
        if(string[i] === "o"){
            console.log("*");              
            } else {
            console.log(string [i]);

            let substitute = string.replace("o", "*");
            console.log(string [i]);
        }
    }
});
         
     
    
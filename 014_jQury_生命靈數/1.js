input = "2020-12-22";
let inputArray = Array.from(input);
// inputArray.filter(e=>e!="-");
inputArray.splice(7, 1);
inputArray.splice(4, 1);


// function reduce(){
    while(inputArray.length>1){
    var number =inputArray.map(e => Number(e)).reduce(function (accumulator, currentValue) {
    return accumulator+currentValue });
    inputArray=Array.from(number.toString());
   
    }
    console.log(number);
//     return a;
// };



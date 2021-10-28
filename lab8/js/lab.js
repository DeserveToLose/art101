/**
 * Author:    Cong Wang
 * Created:   10.25.2021
 *
 * (c) Copyright by Blub Corp.
 **/

//create an array
array = [4,2,52,34,12];
console.log("My array is: " + array);
//create a function
function plusOne(x){
    return x + 1;
}

//test function
console.log("0 plus one equals: " + plusOne(0));
console.log("5 plus one equals: " + plusOne(5));

//test map
var testRecord = array.map(plusOne);
console.log("Each number in the array plus one: " + testRecord);

//create callback function
var callBack = array.map(function(x){
    return x / 2;
})
console.log("Each number in the array devided by 2: " + callBack);

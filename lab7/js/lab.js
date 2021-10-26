/**
 * Author:    Cong Wang
 * Created:   10.25.2021
 *
 * (c) Copyright by Blub Corp.
 **/


 function whatsUserName(){
   var userName = window.prompt("What's your name? I'll give you a new one.");

   // split string to array
   var nameArray = userName.split('');
   console.log("nameArray = ", nameArray);

   // sort the array
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort = ", nameArraySort);

   // join array back to a string
   var nameSorted = nameArraySort.join('');
   console.log("nameArraySort = ", nameSorted);

   return nameSorted;
 }

 // output
document.writeln("Here is your new name: ", whatsUserName(), "</br>");

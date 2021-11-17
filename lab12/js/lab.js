/**
 * Author:    Cong Wang
 * Created:   11.15.2021
 *
 * (c) Copyright by Blub Corp.
 **/

 function sortingHat(str) {
   len = str.length;
   mod = len % 4;

   if (mod == 0) {
     return "KFC";
   }
   else if (mod == 1){
     return "Mcdonald"
   }
   else if (mod == 2) {
     return "Five Guys"
   }
   else {
     return "In-N-Out"
   }
 }

 $("#button").click(function(){
   var name = $("#input").val();
   var house = sortingHat(name);
   alert("The Sorting Hat has sorted you into " + house);

 })

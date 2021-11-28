/**
 * Author:    Cong Wang
 * Created:   11.23.2021
 *
 * (c) Copyright by Blub Corp.
 **/

  $("#button").click(function FizzBuzz(x,y) {
   var oneLongString = "";
   for (var num = 1; num < 200; num++) {
     if (num % 3 == 0 && num % 5 ==0) {
       oneLongString += num + " FizzBuzz!<br>";
     }
     else if (num % 3 == 0) {
       oneLongString += num + " Fizz!<br>";
     }
     else if (num % 5 == 0) {
       oneLongString += num + " Buzz!<br>";
     }
     else if (num % 7 == 0) {
       oneLongString += num + " Boom!<br>";
     }
     else {
       oneLongString += num;
     }
   }
   $("#output").html(oneLongString);
 });

/**
 * Author:    Cong Wang
 * Created:   10.25.2021
 *
 * (c) Copyright by Blub Corp.
 **/


//   Use getElementById() to find your output <div> and assign it
//   to a variable outputEl

 var outputEl = document.getElementById("output");

//   Create a new element with document.createElement("p")
//   and assign it to a variable new1El

 var new1El = document.createElement("p");

 //Change the html attribute of new1El to say something new.

  new1El.innerHTML = "winter is coming";

  //Create another new element and assign it to a variable new2El

  var new2El = document.createElement("p");

  //Change the html attribute of new2El to say something else.

  new2El.innerHTML = "watch out white walkers";

  //Append both new elements one at a time
  //using appendChild() to your output <div>

  outputEl.appendChild(new1El);
  outputEl.appendChild(new2El);

  //Change the css attributes of at least two elements of your page

new1El.style.background = "red";
new2El.style.background = "red";
new1El.style.fontFamily = "fantasy";
new2El.style.fontFamily = "fantasy";
new1El.style.backgroundSize = "200px 50px";
new2El.style.backgroundSize = "200px 50px";

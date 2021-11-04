/**
 * Author:    Cong Wang
 * Created:   10.25.2021
 *
 * (c) Copyright by Blub Corp.
 **/


// Borrow the nameSort() function or my anagram() function from Lab 7.
// Attach an event listener to your button that does the following:
// Gets the value of your input field
// Runs that value through your sort() or anagram() function and saves the results.
// Replaces the html in <div id=output> with the results.
  var buttonEl = document.getElementbyId("mybutton");
  funtion changeName(){
    
  var userName = document.getElementbyId("input").value;
  var nameArray = userName.split('');
  var nameArraySort = nameArray.sort();
  var nameSorted = nameArraySort.join('');
  return nameSorted;
  var headingEl = document.getElementbyId("heading");
  headingEl.innerHTML = "Hey, " + nameSorted + "!";
}

  buttonEl.addEventlistner("click", changeName);


var outputEl = document.getElementById("output");
outputEl.appendChild(headingEl.innerHtml);

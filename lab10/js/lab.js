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


  document.getElementById("mybutton").addEventListener("click", function(){
    var userName = document.getElementById("userName").value;
    var nameArray = userName.split('');
    var nameArraySort = nameArray.sort();
    var nameSorted = nameArraySort.join('');
    var outputEl = document.getElementById("output");
    outputEl.innerHTML = "Hey, " + nameSorted + "!";
  });

/**
 * Author:   Cong Wang
 * Created:  10/21/2021
 *
 * (c) Copyright by Blub Corp.
 **/



var myTransport = ["bike","car","bus"];

var myMainRide = {
    make : 'Lexux',
    model : 'lc500',
    color : 'white',
    year : '2020',
    age : function() {
      return 2021 - year;
    }
}

//Output

  document.writeln("Getting around: " + myTransport + "<br>");
  document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

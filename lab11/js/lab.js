/**
 * Author:    Cong Wang
 * Created:   10.25.2021
 *
 * (c) Copyright by Blub Corp.
 **/

$("#Challenges").append("<button id = 'but1'>Challenge Button!");
$("#Problems").append("<button id = 'but2'>Problems Button!");
$("#Results").append("<button id = 'but3'>Results Button!");


$("#but1").click(function(){
  $("#Challenges").text("Actually there are many huge challenges!");
});

$("#but2").click(function(){
  $("#Problems").append("It's really hard to solve the problem!");
});

$("#but3").click(function(){
  $("#Results").slideToggle();
  $("#title").text("WoooooooooooHuuuuuuuuuu!");
});

$(":button").css({"background-color":"red","font-size":"200%","margin-left":"500px"});

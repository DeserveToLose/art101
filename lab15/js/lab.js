/**
 * Author:    Cong Wang
 * Created:   11.30.2021
 *
 * (c) Copyright by Blub Corp.
 **/


 var myUrl = "https://cataas.com/cat?json=true";

 $("#myButton").click(callAjax);

  function callAjax(){
    console.log("click");
    $.ajax({

      url: myUrl,
      //data: {},
      type: "GET",
      dataType: "json",

      })

    .done(function(data) {
      console.log("Success:", data);
      var newUrl = "https://cataas.com/" + data.url;
      var newTag = "<img src= " + newUrl + ">";
      $("#output").html(newTag);

    })

    .fail(function(request,error) {
      console.log(request, error);
    })
  }

/**
 * Author:    Cong Wang
 * Created:   12.4.2021
 *
 * (c) Copyright by Blub Corp.
 **/

 var myUrl = "https://xkcd.com/info.0.json";

 $("#myButton").click(callAjax);

 function callAjax(){
   console.log("click");
   $.ajax({

       url: myUrl,
       type: "GET",
       dataType: "json",

})

    .done(function(data) {
      console.log("Success:", data);
      var titleTxt = data.title;
      $("#title").html(titleTxt);
      var imgUrl = data.img;
      var imgTag = "<img src= " + imgUrl + ">";
      $("#output").html(imgTag);
      $("#imgTag").attr("alt", data.alt);
})

    .fail(function(request,error) {
      console.log(request, error);

  })
}

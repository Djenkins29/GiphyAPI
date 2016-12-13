$(document).ready(function() {


   var search = $("#search").click(function() {
   var input = $("#input").val();
   console.log(input);
     
     $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q="+input+"&api_key=dc6zaTOxFJmzC",
     
     
         
      function (response) {
        console.log(response);
        for(i=1 ; i<6 ; i++)
        $("#gif").append("<img src=" + response.data[0].images.fixed_width_downsampled.url + ">");
      });
     
      
//    var reset = $("#reset").click(function() {
//    $(response).remove()
//   }); 
   
   
   
   

       
       
});
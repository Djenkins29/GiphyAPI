$(document).ready(function() {
    
     $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q=cars&api_key=dc6zaTOxFJmzC",
     
     
      function(response) {
        console.log(response);
        $("#gif").append("<img src=" + response.data[0].images.fixed_width_downsampled.url + ">");
      });


    $("#search").click(function() {
   
   var input = $("#input").val();

    
    });   
});

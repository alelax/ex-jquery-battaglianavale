$(document).ready(function(){

   //Ciclo che genera 64 celle
   for (var i = 0; i < 64; i++) {
      $('.grid-container').append( "<div id="+ i + " class=grid-item></div>");
   }

   $('.grid-item').click(function(){
      $(this).css("background-color", "red");
   })


});

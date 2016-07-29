$(document).ready(function(){
$("#myButton").click(function() {
    
    $('#myButton').addClass("btn").addClass("btn-primary");
    
    //$("#pass").val();
    if ($("#pass").val()==="Central Park"){
        $("#result").append('<img src="http://67.media.tumblr.com/ba556397832326a931c4c09a66720958/tumblr_nyc8n13ytA1rwfctbo3_500.gif">' )
         } 
    else {
    $("#result").append('<img scr="http://media.giphy.com/media/6U6sno5AkUsOQ/giphy.gif">')
        
    }
});
});
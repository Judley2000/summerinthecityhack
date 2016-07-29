$(document).ready(function(){
    
    
     var questions = [
        "I control the air around me by spinning at top speed forget stuff like ice In summer im the only thing you need What am I?",
]
         

   
       

   
           var answers=[
        "Central Park",
        "Fan"
        ]
        
        
        var q= questions[0] 
        
        $("#question").text( q ) 
        
        $("#myButton").click(function() {
         var userinput = $("input").val()
         
         if( userinput == "Fan" ) {
          var y = "I am the center of attention in my city of possibilties people like to hang out in me because of my tranquility What am I? "
          
          $("#question").text( y ) 
          
          $("#myButton").click(function() {
          var secanswer = $("input").val(); 
         
             if (secanswer == "central park" ) {
                        window.location.href = "winner.html";
                    }else {
                 alert('try again')
             } });
                        
         } else {
             
         }
         
        })
        


});
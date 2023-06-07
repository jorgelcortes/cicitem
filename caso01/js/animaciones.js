$(document).ready(function(){

    
    $("#svg1").mouseenter(function(){

        $("#Huesos_Hover").fadeTo("fast", 1);
        $("#Texto_Huesos_Hover").fadeTo("fast", 1);
      });
    
      $("#svg1").mouseleave(function(){
        $("#Huesos_Hover").fadeTo("fast", 0);
        $("#Texto_Huesos_Hover").fadeTo("fast", 0);
      });
    })
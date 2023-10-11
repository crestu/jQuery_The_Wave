$(document).ready(function(){
    var HEIGHT = $(window).height();

    $(".move").each(function(){
        $("#div1").animate({top: HEIGHT},"slow", function(){
            $("#div2").animate({top:HEIGHT},"slow", function(){
                $("#div3").animate({top:HEIGHT},"slow", function(){
                    $("#div4").animate({top:HEIGHT},"slow",function(){
                        $("#div5").animate({top:HEIGHT}, "slow", function(){
                            $("#div6").animate({top:HEIGHT},"slow",function(){
                                $("#div7").animate({top:HEIGHT},"slow",function(){
                                    $("#div8").animate({top:HEIGHT},"slow");
                                });
                            });
                        });
                    });
                });
            });
        });
      });
    
      if($(".move")=== HEIGHT){
        $(".move").each(function(){
            $("#div1").animate({top:0},"slow");
        });
      }
    });

//create program
    //each div 
    //when reaches bottom of window
    //and reaturns to original position
//the next div should not move 
    //until the first div reached the bottom of the window

//*have to make nested animations
    //the callback function for the animation will be another animation
    //use div ids to differentiate which should move at each time

//*return up should be a different set of nested animations
    //first div can return up once it reaches the bottom
//*use setInterval to go endlessly
    //the full execution of up and down for each is 5.3 seconds
    //time the interval so the next iteration occurs
        //after all divs have returned to origin

//*8 callbacks total, one for each div
/*HW6_maze of web2.0, qiangbo_14331229,group 11*/
/*the .js of the maze*/

  
/*to act the input command*/

 window.onload=function() {

    var x = 0;
    var y  =0;
    var count = 0;
    var l = 1;
    var if_start = 0;
    var if_thro_wall = 0;
  
    var rand_sx = 10 * parseFloat((Math.random()).toFixed(1));
	var rand_sy = 10 * parseFloat((Math.random()).toFixed(1));
	    	
	var rand_ex = 10 * parseFloat((Math.random()).toFixed(1));
	var rand_ey = 10 * parseFloat((Math.random()).toFixed(1));

	for (var k = 1; k <13; k++) {
    	y = 60 + 40 *k;
    	for(var i = 1;i<25;i++) {
	    	x = 150 + 40 * i;
	    	
	    	if (i == 24&&k == 12) {
	    		e_position(x, y);
                document.getElementById('end0').onmouseover = function() {		   
		            display_success();
		            game_overf();
	            }
	    		
				
	    	} else if (i == 1&&k == 1) {
	    		s_position(x, y);
	    		document.getElementById('start0').onmouseover = function() {	   
		            display_start();
	            }
	        } else  if (i == 1&&k == 2) {
	    		    sc_position(x, y);
	    		    ec_position(x, y);
                    document.getElementById('start1').onmouseover = function() {		   
		            if_thro_wall = 1;
	                }
	                document.getElementById('end1').onmouseover = function() {		   
			            display_fail();
			            game_overf();
	                }

	        } else  if (i == 2&&k == 1) {
	    		    ec1_position(x, y);
                    
                    document.getElementById('end2').onmouseover = function() {		   
			            display_fail();
			            game_overf();
		            }
            } else {
            	for (var j = 0; j < 8; j++) {
	    	    var randx = 10 * parseFloat((Math.random()).toFixed(1));
	    	    
	    		if ( randx > 7) {
	    			count++;
	    			
	    		    xposition2(x, y,count);
	    		    document.getElementById('wall'+count).onmouseover=function(){
						display_fail(count);	
						
	    		    }
	    		} else {
	    			count++;
	    		 	xposition3(x, y,count);
	    		 	document.getElementById('wall'+count).onmouseover=function(){
						display_fail(count);	       
	    	            }
	            }

		        for (var j = 0; j < 8; j++) {
		    	    var randy = 10 * parseFloat((Math.random()).toFixed(1));
		    	    
		    		if ( randy > 9) {
		    			count++;
	    		 	    xposition3(x, y + 20,count);
		    			document.getElementById('wall'+count).onmouseover=function(){
						    display_fail(count);	
		    		    }
		    		} 
		        }
            }
            
        }
          
    }

 }
  
function xposition1(x, y,count) {
	
        new_wall= document.createElement("span");
	    new_wall.style.position="absolute";
	    new_wall.style.left =  x + 'px';
	    new_wall.style.top =  y + 'px';
	    new_wall.style.width="20px";
	    new_wall.style.height="40px";
	    new_wall.className="wall_son";
	    new_wall.setAttribute("id", "wall"+count);
	    document.getElementById("wall").appendChild(new_wall);
	    new_wall.style.backgroundImage = "url(bg.jpg)";
	   
}

function xposition2(x, y,count) {
	
        new_wall = document.createElement("span");
	    new_wall.style.position="absolute";
	    new_wall.style.left =  x + 'px';
	    new_wall.style.top =  y + 'px';
	    new_wall.style.width="40px";
	    new_wall.style.height="20px";
	    new_wall.className="wall_son";
	    new_wall.setAttribute("id", "wall"+count);
	    document.getElementById("wall").appendChild(new_wall);
	    new_wall.style.backgroundImage = "url(bg.jpg)";
	   
}
 

function xposition3(x, y,count) {
	
        new_wall = document.createElement("span");
	    new_wall.style.position="absolute";
	    new_wall.style.left =  x + 'px';
	    new_wall.style.top =  y + 'px';
	    new_wall.style.width="20px";
	    new_wall.style.height="20px";
	    new_wall.className="wall_son";
	    new_wall.setAttribute("id", "wall"+count);
	    document.getElementById("wall").appendChild(new_wall);
	    new_wall.style.backgroundImage = "url(bg.jpg)";
	   
}
 function e_position(x, y) {
	
        new_wall = document.createElement("span");
	    new_wall.style.position="absolute";
	    new_wall.style.left =  x + 'px';
	    new_wall.style.top =  y + 'px';
	    new_wall.style.width="20px";
	    new_wall.style.height="20px";
	    
	    new_wall.className="end_son";
	    new_wall.setAttribute("id", "end0");
	    document.getElementById("end").appendChild(new_wall);
	    new_wall.style.backgroundImage = "url(end.png)";
}

function ec_position(x, y) {
	
        new_wall = document.createElement("span");
	    new_wall.style.position="absolute";
	    new_wall.style.left =  x + 'px';
	    new_wall.style.top =  y + 'px';
	    new_wall.style.width="20px";
	    new_wall.style.height="20px";
	    
	    new_wall.className="end_son";
	    new_wall.setAttribute("id", "end1");
	    document.getElementById("end").appendChild(new_wall);
	    new_wall.style.backgroundImage = "url(bg.jpg)";
}

function ec1_position(x, y) {
	
        new_wall = document.createElement("span");
	    new_wall.style.position="absolute";
	    new_wall.style.left =  x + 'px';
	    new_wall.style.top =  y + 'px';
	    new_wall.style.width="20px";
	    new_wall.style.height="20px";
	    
	    new_wall.className="end_son";
	    new_wall.setAttribute("id", "end2");
	    document.getElementById("end").appendChild(new_wall);
	    new_wall.style.backgroundImage = "url(bg.jpg)";
}
 function s_position(x, y) {
	
        new_wall = document.createElement("span");
	    new_wall.style.position="absolute";
	    new_wall.style.left =  x + 'px';
	    new_wall.style.top =  y + 'px';
	    new_wall.style.width="20px";
	    new_wall.style.height="20px";
	    new_wall.setAttribute("id", "start0");
	    
	    new_wall.className="start_son";
	    document.getElementById("start").appendChild(new_wall);
	    new_wall.style.backgroundImage = "url(start.png)";
}
function sc_position(x, y) {
	
        new_wall = document.createElement("span");
	    new_wall.style.position="absolute";
	    new_wall.style.left =  x + 20 + 'px';
	    new_wall.style.top =  y  - 20 + 'px';
	    new_wall.style.width="20px";
	    new_wall.style.height="20px";
	    new_wall.setAttribute("id", "start1");
	    
	    new_wall.className="start_son";
	    document.getElementById("start").appendChild(new_wall);
	    
}

function display_fail() {
	document.getElementById('wall_father').className = 'maze_box';	
	document.getElementById('cheat').innerHTML = 'You lose!';
	game_overf();
}

function display_fail(n_count) {
	document.getElementById('wall' + n_count).style.backgroundColor = "red";	
	document.getElementById('cheat').innerHTML = 'You lose!';
	game_overf();
}

function display_success() {
	if (if_start == 1&&if_thro_wall == 1) {
		document.getElementById('cheat').innerHTML = 'You Win!';
		stopp();
	}	
    else {
    	display_cheat();
    }	
}

function display_start() {
	if_start = 1;
	document.getElementById('wall_father').className = 'maze_box';
	document.getElementById('cheat').innerHTML = "Start!";   
}
function display_cheat() {
	document.getElementById('cheat').innerHTML = "Don't cheat. you should start from the 'S' and move to the 'E' inside the maze!";
}

function game_overf() {
	document.getElementById('wall_father').className = 'maze_box';	
	stopp();
}
function stopp() {
	if_start = 0;
	if_thro_wall = 0;
}
   	
document.getElementById("past").onclick=function(){ window.location.reload()}
document.getElementById("next").onclick=function(){ window.location.reload()}
document.getElementById("re").onclick=function(){ window.location.reload()}	
}

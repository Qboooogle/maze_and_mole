/*HW6_game_mole of web2.0, qiangbo_14331229,group 11*/
/*the .js of the game_mole*/

  
/*to act the input command*/
window.onload=function(){
	var count = 0;
	var get_sc = 1;
	var get_sc1 = 1;
	var if_onclick = 1;
	var if_start = 1;
	/*set the time for the game*/
	document.getElementById("timego").value = 30;

	document.getElementById("start_game").onclick=function(){
	 if (if_start == 1) start();
	}
	document.getElementById("stop_game").onclick=function(){stopp();}
    
    /*the botton to start*/
	function start() {
		loop();
		if_start = 0;
		setInterval(
		function time_go() {
			document.getElementById("timego").value = document.getElementById("timego").value - 1;
			if(document.getElementById("timego").value == 0 )
				game_Over();
		},1000);
		
	}

    /*while click on the mole or hole, then will call this function*/
    function loop() {
			var x = 0;
		    var y  =0;
		    
		    var rand_sx = 100 * parseFloat((Math.random()).toFixed(1))%13;
			var rand_sy = 10 * parseFloat((Math.random()).toFixed(1));
			var rand_sx1 = 10 * parseFloat((Math.random()).toFixed(1));
			var rand_sy1 = 10 * parseFloat((Math.random()).toFixed(1));    	
		    var rand_sx2 = 10 * parseFloat((Math.random()).toFixed(1));
			var rand_sy2 = 10 * parseFloat((Math.random()).toFixed(1));
			var rand_sx3 = 10 * parseFloat((Math.random()).toFixed(1));
			var rand_sy3 = 10 * parseFloat((Math.random()).toFixed(1));
		    
		    for (var k = 0; k <10; k++) {
		    	y = 200 + 54 *k;
		    	for(var i = 0;i<13;i++) {
			    	x = 325 + 54 * i;
			    	count++;
			    	if (i == rand_sx1&&k==rand_sy1)
                        nomole_position(x, y,count);
			    	else if(i == rand_sx&&k==rand_sy) {
			    		mole_position(x, y,count);
			    		get_sc = count;
			    	} else if (i == rand_sx2&&k==rand_sy2) {
			    		mole_position(x, y,count);
			    		get_sc1 = count;
			    	}	else if (i == rand_sx3&&k==rand_sy3)  {
			    		nomole_position(x, y,count);
			    	}          
			        else   hole_position(x, y,count);      
		        }
		    }
		    document.getElementById('hole'+get_sc).onclick=function(){
				botton_mole();

				loop();				
			    }
            document.getElementById('hole'+get_sc1).onclick=function(){
				botton_mole();

				loop();				
			    }
            for (var m = 1; m <= count; m++) {
	            if(m != get_sc&&m !=get_sc1) {
					document.getElementById('hole'+m).onclick=function(){
						botton_nomole();
					    loop();
					}
				}
			}
		    
		}
	
	/*to creat the 1/2 mole box*/	
    function mole_position(x, y,count) {
	    var new_hole = document.createElement("span");
	    new_hole.style.position="absolute";
	    new_hole.style.left =  x + 'px';
	    new_hole.style.top =  y + 'px';	    
	    new_hole.className="mole_css";
	    new_hole.style.backgroundImage = "url(mole.png)";
	    new_hole.style.width="54px";
	    new_hole.style.height="54px"; 
	    new_hole.setAttribute("id", "hole"+count);
	    document.getElementById("mole_father").appendChild(new_hole); 

    }
    
    /*to creat the 1/2 no_mole box*/
    function nomole_position(x, y,count) {
	    var new_hole = document.createElement("span");
	    new_hole.style.position="absolute";
	    new_hole.style.left =  x + 'px';
	    new_hole.style.top =  y + 'px';	    
	    new_hole.className="nomole_css";
	    new_hole.setAttribute("id", "hole"+count);
	    new_hole.style.backgroundImage = "url(no_mole.png)";
	    new_hole.style.width="54px";
	    new_hole.style.height="54px"; 
	    document.getElementById("mole_father").appendChild(new_hole); 

    }
    
    /*to creat the hole box*/
    function hole_position(x, y,count) {
	    var new_hole = document.createElement("span");
	    new_hole.style.position="absolute";
	    new_hole.style.left =  x + 'px';
	    new_hole.style.top =  y + 'px';	    
	    new_hole.className="hole_css";
	    new_hole.setAttribute("id", "hole"+count);
	    new_hole.style.backgroundImage = "url(hole.png)";
	    new_hole.style.width="54px";
	    new_hole.style.height="54px"; 
	    document.getElementById("mole_father").appendChild(new_hole); 

    }
    
    /*when click on the mole , you get one sorce*/
	function botton_mole() {
		document.getElementById("score").value++;
		
	}
    
    /*when click on the mole , you get one sorce*/
    function botton_nomole(){
    	if (document.getElementById("score").value > 0)
		document.getElementById("score").value--;
	}
    
    /*to stop the game*/
    function stopp() {
    	if_start = 1;
    	document.getElementById("timego").value = 30;
    	document.getElementById("score").value = 0;
    	document.getElementById("over").value = "Game On";
        window.location.reload();
    }
    
    /*end and get the sorce*/
    function game_Over() {
    	document.getElementById("over").value = "Game Over!";
    	alert("Game Over! \nYou Sorce is :"+document.getElementById("score").value);
    	stopp();
    }

}

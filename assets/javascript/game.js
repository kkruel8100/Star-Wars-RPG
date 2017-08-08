

// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(function() {

//list of character objects
var yoda = {
	"name": "Yoda",
	"health points": 140,
    "attack points": 4,
    "counter attack points": 25,
    "faction": "Jedi Order"
}

var darthTalon = {
	"name": "Darth Talon",
	"health points": 120,
    "attack points": 8,
    "counter attack points": 10,
    "faction": "Lady of the Sith Order"
}
var darthMaul = {
	"name": "Darth Maul",
	"health points": 150,
    "attack points": 7,
    "counter attack points": 20,
    "faction": "Lord of the Sith Order"
}
var darthVader = {
	"name": "Darth Vader",
	"health points": 100,
    "attack points": 11,
    "counter attack points": 5,
    "faction": "Lord of the Sith Order"
}
//list variables
var attackPoints;
var characterHealth;
var defenderHealth;

var yourCharacter = false;
var defender = false;


	//Select Your Character.  Move others to enemies to attack. Empty original div.  Appended entire div to maintain classes, format, etc and clarifying the end of the append.
	$(".containImages").on("click", "img", function() {   
		alert("you clicked me");
		//Select Yoda as your character.
        if ( $(this).hasClass("yoda")) {   	
        	alert(yourCharacter);
        	alert("You clicked Yoda");
        	$("#yourChar").append($('<div id="yoda" class="col-xs-3 col-md-2 yoda"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
        	$("#enemies").append($('<div class="col-xs-3 col-md-2 darthTalon"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
     		$("#enemies").append($('<div class="col-xs-3 col-md-2 darthMaul"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
     		$("#enemies").append($('<div class="col-xs-3 col-md-2 darthVader"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
	   		$("#char").empty();
        	yourCharacter=true;
        }

		//Select Darth Talon as your character.  Move others to enemies to attack. Empty original div.		
        if ( $(this).hasClass("darthTalon")) { 
           	alert(yourCharacter);		
           	alert("You clicked Lady");   	
         	$("#enemies").append($('<div id="yoda" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
           	$("#yourChar").append($('<div id="darthTalon" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
           	$("#enemies").append($('<div id="darthMaul" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
	       	$("#enemies").append($('<div id="darthVader" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
		   	$("#char").empty();
           	yourCharacter=true;
        }

        //Select Darth Maul as your character.  Move others to enemies to attack. Empty original div.		
        if ( $(this).hasClass("darthMaul") && !yourCharacter) {   
 		   	$("#enemies").append($('<div id="yoda" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
          	$("#enemies").append($('<div id="darthTalon" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
         	$("#yourChar").append($('<div id="darthMaul" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
	       	$("#enemies").append($('<div id="darthVader" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
		   	$("#char").empty();
	       	yourCharacter=true;
        }

        //Select Darth Vader as your character.  Move others to enemies to attack. Empty original div.		
       	if ( $(this).hasClass("darthVader") && !yourCharacter) {   
 		   	$("#enemies").append($('<div id="yoda" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
           	$("#enemies").append($('<div id="darthTalon" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
           	$("#enemies").append($('<div id="darthMaul" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
	      	$("#yourChar").append($('<div id="darthVader" class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
		   	$("#char").empty(); 
       }

    });//end of your character pick

	//Select Defender
//	$("#enemies").on("click", "img", function() { 
	//	if (yourCharacter===true)  {
//		   if ( $(this).hasClass("yoda")) {   
//           	 	$("#defender p").append('<img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"/>');
//             	$("#enemies p").remove('<img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"/>');
 //          	 	defender=true;
//		   }
	//	}

//	});//end of defender pick

});//document ready
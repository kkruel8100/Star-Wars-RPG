

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
		
		//Select Yoda as your character.
        if ( $(this).hasClass("yoda")) {
          $("#yourChar").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
          $("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
          $("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
          $("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
          $("#char").empty();
          yourCharacter=true;
          console.log(yourCharacter);
        }

		//Select Darth Talon as your character.  Move others to enemies to attack. Empty original div.		
        if ( $(this).hasClass("darthTalon")) { 	
         	$("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
          $("#yourChar").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
          $("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
	       	$("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
		   	  $("#char").empty();
          yourCharacter=true;
          console.log(yourCharacter);
        }

        //Select Darth Maul as your character.  Move others to enemies to attack. Empty original div.		
        if ( $(this).hasClass("darthMaul") && !yourCharacter) {  
          $("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
          $("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
          $("#yourChar").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
          $("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
          $("#char").empty();
	       	yourCharacter=true;
          console.log(yourCharacter);
        }

        //Select Darth Vader as your character.  Move others to enemies to attack. Empty original div.		
       	if ( $(this).hasClass("darthVader") && !yourCharacter) {   
          $("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
          $("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
          $("#enemies").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
          $("#yourChar").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
          $("#char").empty();
          yourCharacter=true;
          console.log(yourCharacter); 
       }

    });//end of your character pick

	//Select Defender
	$("#enemies").on("click", "img", function() { 
		
		if ( $(this).hasClass("yoda") && yourCharacter && !defender) {   
      $("#defender").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
      $("#enemies").remove(".yoda");
      defender=true;
		  console.log(defender);
		}

    if ( $(this).hasClass("darthTalon") && yourCharacter && !defender) {   
      $("#defender").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));      
      $("#enemies").remove(".darthTalon");
      defender=true;
      console.log(defender);
    }

    if ( $(this).hasClass("darthMaul") && yourCharacter && !defender) {   
      $("#defender").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));     
      $("#enemies").remove("#darthMaul");
      defender=true;
      console.log(defender);
    }

    if ( $(this).hasClass("darthVader") && yourCharacter && !defender) {   
      $("#defender").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));      
      $("#enemies").remove("#darthVader");
      defender=true;
      console.log(defender);
    }
	});//end of defender pick

});//document ready


// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(function() {

//list of character objects
var yoda = {
  "health": 140,
  "attack": 4,
  "defender": 25
}

var darthTalon = {
	"health": 120,
  "attack": 8,
  "defender": 10
}

var darthMaul = {
  "health": 150,
  "attack": 7,
  "defender": 20
}

var darthVader = {
	"health": 100,
  "attack": 11,
  "defender": 5
}

//list variables
var attackCum;
var characterHealth;
var defenderHealth;
var ych;
var def;
var hp;
var attackPoints;
var defenderAttack;

var yourCharacter = false;
var defender = false;


	//Select Your Character.  Move others to enemies to attack. Empty original div.  Appended entire div to maintain classes, format, etc and clarifying the end of the append.
	$(".containImages").on("click", "img", function() {   
		
		//Select Yoda as your character.
        if ( $(this).hasClass("yoda")) {
          $("#yourChar p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
          $(".eneDT").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
          $(".eneDM").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
          $(".eneDV").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
          $("#char").hide();
          $("#title").hide();
          yourCharacter=true;
          ych="yoda";
          console.log(ych);
        }

		//Select Darth Talon as your character.  Move others to enemies to attack. Empty original div.		
        if ( $(this).hasClass("darthTalon")) { 	
         	$(".eneMY").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
          $("#yourChar p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
          $(".eneDM").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
	       	$(".eneDV").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
		   	  $("#char").hide();
          $("#title").hide();
          yourCharacter=true;
          ych="darthTalon";
          console.log(ych);
        }

        //Select Darth Maul as your character.  Move others to enemies to attack. Empty original div.		
        if ( $(this).hasClass("darthMaul") && !yourCharacter) {  
          $(".eneMY").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
          $(".eneDT").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
          $("#yourChar p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
          $(".eneDV").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
          $("#char").hide();
          $("#title").hide();
	       	yourCharacter=true;
          ych="darthMaul";
          console.log(ych);
        }

        //Select Darth Vader as your character.  Move others to enemies to attack. Empty original div.		
       	if ( $(this).hasClass("darthVader") && !yourCharacter) {   
          $(".eneMY").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
          $(".eneDT").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));
          $(".eneDM").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));
          $("#yourChar p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));
          $("#char").hide();
          $("#title").hide();
          yourCharacter=true;
          ych="darthVader";
          console.log(ych); 
       }

    });//end of your character pick

	//Select Defender
	$("#enemies").on("click", "img", function() { 
		
		if ( $(this).hasClass("yoda") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
      $(".eneMY").empty();
      defender=true;
      def="yoda";
		  console.log(def);
		}

    if ( $(this).hasClass("darthTalon") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));      
      $(".eneDT").empty();
      defender=true;
      def="darthTalon";
      console.log(def);
    }

    if ( $(this).hasClass("darthMaul") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));     
      $(".eneDM").empty();
      defender=true;
      def="darthMaul";
      console.log(def);
    }

    if ( $(this).hasClass("darthVader") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));      
      $(".eneDV").empty();
      defender=true;
      def="darthVader";
      console.log(def);
    }
	});//end of defender pick

  $("#defender p").addClass("defender");
  $("#yourChar p").addClass("attacker");

  //Attack
  $("#attack").on("click", function () {  
    //Loading defender stats
    console.log("Let's battle");
    if(def==="yoda") {
      hp=yoda.health;
      defenderAttack=yoda.defender;
      alert(hp);
      alert(defenderAttack);
    }
    if(def==="darthTalon") {
      hp=darthTalon.health;
      defenderAttack=darthTalon.defender;
      alert(hp);
      alert(defenderAttack);
    }
    if(def==="darthMaul") {
      hp=darthMaul.health;
      defenderAttack=darthMaul.defender;
      alert(hp);
      alert(defenderAttack);
    }
    if(def==="darthVader") {
      hp=darthVader.health;
      defenderAttack=darthVader.defender;
      alert(hp);
      alert(defenderAttack);
    }
    //loading your character stats
    if(ych==="yoda") {
      hp=yoda.health;
      attackPoints=yoda.attack;
      alert(hp);
      alert(attackPoints);
    }
    if(ych==="darthTalon") {
      hp=darthTalon.health;
      attackPoints=darthTalon.attack;
      alert(hp);
      alert(attackPoints);
    }
    if(ych==="darthMaul") {
      hp=darthMaul.health;
      attackPoints=darthMaul.attack;
      alert(hp);
      alert(attackPoints);
    }
    if(ych==="darthVader") {
      hp=darthVader.health;
      attackPoints=darthVader.attack;
      alert(hp);
      alert(attackPoints);
    }
  });//end of attack




  //jQuery to create reset button 
  $("#restart").on("click", function () {
    $("#char").show();
    $("#title").show();
    $("#yourChar p").empty();
    $(".eneMY").empty();
    $(".eneDT").empty();
    $(".eneDM").empty();
    $(".eneDV").empty(); 
    $("#defender p").empty();
    var defender=false;
    var yourCharacter=false;
    var hp;
    var attackPoints;
    var defenderAttack;
    console.log(defender);
    console.log(yourCharacter);
    console.log(hp);
    console.log(attackPoints);
    console.log(defenderAttack);
  });  

});//document ready
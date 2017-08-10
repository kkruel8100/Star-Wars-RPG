

// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(function() {

//characters with objects
var yoda = {
  "name": "Yoda",
  "health": 140,
  "attack": 4,
  "defender": 24,
  "faction": "Jedi Order"
}

var darthTalon = {
  "name": "Darth Talon",
  "health": 120,
  "attack": 8,
  "defender": 10,
  "faction": "Lady of the Sith Order"
}

var darthMaul = {
  "name": "Darth Maul",
  "health": 135,
  "attack": 5,
  "defender": 20,
  "faction": "Lord of the Sith Order"
}

var darthVader = {
  "name": "Darth Vader",
  "health": 100,
  "attack": 11,
  "defender": 13,
  "faction": "Lord of the Sith Order"
}

var yourCharacter = false; //Toggle for whether user has chosen character
var defender = false;  //Toggle for whether user has chosen defender
var numdef = 3; //Counter for number of defenders
var ychp = 0;  //User chosen character health
var defhp = 0;  //User chosen defender health
var attackPoints; //Holds character player attack points
var attackCum; //Holds cumulative player attack points
var defenderAttack; //Holds defender attack points
var name; //Captures name of defender

	//Select Your Character.  Move others to enemies to attack. Empty original div.  Appended entire div to maintain classes, format, etc and clarifying the end of the append.
	$(".containImages").on("click", "img", function() {   
		
		//Select Yoda as your character.
        if ( $(this).hasClass("yoda")) {
          //The div format below keeps the layout and class structure of original div
          $("#yourChar p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption caption2"><p>Health 140</p></div></div></div>'));
          $(".eneDT").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption caption2"><p>Health 120</p></div></div></div>'));
          $(".eneDM").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption caption2"><p>Health 135</p></div></div></div>'));
          $(".eneDV").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption caption2"><p>Health 100</p></div></div></div>'));
          $("#char").hide();
          $("#title").hide();
          yourCharacter=true;
          ychp=yoda.health;
          attackPoints=yoda.attack;
          attackCum=attackPoints;
        }

		//Select Darth Talon as your character.  Move others to enemies to attack. Empty original div.		
        if ( $(this).hasClass("darthTalon")) { 	
         	$(".eneMY").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption caption2"><p>Health 140</p></div></div></div>'));
          $("#yourChar p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption caption2"><p>Health 120</p></div></div></div>'));
          $(".eneDM").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption caption2"><p>Health 135</p></div></div></div>'));
	       	$(".eneDV").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption caption2"><p>Health 100</p></div></div></div>'));
		   	  $("#char").hide();
          $("#title").hide();
          yourCharacter=true;
          ychp=darthTalon.health;
          attackPoints=darthTalon.attack;
          attackCum=attackPoints;
        }

        //Select Darth Maul as your character.  Move others to enemies to attack. Empty original div.		
        if ( $(this).hasClass("darthMaul") && !yourCharacter) {  
          $(".eneMY").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption caption2"><p>Health 140</p></div></div></div>'));
          $(".eneDT").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption caption2"><p>Health 120</p></div></div></div>'));
          $("#yourChar p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption caption2"><p>Health 135</p></div></div></div>'));
          $(".eneDV").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption caption2"><p>Health 100</p></div></div></div>'));
          $("#char").hide();
          $("#title").hide();
	       	yourCharacter=true;
          ychp=darthMaul.health;
          attackPoints=darthMaul.attack;
          attackCum=attackPoints;
        }

        //Select Darth Vader as your character.  Move others to enemies to attack. Empty original div.		
       	if ( $(this).hasClass("darthVader") && !yourCharacter) {   
          $(".eneMY").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption caption2"><p>Health 140</p></div></div></div>'));
          $(".eneDT").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption caption2"><p>Health 120</p></div></div></div>'));
          $(".eneDM").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption caption2"><p>Health 135</p></div></div></div>'));
          $("#yourChar p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption caption2"><p>Health 100</p></div></div></div>'));
          $("#char").hide();
          $("#title").hide();
          yourCharacter=true;
          ychp=darthVader.health;
          attackPoints=darthVader.attack;
          attackCum=attackPoints;
       }

    });//end of your character pick

	//Select Defender
	$("#enemies").on("click", "img", function() { 
		
		if ( $(this).hasClass("yoda") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption caption2"><p>Health 140</p></div></div></div>'));
      $(".eneMY").empty();
      defender=true;
      defhp=yoda.health;
      defenderAttack=yoda.defender;
      name=yoda.name;
		}

    if ( $(this).hasClass("darthTalon") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption caption2"><p>Health 120</p></div></div></div>'));      
      $(".eneDT").empty();
      defender=true;
      defhp=darthTalon.health;
      defenderAttack=darthTalon.defender;
      name=darthTalon.name;
    }

    if ( $(this).hasClass("darthMaul") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption caption2"><p>Health 135</p></div></div></div>'));     
      $(".eneDM").empty();
      defender=true;
      defhp=darthMaul.health;
      defenderAttack=darthMaul.defender;
      name=darthMaul.name;
    }

    if ( $(this).hasClass("darthVader") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption caption1"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption caption2"><p>Health 100</p></div></div></div>'));      
      $(".eneDV").empty();
      defender=true;
      defhp=darthVader.health;
      defenderAttack=darthVader.defender;
      name=darthVader.name;
    }
	});//end of defender pick

  //Attack
  $("#attack").on("click", function () {  
 
    //If Character and defender chosen and both have health greater than 0
    if( ychp>0 && defhp>0 && defender===true && yourCharacter===true) {
     defhp-=attackCum;
     $(".stat1").html("You attacked " + name + " for " +  attackCum + " damage.");
     attackCum+=attackPoints;
     $("#defender .caption2 p").html("Health " + defhp);

      //If Defender health is greater than 0, defender attacks
      if (defhp>0) {
        ychp-=defenderAttack;
        $(".stat2").html(name + " attacked you for " + defenderAttack + " damage.");
        $("#yourChar .caption2 p").html("Health " + ychp);
     
        //If Character health is less than or equal to zero, game stops
        if (ychp<=0) {
          alert("The force is out of balance. May your spirit travel to a happier place.");
          yourCharacter=false;

        }
      }

      //If Defender health is less than or equal to zero, game stops and defender counter decreases
      else {
        defender=false;
        $("#defender p").empty();
        $(".stat1").empty();
        $(".stat2").empty();
        numdef--;      

          //If Zero defenders left, user wins
          if (numdef===0) {
            alert("You are the Supreme Master of the Galaxy but beware the child.");
          }
          //If defenders left, user chooses again
          else {
            alert("You defeated " + name + ". Choose wisely your next worthy adversary.");
          }
      }
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
    $(".stat1").empty();
    $(".stat2").empty();
    defender=false;
    yourCharacter=false;
    defhp=0;
    ychhp=0;
    attackPoints=0;
    defenderAttack=0;
    numdef=3;
    
  });  

});//document ready
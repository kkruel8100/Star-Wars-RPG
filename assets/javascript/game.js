

// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(function() {

//characters as object arrays

var yoda = {
  "name": "Yoda",
  "health": 140,
    "attack": 4,
    "defender": 25,
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
  "health": 150,
    "attack": 7,
    "defender": 20,
    "faction": "Lord of the Sith Order"
}
var darthVader = {
  "name": "Darth Vader",
  "health": 100,
    "attack": 11,
    "defender": 5,
    "faction": "Lord of the Sith Order"
}



 

var player; //User chosen character 
var playerHealth; //Holds player health
var attackPoints; //Holds cumulative player attack points

var defender; //User chosen defender
var defenderHealth; //Holds defender health
var defenderPoints; //Holds defender attack points

var playerChar = false; //Toggle for chosen player character
var defenderChar = false; //Toggle for chosen defender

var yourCharacter = false;
var defender = false;

var ychp = 0;
var defhp = 0;

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
          ychp=yoda.health;
          attackPoints=yoda.attack;
          alert(ychp);
          alert(attackPoints);
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
          ychp=darthTalon.health;
          attackPoints=darthTalon.attack;
          alert(ychp);
          alert(attackPoints);
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
          ychp=darthMaul.health;
          attackPoints=darthMaul.attack;
          alert(ychp);
          alert(attackPoints);
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
          ychp=darthVader.health;
          attackPoints=darthVader.attack;
          alert(ychp);
          alert(attackPoints); 
       }

    });//end of your character pick

	//Select Defender
	$("#enemies").on("click", "img", function() { 
		
		if ( $(this).hasClass("yoda") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Master Yoda</h5></div><img src="assets/images/yoda.jpg" class="yoda" alt="Yoda"><div class="caption"><p>Health 100</p></div></div></div>'));
      $(".eneMY").empty();
      defender=true;
      defhp=yoda.health;
      vdefenderAttack=yoda.defender;
      alert(defhp);
      alert(defenderAttack);
		}

    if ( $(this).hasClass("darthTalon") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Talon</h5></div><img src="assets/images/darth_talon.jpg" class="darthTalon" alt="Darth Talon"><div class="caption"><p>Health 140</p></div></div></div>'));      
      $(".eneDT").empty();
      defender=true;
      defhp=darthTalon.health;
      defenderAttack=darthTalon.defender;
      alert(defhp);
      alert(defenderAttack);
    }

    if ( $(this).hasClass("darthMaul") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Maul</h5></div><img src="assets/images/darth_maul.jpg" class="darthMaul" alt="Darth Maul"><div class="caption"><p>Health 150</p></div></div></div>'));     
      $(".eneDM").empty();
      defender=true;
      defhp=darthMaul.health;
      defenderAttack=darthMaul.defender;
      alert(defhp);
      alert(defenderAttack);
    }

    if ( $(this).hasClass("darthVader") && yourCharacter && !defender) {   
      $("#defender p").append($('<div class="col-xs-3 col-md-2"><div class="thumbnail"><div class="caption"><h5>Darth Vader</h5></div><img src="assets/images/darth_vader.jpg" class="darthVader" alt="Darth Vader"><div class="caption"><p>Health 120</p></div></div></div>'));      
      $(".eneDV").empty();
      defender=true;
      defhp=darthVader.health;
      defenderAttack=darthVader.defender;
      alert(defhp);
      alert(defenderAttack);
    }
	});//end of defender pick

  $("#defender p").addClass("defender");
  $("#yourChar p").addClass("attacker");
/*
  function charStats (l) {
    for (i=0; i<characters.length; i++) {
        if(yourCharacter===true);
        console.log(characters[i]);
        return l;
    }
  };

 */ 

  //Attack
  $("#attack").on("click", function () {  

    console.log("attack clicked");
  
  
    console.log(ychp);
    console.log(attackPoints);
    console.log(defhp);
    console.log(defenderAttack);
    // if( ychp>0 &&  defhp>0) {
     
    // }




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
    defender=false;
    yourCharacter=false;
    defhp=0;
    ychhp=0;
    attackPoints=0;
    defenderAttack=0;
    console.log(defender);
    console.log(yourCharacter);
    console.log(defhp);
    console.log(ychhp);
    console.log(attackPoints);
    console.log(defenderAttack);
  });  

});//document ready
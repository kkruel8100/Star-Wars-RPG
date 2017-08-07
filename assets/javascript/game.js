

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


	//Select Your Character.  Move others to enemies to attack. Empty original div.
	$(".containImages").on("click", "img", function() {   
		alert("you clicked me");
		//Select Yoda as your character.
        if ( $(this).hasClass("yoda")) {   
           $("#yourChar p").append('<img src="assets/images/yoda.jpg"/>');
           $("#enemies p").append('<img src="assets/images/darth_talon.jpg"/>' + '<img src="assets/images/darth_maul.jpg"/>' + '<img src="assets/images/darth_vader.jpg"/>')
           $(".containImages").empty();
        }

		//Select Darth Talon as your character.  Move others to enemies to attack. Empty original div.		
        if ( $(this).hasClass("darthTalon")) {   
            $("#yourChar p").append('<img src="assets/images/darth_talon.jpg"/>');
            $("#enemies p").append('<img src="assets/images/yoda.jpg"/>' + '<img src="assets/images/darth_maul.jpg"/>' + '<img src="assets/images/darth_vader.jpg"/>')
            $(".containImages").empty();
        }

        //Select Darth Maul as your character.  Move others to enemies to attack. Empty original div.		
        if ( $(this).hasClass("darthMaul")) {   
            $("#yourChar p").append('<img src="assets/images/darth_maul.jpg"/>');
            $("#enemies p").append('<img src="assets/images/yoda.jpg"/>' + '<img src="assets/images/darth_talon.jpg"/>' + '<img src="assets/images/darth_vader.jpg"/>')
            $(".containImages").empty();
        }

        //Select Darth Vader as your character.  Move others to enemies to attack. Empty original div.		
        if ( $(this).hasClass("darthVader")) {   
            $("#yourChar p").append('<img src="assets/images/darth_vader.jpg"/>');
            $("#enemies p").append('<img src="assets/images/yoda.jpg"/>' + '<img src="assets/images/darth_talon.jpg"/>' + '<img src="assets/images/darth_maul.jpg"/>')
            $(".containImages").empty();
        }

    });//end of your character pick






});//document ready
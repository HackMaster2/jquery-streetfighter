/*global*/
$("button").click(function(){ 
    var user = $("#user").val();
    var pass = $("#pass").val();
    if(user === "King Dashawn Harrell" && pass === "royalhighmoon"){
        $("#pack").html("The Royal Moon Kingdom");
        $("#answer").html("Nice to have you back King Dashawn");
        //$("body").css("background-color" , "blue");
         $("body").css("color" , "blue");
        $("#answer").css("font-size" , "75px");
    }else if(user === "Beta Alvin Anderson" && pass === "bluemoon"){
        $("h1").html("The Royal Moon Kingdom");
        $("#answer").html("Great you're logged in Beta Anderson");
        $("body").css("color" , "blue");
        //$("body").css("background-color" , "black");
    }else if(user === "Queen Victoria Windsor" && pass === "bloodwarmoon"){
        $("h1").html("The Warrior Kingdom");
        $("#answer").html("Nice to have you back Queen Victoria");
        $("body").css("color" , "red");
        //$("body").css("background-color" , "red");
    }else if(user === "King Alexander Darrington" && pass === "royalgoldmoon"){
        $("h1").html("The Royal Gold Kingdom");
        $("#answer").html("Nice to have you back King Alexander")
        //$("body").css("background-color" , "#FFD700");
        $("body").css("color" , "gold");
    }else if(user === "Queen Elizabeth Darrington" && pass === "queengoldmoon"){
        $("h1").html("The Royal Gold Kingdom");
        $("#answer").html("Nice to have you back Queen Elizabeth")
        //$("body").css("background-color" , "#FFD700");
        $("body").css("color" , "gold");
    }else if(user === "King Markus Windsor" && pass === "darkwarmoon"){
        $("h1").html("The Eclispe Kingdom");
        //$("body").css("background-color", "white");
        $("body").css("color" , "black");
        $("#answer").html("Nice to have you back King Markus")
    }else {
    $("#answer").html("Invaild Login Information");
    $("body").css("color" , "green");
    //$("body").css("background-color" , "#B22222"b);
}
});

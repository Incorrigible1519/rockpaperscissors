let computer_score = 0;
let user_score = 0;
let image1 = document.getElementsByClassName("image-1");
let image2 = document.getElementsByClassName("image-2");
let image3 = document.getElementsByClassName("image-3");

function computer_choice() {
    let computer_choice = ['rock', 'paper', 'scissors'];
    let value = Math.floor((Math.random() * 3));
    console.log(value);
    return computer_choice[value];
}

function result(winner) {
    if (winner == 'user') {
        $(".Result").text("Hurrah!!! You wins").css("color", "green");
    } else if (winner == 'computer') {
        $(".Result").text("Oops!!! Computer wins").css("color", "red");
    } else {
        $(".Result").text("Game ends in DRAWW!!!").css("color", "white");
    }
}

function user(user_value) {
    let computer_value = computer_choice();
    switch (user_value + computer_value) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            console.log("You wins");
            result('user');
            user_score += 1;
            $(".user_box>h2").text(user_score);
            break;
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
            console.log("computer wins");
            computer_score += 1;
            result('computer');
            $(".comp_box>h2").text(computer_score);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("Draww");
            result('draw');
            break;
    }
}

function user_choice() {
    $(".image-1").click(function() {
        user('paper');
    });
    $(".image-2").click(function() {
        user('rock');
    });
    $(".image-3").click(function() {
        user('scissors');
    });
}
user_choice();

function reset() {
    user_score = 0;
    computer_score = 0;
    $(".user_box>h2").text(user_score);
    $(".comp_box>h2").text(computer_score);
};
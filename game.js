var canvas = null;
var context= null;
var height = null;
var width  = null;

var ball0  = null;
var board1 = null;
var board2 = null;
var board_length = null;

var skill_time = null;
var skill_using = null;
var skill_available = null;
var skill_interval = null;

var score1 = null;
var score2 = null;

var game_over = null;
var interval = null;

window.onload = function() {
    canvas = document.getElementById("playground");
    width  = canvas.width = canvas.clientWidth;
    height = canvas.height = canvas.clientHeight;

    context = canvas.getContext("2d");
    context.fillStyle   = ball_color;
    context.strokeStyle = board_color;
    context.lineWidth   = board_width;

    board_length = height * (2 / 10);

    set_icon();


    document.body.addEventListener("keydown", function(event) {
        console.log(event.keyCode);
        switch (event.keyCode) {
            case 87:
                board1.setUp(true);
                break;
            case 83:
                board1.setDown(true);
                break;
            case 79:
                board2.setUp(true);
                break;
            case 76:
                board2.setDown(true);
                break;
            default:
                break;
        }
    });

    document.body.addEventListener("keyup", function(event) {
        // console.log(event.keyCode);
        switch (event.keyCode) {
            case 87:
                board1.setUp(false);
                break;
            case 83:
                board1.setDown(false);
                break;
            case 79:
                board2.setUp(false);
                break;
            case 76:
                board2.setDown(false);
                break;
            case 32:
                if (game_over)
                    start();
                break;
            case 49:
                use_skill(0, 0);
                break;
            case 50:
                use_skill(0, 1);
                break;
            case 51:
                use_skill(0, 2);
                break;
            case 52:
                use_skill(0, 3);
                break;
            case 55:
                use_skill(1, 0);
                break;
            case 56:
                use_skill(1, 1);
                break;
            case 57:
                use_skill(1, 2);
                break;
            case 48:
                use_skill(1, 3);
                break;
            default:
                break;
        }
    });

    init();
}

function use_skill(player, skill) {
    if (skill_available[player][skill] && !skill_using[player^1][skill]) {
        skill_available[player][skill] = false;
        skill_using[player][skill] = true;
        skill_interval[player][skill] = setInterval(function() {
            console.log(skill_time[player][skill]);
            if (--skill_time[player][skill] == 0) {
                skill_using[player][skill] = false;
                document.getElementById("skill" + (player + 1) + skill).innerHTML = "X";
                skills[skill].func();
                clearInterval(skill_interval[player][skill]);
            }
        }, 1000);
    }
};

function set_timer(t) {
    var timer  = document.getElementById("timer");
    var minute = ("0" + Math.floor(t / 60)).slice(-2);
    var second = ("0" + (t % 60)).slice(-2);
    timer.innerHTML = (minute + ":" + second);
};

function set_icon() {
    for (var i = 0; i < 4; i++) {
        var icon = document.getElementById("skill1" + i);
        icon.style.backgroundImage = 'url("' + skills[i].icon + '")';
        var icon = document.getElementById("skill2" + i);
        icon.style.backgroundImage = 'url("' + skills[i].icon + '")';
    }
}

function init() {
    ball0  = ball.create(width / 2, height / 2, ball_radius, ball_speed, (Math.random() * 2 - 1) * Math.PI, ball_func);
    board1 = board.create(board_margin, height / 2, board_length, board_speed);
    board2 = board.create(width - board_margin, height / 2, board_length, board_speed);
    score1 = 0;
    score2 = 0;
    document.getElementById("score1").innerHTML = score1;
    document.getElementById("score2").innerHTML = score2;
    for (var i = 0; i < 4; i++) {
        document.getElementById("skill1" + i).innerHTML = "";
        document.getElementById("skill2" + i).innerHTML = "";
    }
    skill_time = [[5, 5, 5, 5, 5], [5, 5, 5, 5, 5]];
    skill_using = [Array(skills.length).fill(false), Array(skills.length).fill(false)];
    skill_available = [Array(skills.length).fill(true), Array(skills.length).fill(true)];
    skill_interval = [Array(skills.length).fill(null), Array(skills.length).fill(null)];
    game_over = true;
    set_timer(game_time);
    draw();
};

function start() {
    init();
    var time = game_time;
    interval = setInterval(function() {
        set_timer(--time);
        if (time == 0) {
            game_over = true;
            clearInterval(interval);
        }
    }, 1000);
    game_over = false;
    game();
};

function game() {
    if (!game_over) {
        draw();
        for (var i = 0; i < skills.length; i++) {
            if (skill_using[0][i]) {
                skills[i].func(0);
            }
            if (skill_using[1][i]) {
                skills[i].func(1);
            }
        }

        requestAnimationFrame(game);
    }
};

function draw() {
    context.clearRect(0, 0, width, height);

    ball0.check();
    ball0.update();
    board1.update();
    board2.update();

    ball0.draw();
    board1.draw();
    board2.draw();
};


var height = null;
var width  = null;
var ball0  = null;
var board1 = null;
var board2 = null;

var skill_time = null;
var skill_using = null;
var skill_available = null;
var skill_interval = null;

window.onload = function() {
    var canvas = document.getElementById("playground");
    width = canvas.width = canvas.clientWidth;
    height = canvas.height = canvas.clientHeight;

    var context = canvas.getContext("2d");
    context.fillStyle   = ball_color;
    context.strokeStyle = board_color;
    context.lineWidth   = board_width;

    var board_length = height * (2 / 10),
        board_minpos = 0,
        board_maxpos = height;

    var score1 = 0;
    var score2 = 0;
    var game_over = true;

    var interval = null;


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
            case 56:
                use_skill(1, 0);
                break;
            case 57:
                use_skill(1, 1);
                break;
            case 48:
                use_skill(1, 2);
                break;
            default:
                break;
        }
    });

    function use_skill(player, skill) {
        if (skill_available[player][skill] && !skill_using[player^1][skill]) {
            skill_available[player][skill] = false;
            skill_using[player][skill] = true;
            skill_interval[player][skill] = setInterval(function() {
                console.log(skill_time[player][skill]);
                if (--skill_time[player][skill] < 0) {
                    skill_using[player][skill] = false;
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

    function init() {
        ball0  = ball.create(width / 2, height / 2, ball_radius, ball_speed, Math.random() * 180, ball_func);
        board1 = board.create(board_margin, height / 2, board_length, board_speed, board_minpos, board_maxpos);
        board2 = board.create(width - board_margin, height / 2, board_length, board_speed, board_minpos, board_maxpos);
        score1 = 0;
        score2 = 0;
        document.getElementById("score1").innerHTML = score1;
        document.getElementById("score2").innerHTML = score2;
        skill_time = new Array(2).fill([3, 3, 3]);
        skill_using = [new Array(skill.length).fill(false), new Array(skill.length).fill(false)];
        skill_available = [new Array(skill.length).fill(true), new Array(skill.length).fill(true)];
        skill_interval = [new Array(skill.length).fill(null), new Array(skill.length).fill(null)];
        game_over = true;
        set_timer(game_time);
        draw();
    };

    function start() {
        init();
        var time = game_time;
        interval = setInterval(function() {
            set_timer(--time);
            if (time <= 0) {
                stop();
            }
        }, 1000);
        game_over = false;
        game();
    };

    function draw() {
        context.clearRect(0, 0, width, height);
        ball0.draw(context);
        board1.draw(context);
        board2.draw(context);
    };

    function game() {
        if (!game_over) {
            for (var i = 0; i < skill.length; i++) {
                skill[i](i);
            }
            result = ball0.check();
            if (result == 1)
                document.getElementById("score1").innerHTML = ++score1;
            else if (result == -1)
                document.getElementById("score2").innerHTML = ++score2;

            ball0.update();
            board1.update();
            board2.update();

            draw();

            requestAnimationFrame(game);
        }
    };

    function stop() {
        clearInterval(interval);
        game_over = true;
    };

    init();
}

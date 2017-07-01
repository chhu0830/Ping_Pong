window.onload = function() {
    var canvas = document.getElementById("playground"),
        width = canvas.width = canvas.clientWidth,
        height = canvas.height = canvas.clientHeight;
    var min_pos = 0, max_pos = height;
    var context = canvas.getContext("2d");
    context.fillStyle = "#0000FF";
    context.strokeStyle = "#FF0000";
    context.lineWidth = 10;

    var ball_speed = 5;
    var board_speed = 10;
    var board_length = height * (2 / 10);
    var game_time = 10;

    var timer  = document.getElementById("timer");
    var score1 = 0;
    var score2 = 0;

    var ball0  = null;
    var board1 = null;
    var board2 = null;
    var interval = null;
    var game_over = true;

    function init() {
        ball0  = ball.create(width / 2, height / 2, 20, ball_speed, Math.random() * 180);
        board1 = board.create(10, height / 2, board_length, board_speed, min_pos, max_pos);
        board2 = board.create(width - 10, height / 2, board_length, board_speed, min_pos, max_pos);
        timer.innerHTML = ("0" + Math.floor(game_time / 60)).slice(-2) + ":" + ("0" + game_time % 60).slice(-2);
        draw();
    }

    function start() {
        init();
        var time = game_time - 1;
        interval = setInterval(function() {
            timer.innerHTML = ("0" + Math.floor(time / 60)).slice(-2) + ":" + ("0" + time % 60).slice(-2);
            console.log(time--);
            if (time < 0) {
                time = game_time;
                game_over = true;
            }
        }, 1000);
        game_over = false;
        game();
    }

    document.body.addEventListener("keydown", function(event) {
        console.log(event.keyCode);
        switch (event.keyCode) {
            case 87:
                board1.setUp(true);
                break;
            case 83:
                board1.setDown(true);
                break;
            case 38:
                board2.setUp(true);
                break;
            case 40:
                board2.setDown(true);
                break;
            default:
                break;
        }
    });

    document.body.addEventListener("keyup", function(event) {
        console.log(event.keyCode);
        switch (event.keyCode) {
            case 87:
                board1.setUp(false);
                break;
            case 83:
                board1.setDown(false);
                break;
            case 38:
                board2.setUp(false);
                break;
            case 40:
                board2.setDown(false);
                break;
            case 32:
                if (game_over)
                    start();
                break;
            default:
                break;
        }
    });

    function draw() {
        context.clearRect(0, 0, width, height);
        ball0.draw(context);
        board1.draw(context);
        board2.draw(context);
    }

    function game() {
        if (game_over) {
            stop();
        }
        else {
            ball0.bounce(board1);
            ball0.bounce(board2);

            result = ball0.check(context);
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
    }

    function stop() {
        clearInterval(interval);
    }

    init();
}

window.onload = function() {
    var canvas = document.getElementById("playground"),
        width = canvas.width = canvas.clientWidth,
        height = canvas.height = canvas.clientHeight;

    var context = canvas.getContext("2d");
    context.fillStyle = "#0000FF";
    context.strokeStyle = "#FF0000";
    context.lineWidth = 10;

    var ball_speed = 5;
    var board_speed = 10;
    var board_length = height * (2 / 10);
    var min_pos = 0, max_pos = height;

    var ball0  = ball.create(width / 2, height / 2, 20, ball_speed, Math.random() * 180);
    var board1 = board.create(10, height / 2, board_length, board_speed, min_pos, max_pos);
    var board2 = board.create(width - 10, height / 2, board_length, board_speed, min_pos, max_pos);


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
            default:
                break;
        }
    });

    function game() {
        ball0.check(context);
        ball0.update();
        board1.update();
        board2.update();

        context.clearRect(0, 0, width, height);
        ball0.draw(context);
        board1.draw(context);
        board2.draw(context);

        requestAnimationFrame(game);
    }

    game();
}

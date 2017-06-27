window.onload = function() {
    var canvas = document.getElementById("playground"),
        width = canvas.width = canvas.clientWidth,
        height = canvas.height = canvas.clientHeight;

    var context = canvas.getContext("2d");

    var ball0  = ball.create(width / 2, height / 2, 20);
    var board1 = board.create(10, height / 2, height * (2 / 10));
    var board2 = board.create(width - 10, height / 2, height * (2 / 10));


    context.fillStyle = "#0000FF";
    context.strokeStyle = "#FF0000";
    context.lineWidth = 10;

    ball0.draw(context);
    board1.draw(context);
    board2.draw(context);
}

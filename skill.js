function speedUp(player) {
    switch (player) {
        case 0:
            if (ball0.position.getX() > width / 2) {
                ball0.velocity.setLength(ball_speed * 4);
            }
            else {
                ball0.velocity.setLength(ball_speed / 2);
            }
            break;
        case 1:
            if (ball0.position.getX() < width / 2) {
                ball0.velocity.setLength(ball_speed * 4);
            }
            else {
                ball0.velocity.setLength(ball_speed / 2);
            }
            break;
        default:
            ball0.velocity.setLength(ball_speed);
            break;
    }
}

function disappear(player) {
    switch(player) {
        case 0:
            if (ball0.position.getX() > width / 4 && ball0.position.getX() < width * 3 / 4) {
                if (ball0.velocity.getX() > 0)
                    ball0.visible = false;
                else
                    ball0.visible = true;
            }
            else {
                ball0.visible = true;
            }
            break;
        case 1:
            if (ball0.position.getX() > width / 4 && ball0.position.getX() < width * 3 / 4) {
                if (ball0.velocity.getX() < 0)
                    ball0.visible = false;
                else
                    ball0.visible = true;
            }
            else {
                ball0.visible = true;
            }
            break;
        default:
            ball0.visible = true;
            break;
    }
}

function bigBoard(player) {
    switch (player) {
        case 0:
            board1.length = board_length * 2;
            break;
        case 1:
            board2.length = board_length * 2;
            break;
        default:
            board1.length = board_length;
            board2.length = board_length;
            break;
    }
}

function variantBall(player) {
    switch (player) {
        case 0:
            if (ball0.position.getX() < width / 2) {
                ball0.radius = ball_radius * 5;
            }
            else {
                ball0.radius = ball_radius / 5;
            }
            break;
        case 1:
            if (ball0.position.getX() > width / 2) {
                ball0.radius = ball_radius * 5;
            }
            else {
                ball0.radius = ball_radius / 5;
            }
            break;
        default:
            ball0.radius = ball_radius;
            break;
    }
}

var balls = [];
function multiBall(player) {
    switch (player) {
        case 0:
        case 1:
            if (balls.length == 0) {
                ball0.radius = ball_radius / 2;
                ball0.speed = ball_speed * 2;
                for (var j = 0; j < 10; j++) {
                    balls.push(ball.create(ball0.position.getX(), ball0.position.getY(), ball_radius / 2, ball_speed * 2, (Math.random() * 2 - 1) * Math.PI, ball_func));
                }
            }
            else {
                for (var j = 0; j < balls.length; j++) {
                    balls[j].draw();
                    balls[j].check();
                    balls[j].update();
                }
            }
            break;
        default:
            ball0.radius = ball_radius;
            ball0.speed = ball_speed;
            balls = [];
            break;
    }
}

var speedUp = {
    icon: "./images/speedUp.png",
    func: function(player) {
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
}

var disappear = {
    icon: "./images/disappear.png",
    func: function(player) {
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
}

var bigBoard = {
    icon: "./images/bigBoard.png",
    func: function(player) {
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
}

var variantBall = {
    icon: "./images/variantBall.png",
    func: function variantBall(player) {
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
}

var multiBall = {
    balls: [],
    icon: "./images/multiBall.png",
    func: function(player) {
        switch (player) {
            case 0:
            case 1:
                if (this.balls.length == 0) {
                    ball0.radius = ball_radius / 2;
                    ball0.velocity.setLength(ball_speed * 2);
                    for (var j = 0; j < 10; j++) {
                        this.balls.push(ball.create(ball0.position.getX(), ball0.position.getY(), ball_radius / 2, ball_speed * 2, (Math.random() * 2 - 1) * Math.PI, ball_func));
                    }
                }
                else {
                    for (var j = 0; j < this.balls.length; j++) {
                        this.balls[j].draw();
                        this.balls[j].check();
                        this.balls[j].update();
                    }
                }
                break;
            default:
                ball0.radius = ball_radius;
                ball0.velocity.setLength(ball_speed);
                this.balls = [];
                break;
        }
    }
}

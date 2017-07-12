var speedUp = {
    icon: "./images/speedUp.png",
    time: 5,
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
    time: 5,
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
    time: 5,
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
    time: 5,
    func: function(player) {
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

var demo = {
    icon: "./images/demo.png",
    time: 5,
    func: function(player) {
        switch (player) {
            case 0:
                break;
            case 1:
                break;
            default:
                break;
        }
    }
}

var multiBall = {
    balls: [],
    icon: "./images/multiBall.png",
    time: 5,
    func: function(player) {
        switch (player) {
            case 0:
            case 1:
                if (this.balls.length == 0) {
                    ball0.radius = ball_radius / 4;
                    ball0.velocity.setLength(ball_speed * 2);
                    for (var j = 0; j < 10; j++) {
                        this.balls.push(ball.create(ball0.position.getX(), ball0.position.getY(), ball_radius / 4, ball_speed * 2, Math.random() * Math.PI * 2, ball_color, ball_func));
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

var colorBall = {
    icon: "./images/color.png",
    time: 10,
    r: 0,
    g: 0,
    b: 0,
    func: function(player) {
        switch (player) {
            case 0:
            case 1:
                ball0.color = ["#FF0000", "#00FF00", "#0000FF"].sort(function() { return Math.random() < 0.5; })[0];
                break;
            default:
                ball0.color = ball_color;
                break;
        }
    }
}

var straightBall = {
    icon: "./images/straightBall.png",
    time: 0,
    func: function(player) {
        switch (player) {
            case 0:
                ball0.direction.setAngle(0);
                break;
            case 1:
                ball0.direction.setAngle(Math.PI);
                break;
            default:
                break;
        }
    }
}

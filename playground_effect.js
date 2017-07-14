var nothing = {
    init: function() {
    },
    func: function() {
    },
    over: function() {
    }
}

var ballPass = {
    init: function() {
        ball_pass = true;
    },
    func: function() {
        if (ball0.overTop()) {
            ball0.position.setY(height);
        }
        else if (ball0.overBottom()) {
            ball0.position.setY(0);
        }
    },
    over: function() {
        ball_pass = false;
    }
}

var multiBall = {
    balls: [],
    init: function() {
        this.balls = [];
        ball0.radius = ball_radius;
        ball0.speed.setLength(ball_speed / 2);
        for (var j = 0; j < 5; j++) {
            this.balls.push(ball.create(ball0.position.getX(), ball0.position.getY(), ball0.radius, ball0.speed.getLength(), Math.random() * Math.PI * 2, ball_color, ball_func));
        }
    },
    func: function() {
        for (var j = 0; j < this.balls.length; j++) {
            this.balls[j].check();
            this.balls[j].update();
            this.balls[j].draw();
        }
    },
    over: function() {
    }
}

var moveSin = {
    init: function() {
        ball0.func = sin;
    },
    func: function() {
    },
    over: function() {
        ball0.func = ball_func;
    }
}

var transport = {
    balls: [],
    init: function() {
    },
    func: function() {
        this.draw();
        var x = ball0.position.getX();
        var y = ball0.position.getY();
        if (y >= height / 10 && y <= height / 10 * 3 && Math.abs(x - width / 10 * 2) < ball0.radius) {
            ball0.position.setX(width / 10 * 8);
            ball0.position.setY(height / 10 * 7 + (y - height / 10));
            ball0.update();
        }
        if (y >= height / 10 * 7 && y <= height / 10 * 9 && Math.abs(x - width / 10 * 8) < ball0.radius) {
            ball0.position.setX(width / 10 * 2);
            ball0.position.setY(height / 10 + (y - height / 10 * 7));
            ball0.update();
        }
    },
    over: function() {
    },
    draw: function() {
        context.strokeStyle = "#000000";
        context.beginPath();
        context.moveTo(width / 10 * 2, height / 10);
        context.lineTo(width / 10 * 2, height / 10 * 3);
        context.moveTo(width / 10 * 8, height / 10 * 9);
        context.lineTo(width / 10 * 8, height / 10 * 7);
        context.stroke();
    }
}

var random = {
    init: function() {
    },
    func: function() {
        this.draw();
        var x = ball0.position.getX();
        var y = ball0.position.getY();
        if (y >= height / 10 * 4 && y <= height / 10 * 6 && Math.abs(x - width / 2) < ball0.radius) {
            ball0.position.setX(Math.floor(Math.random() * width));
            ball0.position.setY(Math.floor(Math.random() * height));
            ball0.update();
        }
    },
    over: function() {
    },
    draw: function() {
        context.strokeStyle = "#000000";
        context.beginPath();
        context.moveTo(width / 2, height / 10 * 4);
        context.lineTo(width / 2, height / 10 * 6);
        context.stroke();
    }
}

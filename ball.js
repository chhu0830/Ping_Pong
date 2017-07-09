var ball = {
    position: null,
    radius: 0,
    velocity: null,
    direction: null,
    func: null,
    visible: true,
    t: 0,
    dx: 0.001,

    create: function(x, y, radius, speed, direction, func) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.radius = radius;
        obj.velocity = vector.create(x, y);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        obj.direction = vector.create(x, y);
        obj.direction.setAngle(direction);
        obj.func = func;
        return obj
    },

    draw: function() {
        if (this.visible) {
            context.beginPath();
            context.arc(this.position.getX(), this.position.getY(), this.radius, 0, Math.PI*2);
            context.fill();
        }
    },

    update: function() {
        this.position.setX(this.position.getX() + this.velocity.getX());
        this.position.setY(this.position.getY() + this.velocity.getY());

        angle = Math.atan2(this.func(this.t + this.dx) - this.func(this.t), this.dx);
        this.velocity.setAngle(this.direction.getAngle() + angle);
        this.t++;
    },

    check: function() {
        if (this.position.getY() + this.velocity.getY() - this.radius <= 0) {
            this.position.setY(0 + this.velocity.getY() + this.radius);
            this.reverse("Y");
        }
        else if (this.position.getY() + this.velocity.getY() + this.radius >= height) {
            this.position.setY(height + this.velocity.getY() - this.radius);
            this.reverse("Y");
        }

        if (this.position.getY() >= board1.min && this.position.getY() <= board1.max && this.position.getX() + this.velocity.getX() - board1.position.getX() < this.radius) {
            this.position.setX(board1.position.getX() + this.velocity.getX() + this.radius);
            this.reverse("X");
        }
        else if (this.position.getY() >= board2.min && this.position.getY() <= board2.max && board2.position.getX() - (this.position.getX() + this.velocity.getX()) < this.radius) {
            this.position.setX(board2.position.getX() + this.velocity.getX() - this.radius);
            this.reverse("X");
        }
        else {
            if (this.position.getX() + this.velocity.getX() - this.radius <= 0) {
                this.position.setX(0 + this.velocity.getX() + this.radius);
                this.reverse("X")
                document.getElementById("score1").innerHTML = ++score1;
            }
            else if (this.position.getX() + this.velocity.getX() + this.radius >= width) {
                this.position.setX(width + this.velocity.getX() - this.radius);
                this.reverse("X")
                document.getElementById("score2").innerHTML = ++score2;
            }
        }
        return 0;
    },

    reverse: function(axis) {
        switch (axis) {
            case "X":
                this.direction.setX(-this.direction.getX());
                this.velocity.setX(-this.velocity.getX());
                break;
            case "Y":
                this.direction.setY(-this.direction.getY());
                this.velocity.setY(-this.velocity.getY());
                break;
            default:
                break;
        }
    }
}


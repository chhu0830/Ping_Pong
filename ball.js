var ball = {
    position: null,
    radius: 0,
    velocity: null,
    route: null,
    func: null,
    t: 0,
    dx: 0.001,

    create: function(x, y, radius, speed, direction, func) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.radius = radius;
        obj.velocity = vector.create(x, y);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        obj.route = vector.create(x, y);
        obj.route.setLength(speed);
        obj.route.setAngle(direction);
        obj.func = func;
        return obj
    },

    draw: function(context) {
        context.beginPath();
        context.arc(this.position.getX(), this.position.getY(), this.radius, 0, Math.PI*2);
        context.fill();
    },

    update: function() {
        angle = Math.atan2(this.func(this.t + this.dx) - this.func(this.t), this.dx);
        this.route.setAngle(this.velocity.getAngle() + angle);

        this.position.setX(this.position.getX() + this.route.getX());
        this.position.setY(this.position.getY() + this.route.getY());
        this.t++;
    },

    check: function(context) {
        width = context.canvas.width;
        height = context.canvas.height;
        if (this.position.getX() - this.radius <= 0) {
            this.reverse("X")
            return -1;
        }
        if (this.position.getX() + this.radius >= width) {
            this.reverse("X")
            return 1;
        }
        if (this.position.getY() - this.radius <= 0 || this.position.getY() + this.radius >= height)
            this.reverse("Y")
        return 0;
    },

    bounce: function(board) {
        if (this.position.getY() >= board.min &&
            this.position.getY() <= board.max &&
            Math.abs(this.position.getX() - board.position.getX()) < this.radius) {
            this.reverse("X");
        }
    },

    reverse: function(axis) {
        switch (axis) {
            case "X":
                this.velocity.setX(-this.velocity.getX());
                break;
            case "Y":
                this.velocity.setY(-this.velocity.getY());
                break;
            default:
                break;
        }
    }
}


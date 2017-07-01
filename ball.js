var ball = {
    position: null,
    radius: 0,
    velocity: null,

    create: function(x, y, radius, speed, direction) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.radius = radius;
        obj.velocity = vector.create(x, y);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        return obj
    },

    draw: function(context) {
        context.beginPath();
        context.arc(this.position.getX(), this.position.getY(), this.radius, 0, Math.PI*2);
        context.fill();
        context.save();
    },

    update: function() {
        this.position.setX(this.position.getX() + this.velocity.getX());
        this.position.setY(this.position.getY() + this.velocity.getY());
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
        if (this.position.getY() >= board.min && this.position.getY() <= board.max && Math.abs(this.position.getX() - board.position.getX()) < this.radius) {
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


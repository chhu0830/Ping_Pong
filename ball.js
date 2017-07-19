var ball = {
    position: null,
    radius: 0,
    speed: null,
    direction: null,
    color: "#000000",
    func: null,
    visible: true,
    img: ball_img,
    img_element: null,
    t: 0,
    dx: 0.001,

    create: function(x, y, radius, speed, direction, color, func) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.radius = radius;
        obj.speed = vector.create(x, y);
        obj.speed.setLength(speed);
        obj.speed.setAngle(direction);
        obj.direction = vector.create(x, y);
        obj.direction.setAngle(direction);
        obj.color = color;
        obj.func = func;
        obj.img_element = document.createElement("img");
        return obj
    },

    draw: function() {
        if (this.visible) {
            if (this.img == null) {
                context.fillStyle = this.color;
                context.beginPath();
                context.arc(this.position.getX(), this.position.getY(), this.radius, 0, Math.PI*2);
                context.fill();
            }
            else {
                this.img_element.src = this.img;
                context.save();
                context.beginPath();
                context.arc(this.position.getX(), this.position.getY(), this.radius, 0, Math.PI*2);
                context.clip();
                context.drawImage(this.img_element, 0, 0, this.img_element.width, this.img_element.height, this.position.getX() - this.radius, this.position.getY() - this.radius, this.radius * 2, this.radius * 2);
                context.restore();
            }
        }
    },

    update: function() {
        angle = Math.atan2(this.func(this.t + this.dx) - this.func(this.t), this.dx);
        this.speed.setAngle(this.direction.getAngle() + angle);
        this.t++;

        this.position.setX(this.position.getX() + this.speed.getX());
        this.position.setY(this.position.getY() + this.speed.getY());
    },

    check: function(count) {
        if (ball_pass == false) {
            if (this.touchTop()) {
                this.position.setY(0 + this.speed.getY() + this.radius);
                this.reverse("Y");
            }
            else if (this.touchBottom()) {
                this.position.setY(height + this.speed.getY() - this.radius);
                this.reverse("Y");
            }
        }
        else {
            if (this.overTop()) {
                this.position.setY(height + this.radius);
            }
            else if (this.overBottom()) {
                this.position.setY(0 - this.radius);
            }
        }

        if (this.touchBoard1()) {
            this.position.setX(board1.position.getX() + this.speed.getX() + this.radius);
            this.direction.setAngle(((this.position.getY() - board1.min) / board1.length - 0.5) * Math.PI / 2);
        }
        else if (this.touchBoard2()) {
            this.position.setX(board2.position.getX() + this.speed.getX() - this.radius);
            this.direction.setAngle(Math.PI + (0.5 - (this.position.getY() - board2.min) / board2.length) * Math.PI / 2);
        }
        else {
            if (this.touchLeft()) {
                this.position.setX(0 + this.speed.getX() + this.radius);
                this.reverse("X");
                if (count != false)
                    document.getElementById("score2").innerHTML = ++score2;
            }
            else if (this.touchRight()) {
                this.position.setX(width + this.speed.getX() - this.radius);
                this.reverse("X");
                if (count != false)
                    document.getElementById("score1").innerHTML = ++score1;
            }
        }
        return 0;
    },

    touchLeft: function() {
        return this.position.getX() + this.speed.getX() - this.radius <= 0;
    },

    touchRight: function() {
        return this.position.getX() + this.speed.getX() + this.radius >= width;
    },

    touchTop: function() {
        return this.position.getY() + this.speed.getY() - this.radius <= 0;
    },

    touchBottom: function() {
        return this.position.getY() + this.speed.getY() + this.radius >= height;
    },

    touchBoard1: function() {
        return this.position.getY() >= board1.min && this.position.getY() <= board1.max && this.position.getX() + this.speed.getX() - board1.position.getX() < this.radius;
    },

    touchBoard2: function() {
        return this.position.getY() >= board2.min && this.position.getY() <= board2.max && board2.position.getX() - (this.position.getX() + this.speed.getX()) < this.radius;
    },

    overTop: function() {
        return this.position.getY() + this.speed.getY() + this.radius <= 0;
    },

    overBottom: function() {
        return this.position.getY() + this.speed.getY() >= height + this.radius;
    },

    reverse: function(axis) {
        switch (axis) {
            case "X":
                this.direction.setX(-this.direction.getX());
                this.speed.setX(-this.speed.getX());
                break;
            case "Y":
                this.direction.setY(-this.direction.getY());
                this.speed.setY(-this.speed.getY());
                break;
            default:
                break;
        }
    }
}


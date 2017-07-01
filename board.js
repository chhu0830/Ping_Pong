var board = { position: null,
    length: 100,
    up: false,
    down: false,
    speed: 0,
    min_pos: 0,
    max_pos: 0,

    create: function(x, y, length, speed, min_pos, max_pos) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.length = length / 2;
        obj.speed = speed;
        obj.min_pos = min_pos + obj.length;
        obj.max_pos = max_pos - obj.length;
        return obj
    },

    draw: function(context) {
        context.beginPath();
        context.moveTo(this.position.getX(), this.position.getY() - this.length);
        context.lineTo(this.position.getX(), this.position.getY() + this.length);
        context.stroke();
    },

    setUp: function(value) {
        this.up = value;
    },

    setDown: function(value) {
        this.down = value;
    },

    moveUp: function() {
        this.position.setY(this.position.getY() - this.speed)
    },

    moveDown: function() {
        this.position.setY(this.position.getY() + this.speed)
    },

    update: function() {
        if (this.up && this.position.getY() > this.min_pos) {
            this.moveUp();
        }
        if (this.down && this.position.getY() < this.max_pos) {
            this.moveDown();
        }
    }
}


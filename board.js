var board = { position: null,
    length: 0,
    up: false,
    down: false,
    speed: 0,
    min_pos: 0,
    max_pos: 0,
    min: 0,
    max: 0,

    create: function(x, y, length, speed, min_pos, max_pos) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.length = length / 2;
        obj.speed = speed;
        obj.min_pos = min_pos;
        obj.max_pos = max_pos;
        obj.min = y - obj.length;
        obj.max = y + obj.length;
        return obj
    },

    draw: function(context) {
        context.beginPath();
        context.moveTo(this.position.getX(), this.min);
        context.lineTo(this.position.getX(), this.max);
        context.stroke();
    },

    setUp: function(value) {
        this.up = value;
    },

    setDown: function(value) {
        this.down = value;
    },

    moveUp: function() {
        this.position.setY(this.position.getY() - this.speed);
        this.min -= this.speed;
        this.max -= this.speed;
    },

    moveDown: function() {
        this.position.setY(this.position.getY() + this.speed);
        this.min += this.speed;
        this.max += this.speed;
    },

    update: function() {
        if (this.up && this.min > this.min_pos) {
            this.moveUp();
        }
        if (this.down && this.max < this.max_pos) {
            this.moveDown();
        }
    }
}


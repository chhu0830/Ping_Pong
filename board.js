var board = {
    position: null,
    length: 0,
    up: false,
    down: false,
    speed: 0,
    color: "#000000",
    min: 0,
    max: 0,

    create: function(x, y, length, speed, color) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.length = length;
        obj.speed = speed;
        obj.min = y - obj.length / 2;
        obj.max = y + obj.length / 2;
        obj.color = color;
        return obj
    },

    draw: function() {
        context.strokeStyle = this.color;
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
    },

    moveDown: function() {
        this.position.setY(this.position.getY() + this.speed);
    },

    update: function() {
        if (this.up && this.min > 0) {
            this.moveUp();
        }
        if (this.down && this.max < height) {
            this.moveDown();
        }
        this.min = this.position.getY() - this.length / 2;
        this.max = this.position.getY() + this.length / 2;
    }
}


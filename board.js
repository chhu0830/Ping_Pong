var board = {
    position: null,
    length: 100,
    up: false,
    down: false,
    speed: 0,

    create: function(x, y, length, speed) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.length = length;
        obj.speed = speed;
        return obj
    },

    draw: function(context) {
        context.beginPath();
        context.moveTo(this.position.getX(), this.position.getY() - this.length / 2);
        context.lineTo(this.position.getX(), this.position.getY() + this.length / 2);
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
        if (this.up) {
            this.moveUp();
        }
        if (this.down) {
            this.moveDown();
        }
    }
}


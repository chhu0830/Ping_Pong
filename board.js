var board = {
    position: null,
    length: 100,

    create: function(x, y, length) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.length = length;
        return obj
    },

    draw: function(context) {
        context.beginPath();
        context.moveTo(this.position.getX(), this.position.getY() - this.length / 2);
        context.lineTo(this.position.getX(), this.position.getY() + this.length / 2);
        context.stroke();
        context.save();
    },

}


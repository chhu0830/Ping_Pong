var ball = {
    position: null,
    radius: 0,
    velocity: null,

    create: function(x, y, radius) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.radius = radius;
        return obj
    },

    draw: function(context) {
        context.arc(this.position.getX(), this.position.getY(), this.radius, 0, Math.PI*2);
        context.fill();
        context.save();
    }

}


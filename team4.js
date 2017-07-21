var magic = {
    icon: "./images/magic.jpg",
    time: 5,
    func: function(player) {
        switch (player){
            case 0:
                if (ball0.direction.getX() < 0){
                    if(ball0.position.getX() < width/4){
                        ball0.position.setX(width*3/4);
                        ball0.position.setY(height*Math.random());
                        ball0.direction.setAngle(Math.PI*3/2 + Math.PI*Math.random());
                    }
                    else{
                        ball0.direction.setAngle(Math.PI);
                    }
                }
                break;
            case 1:
                if (ball0.direction.getX() > 0){
                    if(ball0.position.getX() > width*3/4){
                        ball0.position.setX(width/4);
                        ball0.position.setY(height*Math.random());
                        ball0.direction.setAngle(Math.PI/2 + Math.PI*Math.random());
                    }
                    else{
                        ball0.direction.setAngle(0);
                    }
                }
                break;
            default:
                break;
        }
    }
}

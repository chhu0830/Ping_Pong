
// team5
var WannaGetOnTheBus = {
    icon: "./images/getonthebus.jpg",
    time: 5,
    func: function(player){
                var ballspeed = ball_speed;
                var boardspeed = board_speed;
                canvas = document.getElementById("playground");
                width  = canvas.width = canvas.clientWidth;
                height = canvas.height = canvas.clientHeight;
        switch(player){
            case 0:
                document.getElementById("playground").style.backgroundImage = null;
                document.getElementById("playground").style.backgroundColor = "#FFFFFF";
                board1.speed = board_speed*5;
                board1.length = board_length*2;
                board1.color = "#FFFFFF";
                board2.color = "#FFFFFF";
                ball0.radius = ball_radius * 4;
                for(var i = 0 ; i < 100 ; i++){
                    balls = ball.create(Math.random() * width, Math.random() * height, ball0.radius, ball0.speed.getLength(), Math.random() * Math.PI * 2, ball_color, ball_func);
                    balls.check();
                    balls.update();
                    balls.draw();
                }
                break;
            case 1:
                document.getElementById("playground").style.backgroundImage = null;
                document.getElementById("playground").style.backgroundColor = "#FFFFFF";
                board2.speed = board_speed*5;
                board2.length = board_length*2;
                board2.color = "#FFFFFF";
                board1.color = "#FFFFFF";
                ball0.radius = ball_radius * 4;
                for(var i = 0 ; i < 100 ; i++){
                    balls = ball.create(Math.random() * width, Math.random() * height, ball0.radius, ball0.speed.getLength(), Math.random() * Math.PI * 2, ball_color, ball_func);
                    balls.check();
                    balls.update();
                    balls.draw();
                }
                break;
            default:
                document.getElementById("playground").style.backgroundImage = "url('./images/sky.jpg')";
                ball0.speed.setLength(ballspeed);
                board1.color="#FF0000";
                board2.color="#0000FF";
                board1.speed = boardspeed;
                board2.speed = boardspeed;
                board1.length = board_length;
                board2.length = board_length;
                ball0.visible = true;
                ball0.radius = ball_radius;
                break;
        }   
    }
}

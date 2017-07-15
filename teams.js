// team2
var illusion = {
    icon: "./images/bigBoard.png",
    time: 5,
    func: function(player) {
        switch(player) {
            case 0:
                var targetY;
                if(board2.position.getY() <= 250) {
                    targetY = board2.position.getY() + 200;
                }
                else {
                    targetY = board2.position.getY() - 200;
                }

                var distX = board2.position.getX() - ball0.position.getX();
                var distY = targetY - ball0.position.getY();

                if(ball0.direction.getX() > 0) {
                    ball0.direction.setAngle( Math.atan2(distY, distX) );
                }
                break;

            case 1:
                var targetY;
                if(board1.position.getY() <= 150) {
                    targetY = board1.position.getY() + 100;
                }
                else {
                    targetY = board1.position.getY() - 100;
                }

                var distX = board1.position.getX() - ball0.position.getX();
                var distY = targetY - ball0.position.getY();

                if(ball0.direction.getX() < 0) {
                    ball0.direction.setAngle( Math.atan2(distY, distX) );
                }
                break;

            default:
                break;
        }
    }
}
// team3
var mySkill = {
    icon: "./images/team3.gif",
    time: 7,
    func: function(player) {

        ball0.speed.setLength(50);
        switch (player) {
            case 1:// 2
                //var MasterDirection = ball0.direction;
                //vector rotation
                //var ballA = ball.create(ball0.position.getX(), ball0.position.getY(), ball0.radius, ball0.speed, ball0.direction.getAngle() + 0.125 * Math.PI, ball0.color, null);
                //ballA.direction.setAngle(ball0.direction.getAngle + 0.125 * Math.PI);
                board1.position.setY(board2.position.getY());
                var distX = board2.position.getX() - ball0.position.getX();
                var distY = board2.position.getY() - ball0.position.getY();
                var dir = Math.atan2(distY, distX);
                if(ball0.direction.getX()>0)
                {
                    ball0.direction.setAngle(dir);
                }
                break;
            case 0:// 1
                board2.position.setY(board1.position.getY());
                var distX = board1.position.getX() - ball0.position.getX();
                var distY = board1.position.getY() - ball0.position.getY();
                var dir = Math.atan2(distY, distX); 
                if(ball0.direction.getX()<0)
                {
                    ball0.direction.setAngle(dir);
                }
                break;
            default:
                ball0.radius = ball_radius;
                ball0.speed.setLength(ball_speed);
                ball0.img = null;
                break;
        }
    }
}

// team5
var ghost = {
    icon: "./images/ghost.gif",
    time: 5,
    func: function(player) {
        switch(player) {
            case 0:
            case 1:
                document.getElementById('playground').style.backgroundImage = "url('./images/ghost.gif')";
                break;
            default:
                document.getElementById('playground').style.backgroundImage = "";
                break;
        }
    }
}

// team6
var gangbang = {
	icon: "./images/new_l.png",
	time: 5,
	func: function(player){
				var ballspeed = ball_speed;
				var boardspeed = board_speed;
		switch(player){
			case 0:
				ball0.radius = ball_radius * 4;
				ball0.direction.setAngle(0);
				ball0.img = "./images/new_r.png";
				if(ball0.touchRight()||ball0.touchBoard1()){
					ball0.position.setX(width);
					ball0.speed.setLength(0);
					board2.speed = 0;
				}
				break;
			case 1:
				ball0.radius = ball_radius * 4;
				ball0.direction.setAngle(Math.PI);
				ball0.img = "./images/new_l.png";
				if(ball0.touchLeft()||ball0.touchBoard2()){
					ball0.position.setX(0);
					ball0.speed.setLength(0);
					board1.speed = 0;
				}
				break;
			default:
				ball0.radius = ball_radius;
				ball0.speed.setLength(ballspeed);
				board2.speed = boardspeed;
				board1.speed = boardspeed;
				ball0.img = null;
				break;
		}	
	}
}

// team7
var defense = {
    icon: "./images/defense.png",
    time: 10,
    func: function(player) {

        switch (player) {
            case 0:
                if(ball0.direction.getX() < 0){
                    var dy = board1.position.getY() - ball0.position.getY();
                    var dx = board1.position.getX() -  ball0.position.getX();
                    var angle = Math.atan2(dy, dx);
                    ball0.direction.setAngle(angle);
                }
                break;
            case 1:
                if(ball0.direction.getX() > 0){
                    var dy = board2.position.getY() - ball0.position.getY();
                    var dx = board2.position.getX() -  ball0.position.getX();
                    var angle = Math.atan2(dy, dx);
                    ball0.direction.setAngle(angle);
                }
                break;
            default:
                break;
        }
    }
}

var pika = {
    icon: "./images/pika.png",
    time: 5,
    func: function(player) {
        switch (player) {
            case 0:
                if (ball0.position.getX() > width / 2) {
                    ball0.speed.setLength(ball_speed * 5);
                    ball0.color = "yellow";
                }
                else {
                    ball0.speed.setLength(ball_speed * 2);
                    ball0.color = "black";
                }
                if (ball0.position.getX() > width / 4 && ball0.position.getX() < width / 2) {
                    ball0.visible = false;
                }
                else {
                    ball0.visible = true;
                }
                break;
            case 1:
                if (ball0.position.getX() < width / 2) {
                    ball0.speed.setLength(ball_speed * 5);
                    ball0.color = "yellow";
                }
                else {
                    ball0.speed.setLength(ball_speed * 2);
                    ball0.color = "black";
                }
                if (ball0.position.getX() > width / 2 && ball0.position.getX() < width /  4 * 3) {
                    ball0.visible = false;
                }
                else {
                    ball0.visible = true;
                }
                break;
            default:
                ball0.color = "black";
                ball0.speed.setLength(ball_speed);
                ball0.visible = true;
                break;
        }
    }
}

// team8
var forecast = {
    icon: "./images/song.png",
    time: 10,
    func: function(player) {
		var ball2;
        switch (player) {
            case 0:
					ball2 = ball.create(ball0.position.getX(), ball0.position.getY(), ball_radius/5, ball0.speed.getLength() * 2, ball0.direction.getAngle() , "#FF0000", ball_func);
					var i=10;
					while(i--){
						if(ball2.position.getX()<width/2){
							ball2.update();
							ball2.draw();
						}
					}
				
			break;
            case 1:
			
					ball2 = ball.create(ball0.position.getX(), ball0.position.getY(), ball_radius/5, ball0.speed.getLength() * 2, ball0.direction.getAngle() , "#FF0000", ball_func);
					var i=5;
					while(i--){
						if(ball2.position.getX()>width/2){
							ball2.update();
							ball2.draw();
						}
					}
			break;
            default:
            break;
        }
    }
}

// team9
var team_9 = {
    icon: "./images/paint.png",
    time: 5,
    func: function(player) {
        switch (player) {
            case 0:
				//document.getElementById("playground").style.backgroundImage = "url('images/star.jpg')";
				//document.getElementById("playground").style.backgroundSize = "cover";
				document.getElementById("playground").style.backgroundColor = "blue";
				ball0.radius = ball_radius * 8;
                //ball0.speed.setLength(ball_speed / 2);
				
				if(ball0.speed.getLength()<2){					
					ball0.reverse("X");
				}
				ball0.speed.setX(ball0.speed.getX()+1);
				ball0.speed.setLength(ball0.speed.getLength()*0.992);
                ball0.img = "./images/song.png";
				
				//console.log(ball0.speed.getX());
				break;
            case 1:
				document.getElementById("playground").style.backgroundColor = "red";
                ball0.radius = ball_radius * 8;
                //ball0.speed.setLength(ball_speed / 2);
				if(ball0.speed.getLength()<2){					
					ball0.reverse("X");
				}
				ball0.speed.setX(ball0.speed.getX()-1);
				ball0.speed.setLength(ball0.speed.getLength()*0.992);
                ball0.img = "./images/song.png";
                break;
            default:
				document.getElementById("playground").style.backgroundImage = "none";
				document.getElementById("playground").style.backgroundColor = "white";
                ball0.radius = ball_radius;
                ball0.speed.setLength(ball_speed);
                ball0.img = null;
                break;
        }
    }
}

// team10
var stop = {
    icon: "./images/stop.jpg",
    time: 5,
    func: function(player){
        switch (player) {
            case 0:
                board2.speed = 0;
                break;
            case 1:
                board1.speed = 0;
                break;
            default:
                board1.speed = board_speed;
                board2.speed = board_speed;
                break;
        }
    }
}

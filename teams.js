// team1
var shootingstar ={
    icon: "./images/ugly.png",
    time: 15,
    audio: null,
    func: function(player) {
        switch (player) {
            case 0:
                ball0.func=star;
                ball0.speed.setLength(15);
                if (this.audio == null) {
                    this.audio = new Audio('./audio/star.mp3');
                    this.audio.play();
                }
                //console.log(this.audio.currentTime);
                if(this.audio.currentTime>1.1){
                    ball0.img="./images/ugly.png";
                    ball0.radius = ball_radius*(2+Math.sin(this.audio.currentTime*12.5))*4;
                }
                break;
            case 1:
                ball0.func=star;
                ball0.speed.setLength(15);
                if (this.audio == null) {
                    this.audio = new Audio('./audio/star.mp3');
                    this.audio.play();
                }
                if(this.audio.currentTime>1.1){
                    ball0.img="./images/ugly.png";
                    ball0.radius = ball_radius*(2+Math.sin(this.audio.currentTime*12.5))*4;
                }
                break;
            default:
                ball0.radius = ball_radius;
                ball0.func = ball_func;
                ball0.img=ball_img;
                ball0.speed.setLength(ball_speed);
                if (this.audio != null) {
                    this.audio.pause();
                    this.audio = null
                }
                break;
        }
    }
}

var mid = {
    icon: "./images/middle.jpg",
    time: 5,
    func: function(player){
        switch (player) {
            case 0:
                board1.position.setX(3*width/4);
                board1.length = board_length*3;
                break;
            case 1:
                board2.position.setX(width/4);
                board2.length = board_length*3;
                break;
            default:
                board1.position.setX(board_margin);
                board2.position.setX(width - board_margin);
                board1.length = board_length;
                board2.length = board_length;
                break;
        }
    }
}

// team2
var bounce = {
    icon: "./images/handsome.png",
    time: 5,
    func: function(player) {
        switch (player) {
            case 0:
                if(ball0.position.getX()+ball0.radius===width){
                    var i;
                    for(i=0;i<10;i++){
                        ball0.position.setX(width-50);
                        ball0.position.setX(width);
                    }
                }
                break;
            case 1:
                if(ball0.position.getX()-ball0.radius===0){
                    var i;
                    for(i=0;i<10;i++){
                        ball0.position.setX(50);
                        ball0.position.setX(0);
                    }
                }
                break;
            default:
                break;
        }
    }
}

var illusion = {
    icon: "./images/illusion.png",
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
var lin = {
    icon: "./images/123.jpg",
    time: 5,
    func: function(player){
        switch (player) {
            case 0:
                document.getElementById('playground').style.backgroundImage = "url('./images/123.jpg')";
                ball0.img = "./images/song.png";
                ball0.radius = ball_radius * 7;
                ball0.position.setX(width / 2);
                break;
            case 1:
                document.getElementById('playground').style.backgroundImage = "url('./images/123.jpg')";
                ball0.img = "./images/song.png";
                ball0.radius = ball_radius * 7;
                ball0.position.setX(width / 2);
                break;
            default:
                document.getElementById('playground').style.backgroundImage = "url('./images/sky.jpg')";
                ball0.img = "./images/meteorite.png";
                ball0.radius = ball_radius;
                break;
        }
    }
}

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
                break;
        }
    }
}

// team4
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

// team5
var WannaGetOnTheBus = {
    icon: "./images/getonthebus.jpg",
    time: 5,
    func: function(player){
                var ballspeed = ball_speed;
                var boardspeed = board_speed;
        switch(player){
            case 0:
                document.getElementById("playground").style.backgroundImage = null;
                document.getElementById("playground").style.backgroundColor = "#FFFFFF";
                board1.speed = boardspeed*5;
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
                board2.speed = boardspeed*5;
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
                context.lineWidth   = board_width;
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

var ghost = {
    icon: "./images/ghost.gif",
    time: 5,
    func: function(player) {
        switch(player) {
            case 0:
            case 1:
                ball0.img = null;
                ball0.color = "#000000";
                document.getElementById('playground').style.backgroundImage = "url('./images/ghost.gif')";
                break;
            default:
                ball0.img = ball_img;
                document.getElementById('playground').style.backgroundImage = background_image;
                break;
        }
    }
}

// team6
var freeze= {
    icon: "./images/freeze.png",
    time: 3,
    func: function(player) {
        switch (player) {
            case 0:
            board2.speed=0;
                break;
            case 1:
            board1.speed=0;
                break;
            default:
            board1.speed=board_speed;
            board2.speed=board_speed;
                break;
        }
    }
}

var add = {
    icon: "./images/add.png",
    time: 5,
    keydown1: false,
    keydown2: false,
    on1: true,
    add: function(event) {
                switch (event.keyCode) {
                    case 81:
                        if( this.keydown1 == true ){
                            document.getElementById("score1").innerHTML = ++score1;
                            this.keydown1 = false;
                        }
                        break;
                    case 96:
                        if( this.keydown2 == true ){
                            document.getElementById("score2").innerHTML = ++score2;
                            this.keydown2 = false;
                        }
                        break;
                }
        },
    func: function(player){
        switch (player) {
            case 0:
                document.body.addEventListener("keyup", this.add);
                document.body.addEventListener("keydown", function(event) {
                //console.log(event.keyCode);
                switch (event.keyCode) {
                    case 81:
                        this.keydown1 = true;
                        break;
                    case 96:
                        this.keydown2 = true;
                        break;
                }
                });
                break;
            case 1:
                document.body.addEventListener("keyup", this.add);
                document.body.addEventListener("keydown", function(event) {
                //console.log(event.keyCode);
                switch (event.keyCode) {
                    case 81:
                        this.keydown1 = true;
                        break;
                    case 96:
                        this.keydown2 = true;
                        break;
                }
                });
                break;
            default:
                document.body.removeEventListener("keyup", this.add);
                break;
        }
    }
}

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
				ball0.img = ball_img;
				break;
		}	
	}
}

// team7
var upset = {
    icon: "./images/upset.png",
    time: 5,
    reset: 0,
    func: function(player) {
        switch (player) {
            case 0:
                if(this.reset === 0){
                   board2.speed = board2.speed * -1; 
                   this. reset = 1;
                }         
                if(board2.position.getY() > height - board2.length / 5 * 3){
                    board2.position.setY(height - board2.length / 5 * 3);
                }
                if(board2.position.getY() < 0 + board2.length / 5 * 3){
                    board2.position.setY(0 + board2.length / 5 * 3);
                }
                break;
            case 1:
                if(this.reset === 0){
                   board1.speed = board1.speed * -1; 
                   this. reset = 1;
                }         
                if(board1.position.getY() > height - board1.length / 5 * 3){
                    board1.position.setY(height - board1.length / 5 * 3);
                }
                if(board1.position.getY() < 0 + board1.length / 5 * 3){
                    board1.position.setY(0 + board1.length / 5 * 3);
                }
                break;
            default:
                board1.speed = board_speed;
                board2.speed = board_speed;
                this.reset = 0;
                break;
        }
    }
}

var rainbow = {
	icon : "./images/defense.png",
	time : 10 ,
	func : function(player){
		switch(player){
			case 0 :
				document.getElementById("playground").style.backgroundImage ="url('./images/rainbow.gif')";
				break;
			case 1 :
				document.getElementById("playground").style.backgroundImage = "url('./images/rainbow.gif')";
				break;
			default :
				document.getElementById("playground").style.backgroundImage = "url('./images/sky.jpg')";
				break;
		}
		
	}
}

var rainbow2 = {
	icon : "./images/defense.png",
	time : 10 ,
	func : function(player){
		switch(player){
			case 0 :
				document.getElementById("playground").style.backgroundImage ="url('./images/rainbow2.gif')";
				break;
			case 1 :
				document.getElementById("playground").style.backgroundImage = "url('./images/rainbow2.gif')";
				break;
			default :
				document.getElementById("playground").style.backgroundImage = "url('./images/sky.jpg')";
				break;
		}
		
	}
}

var star = {
	icon : "./images/defense.png",
	time : 10 ,
	func : function(player){
		switch(player){
			case 0 :
				document.getElementById("playground").style.backgroundImage ="url('./images/star.gif')";
				break;
			case 1 :
				document.getElementById("playground").style.backgroundImage = "url('./images/star.gif')";
				break;
			default :
				document.getElementById("playground").style.backgroundImage = "url('./images/sky.jpg')";
				break;
		}
		
	}
}

var long_board = {
    icon: "./images/long_board.png",
    time: 5,
    func: function(player) {
        switch (player) {
            case 0:
                board1.length = height;
				board2.length = 0;
				
                break;
            case 1:
                board2.length = height;
				board1.length = 0;
                
                break;
            default:
                board1.length = board_length;
				board2.length = board_length;
                break;
        }
    
	}
}

var you_dead = {
	icon: "./images/ryan_r.png",
	time: 5,
	func: function(player){
				var ballspeed = ball_speed;
				var boardspeed = board_speed;
		switch(player){
			case 0:
				ball0.radius = ball_radius * 4;
				ball0.direction.setAngle(0);
				ball0.img = "./images/ryan_l.png";
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
var gun = {
	icon: "./images/gun.png",
	time: 2,
	rballs:[],
	bballs:[],
	func: function(player) {
        switch (player) {
			case 0:
			if(this.rballs.length==0){
					//console.log(typeof(this.rballs[i]));
				for(i=0;i<10;i++){
					var b = ball.create(board1.position.getX(), board1.position.getY(), ball_radius/3, 10*Math.random()+15, Math.PI*(-1/2)+(Math.PI*Math.random()) , "#FF0000", ball_func);
					b.img="./images/song.png";
					//console.log(b);
					
					this.rballs.push(b);
				}
			}
				// console.log(board1.position.getX(), board1.position.getY());
				for(i=0;i<this.rballs.length;i++){
					//console.log(this.rballs[i]);
					this.rballs[i].draw();
					this.rballs[i].update();
						if((this.rballs[i].touchRight())){
							this.rballs[i].direction.setX(-this.rballs[i].direction.getX());
							this.rballs[i].check();
						}
					if((this.rballs[i].touchLeft())){
							this.rballs[i].direction.setX(-this.rballs[i].direction.getX());
						}
					if((this.rballs[i].touchTop())){
							this.rballs[i].direction.setY(-this.rballs[i].direction.getY());
						}
					if((this.rballs[i].touchBottom())){
							this.rballs[i].direction.setY(-this.rballs[i].direction.getY());
						}
					if((this.rballs[i].touchBoard2())){
						this.rballs[i].direction.setX(-this.rballs[i].direction.getX());
					}
					if((this.rballs[i].touchBoard1())){
						this.rballs[i].direction.setX(-this.rballs[i].direction.getX());
					}
					
					//if((this.rballs[i].direction.getAngle()>=Math.PI/2)&&(this.rballs[i].direction.getAngle()<=Math.PI/2*3)){
					//	this.rballs.splice(i,i);
					//}
				}
				
			break;
			case 1:
			if(this.bballs.length==0){
					//console.log(typeof(this.bballs[i]));
				for(i=0;i<10;i++){
					var b = ball.create(board2.position.getX(), board2.position.getY(), ball_radius/3, 10*Math.random()+15, Math.PI*(1/2)+(Math.PI*Math.random()) , "#0000FF", ball_func);
					//console.log(b);
					b.img="./images/song.png";
					this.bballs.push(b);
				}
			}
				// console.log(board1.position.getX(), board1.position.getY());
				for(i=0;i<this.bballs.length;i++){
					//console.log(this.bballs[i]);
					this.bballs[i].draw();
					this.bballs[i].update();
					if((this.bballs[i].touchLeft())){
							this.bballs[i].direction.setX(-this.bballs[i].direction.getX());
							this.bballs[i].check();
						}
					if((this.bballs[i].touchTop())){
							this.bballs[i].direction.setY(-this.bballs[i].direction.getY());
						}
					if((this.bballs[i].touchBottom())){
							this.bballs[i].direction.setY(-this.bballs[i].direction.getY());
						}
					if((this.bballs[i].touchBoard2())){
						this.bballs[i].direction.setX(-this.bballs[i].direction.getX());
					}
					if((this.bballs[i].touchBoard1())){
						this.bballs[i].direction.setX(-this.bballs[i].direction.getX());
					}
						if((this.bballs[i].touchRight())){
							this.bballs[i].direction.setX(-this.bballs[i].direction.getX());
						}
					
					//if((this.bballs[i].direction.getAngle()>=Math.PI/2)&&(this.bballs[i].direction.getAngle()<=Math.PI/2*3)){
					//	this.bballs.splice(i,i);
					//}
				}
				
			
			break;
			default:
			delete this.bballs;
			this.bballs=[];
			delete this.rballs;
			this.rballs=[];
			break;
		}
		}
}

var forecast = {
    icon: "./images/forecast.jpg",
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
var rotate = {
    icon: "./images/rotate.png",
    time: 5,
    func: function(player){
        switch (player) {
            case 0:
            case 1:
                document.body.style.transition="all 5s";
                document.body.style.transform="rotate(540deg)";
                break;
            default:
                document.body.style.transform="rotate(deg)";
                break;
        }
    }
}

var team_9 = {
    icon: "./images/paint.png",
    time: 5,
    func: function(player) {
        switch (player) {
            case 0:
				//document.getElementById("playground").style.backgroundImage = "url('images/star.jpg')";
				//document.getElementById("playground").style.backgroundSize = "cover";
				document.getElementById("playground").style.backgroundImage = "";
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
				document.getElementById("playground").style.backgroundImage = "";
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
				document.getElementById("playground").style.backgroundImage = background_image;
				document.getElementById("playground").style.backgroundColor = "white";
                ball0.radius = ball_radius;
                ball0.speed.setLength(ball_speed);
                ball0.img = ball_img;
                break;
        }
    }
}

// team10
var demo = {
    icon: "./images/1.jpg",
    time:6,
    myAudio: null,
    func: function(player) {
        switch (player){
            case 0:
                ball0.img = "./images/2.jpg";
                ball0.radius = 100;
                if (this.myAudio === null) {
                    this.myAudio = new Audio("./audio/3.mp3");
                    this.myAudio.play();
                }
                if (ball0.position.getX() < width / 3 * 2) {
                    if (ball0.speed.getX() < 0) {
                        ball0.reverse("X");
                    }
                }
                break;
            case 1:   
                ball0.img = "./images/ugly.jpg";
                ball0.radius = 100;
               if (this.myAudio === null) {
                    this.myAudio = new Audio("./audio/4.mp3");
                    this.myAudio.play();
                }
                if (ball0.position.getX() > width / 3 * 1) {
                    if (ball0.speed.getX() > 0) {
                        ball0.reverse("X");  
                    }
                }
                break; 
            default:
                      ball0.img=ball_img;
                      this.myAudio=null;
                      ball0.radius=20;
                      break;
        }
    }
}

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

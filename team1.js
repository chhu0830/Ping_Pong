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
                    this.audio = new Audio('star.mp3');
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
                    this.audio = new Audio('star.mp3');
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
                board1.position.setX(0);
                board2.position.setX(width);
                board1.length = board_length;
                board2.length = board_length;
                break;
        }
    }
}

var ball_speed = 20;
var ball_radius = 15;
var ball_color = "#FFFFFF";
var ball_func = line;
var ball_pass = false;

var board_speed  = 20;
var board_width  = 10;
var board_margin = 10;
var board1_color  = "#FF0000";
var board2_color  = "#0000FF";

var game_time = 5;
var background_image = "url('./images/sky.jpg')"
var ball_img = "./images/meteorite.png"

var default_skills = [gorilla, straightBall, colorBall, variantBall, smallBoard, bigBoard, disappear, speedUp].sort(function() { return Math.random() < 0.8; });
var team_skills = [null, null, illusion, mySkill, null, ghost, gangbang, pika, forecast, team_9, stop]
var team = [2, 3];
var skills = [];
var playground_effects = [nothing, transport, ballPass, multiBall, random];

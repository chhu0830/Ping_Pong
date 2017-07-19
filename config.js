var ball_speed = 20;
var ball_radius = 20;
var ball_color = "#FFFFFF";
var ball_func = line;
var ball_pass = false;

var board_speed  = 20;
var board_width  = 10;
var board_margin = 10;
var board1_color  = "#FF0000";
var board2_color  = "#0000FF";

var game_time = 20;
var background_image = "url('./images/sky.jpg')"
var ball_img = "./images/meteorite.png"

var default_skills = [gorilla, straightBall, colorBall, variantBall, smallBoard, bigBoard, disappear, speedUp];
var team_skills = [];
var team = [];
var skills = [];
var playground_effects = [nothing, transport, ballPass, multiBall, random];

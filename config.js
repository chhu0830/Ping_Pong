var ball_speed = 20;
var ball_radius = 15;
var ball_color = "#000000";
var ball_func = line;

var board_speed  = 20;
var board_width  = 10;
var board_margin = 10;
var board1_color  = "#FF0000";
var board2_color  = "#0000FF";

var game_time = 20;
var ball_through = false;

var skills = [straightBall, colorBall, multiBall, variantBall, bigBoard, disappear, speedUp].sort(function() { return Math.random() < 0.5; });
var playground_effect = [none, ball_pass];

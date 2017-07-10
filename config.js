var ball_speed = 10;
var ball_radius = 15;
var ball_color = "#0000FF";
var ball_func = line;

var board_speed  = 10;
var board_width  = 10;
var board_margin = 10;
var board_color  = "#FF0000";

var game_time = 20;

var skills = [multiBall, variantBall, bigBoard, disappear, speedUp].sort(function() { return Math.random() < 0.5; });

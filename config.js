var ball_speed = 20;
var ball_radius = 15;
var ball_color = "#000000";
var ball_func = line;
var ball_pass = false;

var board_speed  = 20;
var board_width  = 10;
var board_margin = 10;
var board1_color  = "#FF0000";
var board2_color  = "#0000FF";

var game_time = 30;

var default_skills = [gorilla, straightBall, colorBall, variantBall, smallBoard, bigBoard, disappear, speedUp].sort(function() { return Math.random() < 0.8; });
var teams = [null, illusion, mySkill, null, ghost, gangbang, pika, forecast, team_9, stop]
var team_skills = [ghost, stop];
var skills = team_skills;
skills.push(default_skills[0]);
skills.push(default_skills[1]);
var playground_effects = [nothing, transport, ballPass, multiBall, random];

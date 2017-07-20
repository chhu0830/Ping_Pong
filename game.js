var canvas = null;
var context= null;
var height = null;
var width  = null;

var ball0  = null;
var board1 = null;
var board2 = null;
var board_length = null;

var skill_time = null;
var skill_using = null;
var skill_available = null;
var skill_interval = null;
var skill_balls = null;

var score1 = null;
var score2 = null;

var round = 0;
var game_over = null;
var interval = null;
var img = null;


window.onload = function() {
    // img = document.createElement("img");
    canvas = document.getElementById("playground");
    width  = canvas.width = canvas.clientWidth;
    height = canvas.height = canvas.clientHeight;

    context = canvas.getContext("2d");
    context.lineWidth   = board_width;

    board_length = height * (2 / 10);



    document.body.addEventListener("keydown", function(event) {
        // console.log(event.keyCode);
        switch (event.keyCode) {
            case 87:
                board1.setUp(true);
                break;
            case 83:
                board1.setDown(true);
                break;
            case 79:
                board2.setUp(true);
                break;
            case 76:
                board2.setDown(true);
                break;
            default:
                break;
        }
    });

    document.body.addEventListener("keyup", function(event) {
        // console.log(event.keyCode);
        switch (event.keyCode) {
            case 87:
                board1.setUp(false);
                break;
            case 83:
                board1.setDown(false);
                break;
            case 79:
                board2.setUp(false);
                break;
            case 76:
                board2.setDown(false);
                break;
            case 32:
                if (game_over)
                    start();
                break;
            case 49:
                useSkill(0, 0);
                break;
            case 50:
                useSkill(0, 1);
                break;
            case 51:
                useSkill(0, 2);
                break;
            case 52:
                useSkill(0, 3);
                break;
            case 55:
                useSkill(1, 0);
                break;
            case 56:
                useSkill(1, 1);
                break;
            case 57:
                useSkill(1, 2);
                break;
            case 48:
                useSkill(1, 3);
                break;
            default:
                break;
        }
    });

    init();
}

function useSkill(player, skill) {
    if (skill_available[player][skill] && !skill_using[player^1][skill]) {
        skill_available[player][skill] = false;
        skill_using[player][skill] = true;
        skill_interval[player][skill] = setInterval(function() {
            // console.log(skill_time[player][skill]);
            skill_time[player][skill] -= 1;
            if (skill_time[player][skill] <= 0) {
                stopSkill(player, skill);
            }
        }, 1000);
        if (skill_time[player][skill] <= 0) {
            stopSkill(player, skill);
        }
    }
};

function stopSkill(player, skill) {
    skills[skill].func(player);
    skill_using[player][skill] = false;
    document.getElementById("skill" + (player + 1) + skill).innerHTML = "X";
    skills[skill].func();
    clearInterval(skill_interval[player][skill]);
}

function setTimer(t) {
    var timer  = document.getElementById("timer");
    var minute = ("0" + Math.floor(t / 60)).slice(-2);
    var second = ("0" + (t % 60)).slice(-2);
    timer.innerHTML = (minute + ":" + second);
};

function setIcon() {
    for (var i = 0; i < 4; i++) {
        var icon = document.getElementById("skill1" + i);
        icon.style.backgroundImage = 'url("' + skills[i].icon + '")';
        var icon = document.getElementById("skill2" + i);
        icon.style.backgroundImage = 'url("' + skills[i].icon + '")';
    }
}

function getRandomSkill() {
    return default_skills.sort(function() { return Math.random() < 0.8; })[0];
}

function init() {
    document.getElementById("playground").style.backgroundImage = background_image;
    if (round == 5)
        location.reload();
    skills = [];
    for (var i = 0; i < team.length; i++)
        skills.push(team_skills[team[i]]);
    number = 4 - skills.length;
    for (var i = 0; i < number; i++)
        skills.push(getRandomSkill());
    setIcon();
    ball0  = ball.create(width / 2, height / 2, ball_radius, ball_speed, Math.random() * Math.PI * 2, ball_color, ball_func);
    board1 = board.create(board_margin, height / 2, board_length, board_speed, board1_color);
    board2 = board.create(width - board_margin, height / 2, board_length, board_speed, board2_color);
    score1 = 0;
    score2 = 0;
    document.getElementById("score1").innerHTML = score1;
    document.getElementById("score2").innerHTML = score2;
    skill_time = [[], []];
    for (var i = 0; i < 4; i++) {
        document.getElementById("skill1" + i).innerHTML = "";
        document.getElementById("skill2" + i).innerHTML = "";
        skill_time[0].push(skills[i].time);
        skill_time[1].push(skills[i].time);
    }
    skill_using = [Array(skills.length).fill(false), Array(skills.length).fill(false)];
    skill_available = [Array(skills.length).fill(true), Array(skills.length).fill(true)];
    skill_interval = [Array(skills.length).fill(null), Array(skills.length).fill(null)];
    skill_balls = [];
    for (var i = 0; i < 2; i++)
        skill_balls.push(skill_ball.create(getRandomSkill()));
    playground_effect = playground_effects.sort(function() { return Math.random() < 0.8; })[0];
    playground_effect.init();
    game_over = true;
    setTimer(game_time);
    draw();
};

function start() {
    init();
    var time = game_time;
    interval = setInterval(function() {
        setTimer(--time);
        if (time <= 0) {
            game_over = true;
            round++;
            playground_effect.over();
            clearInterval(interval);
        }
    }, 1000);
    game_over = false;
    game();
};

function game() {
    if (!game_over) {
        context.clearRect(0, 0, width, height);
        playground_effect.func();
        for (var i = 0; i < skills.length; i++) {
            if (skill_using[0][i]) {
                skills[i].func(0);
            }
            if (skill_using[1][i]) {
                skills[i].func(1);
            }
        }
        for (var i = 0; i < skill_balls.length; i++) {
            skill_balls[i].update();
        }

        draw();
        requestAnimationFrame(game);
    }
};

function draw() {
    ball0.check();
    ball0.update();
    board1.update();
    board2.update();


    ball0.draw();
    board1.draw();
    board2.draw();
};

var skill_ball = {
    skill: null,
    ball: null,
    time: null,
    interval: null,
    using: null,
    available: true,
    create: function(skill) {
        obj = Object.create(this);
        obj.skill = skill;
        var x = Math.floor(Math.random() * width * 0.6 + width * 0.2);
        var y = Math.floor(Math.random() * height * 0.6 + height * 0.2);
        obj.ball = ball.create(width / 2, height / 2, ball_radius, ball_speed / 5, Math.random() * 2 * Math.PI, ball_color, ball_func);
        obj.ball.img = obj.skill.icon;
        obj.time = obj.skill.time;
        obj.using = [false, false];
        return obj;
    },

    update: function() {
        if (this.available && this.ball.touchBoard1()) {
            this.available = false;
            this.using[0] = true;
            this.interval = setInterval(function(tmp) {
                if (--tmp.time <= 0) {
                    tmp.using[0] = false;
                    tmp.skill.func();
                    clearInterval(tmp.interval);
                }
            }, 1000, this);
            if (this.time <= 0) {
                this.using[0] = false;
                this.skill.func();
                clearInterval(this.interval);
            }
        }
        if (this.available && this.ball.touchBoard2()) {
            this.available = false;
            this.using[1] = true;
            this.interval = setInterval(function(tmp) {
                if (--tmp.time <= 0) {
                    tmp.using[1] = false;
                    tmp.skill.func();
                    clearInterval(tmp.interval);
                }
            }, 1000, this);
            if (this.time <= 0) {
                this.using[1] = false;
                this.skill.func();
                clearInterval(this.interval);
            }
        }
        if (this.using[0]) {
            this.skill.func(0);
        }
        else if (this.using[1]) {
            this.skill.func(1);
        }
        else if (this.available){
            this.ball.check(false);
            this.ball.update();
            this.ball.draw();
        }
    }
}

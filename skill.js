var speedup = function(i) {
    if (skill_using[0][i]) {
        if (ball0.position.getX() > width / 2) {
            ball0.velocity.setLength(ball_speed * 4);
        }
        else {
            ball0.velocity.setLength(ball_speed / 2);
        }
    }
    if (skill_using[1][i]) {
        if (ball0.position.getX() < width / 2) {
            ball0.velocity.setLength(ball_speed * 4);
        }
        else {
            ball0.velocity.setLength(ball_speed / 2);
        }
    }
    if (!skill_using[0][i] && !skill_using[1][i])
        ball0.velocity.setLength(ball_speed);
}

var disappear = function(i) {
    if (skill_using[0][i]) {
        if (ball0.position.getX() > width / 4 && ball0.position.getX() < width * 3 / 4) {
            if (ball0.velocity.getX() > 0)
                ball0.visible = false;
            else
                ball0.visible = true;
        }
        else {
            ball0.visible = true;
        }
    }
    if (skill_using[1][i]) {
        if (ball0.position.getX() > width / 4 && ball0.position.getX() < width * 3 / 4) {
            if (ball0.velocity.getX() < 0)
                ball0.visible = false;
            else
                ball0.visible = true;
        }
        else {
            ball0.visible = true;
        }
    }
    if (!skill_using[0][i] && !skill_using[1][i])
        ball0.visible = true;
}

var smallboard = function(i) {
    if (skill_using[0][i]) {
        board2.min = board2.position.getY() - board2.length / 2;
        board2.max = board2.position.getY() + board2.length / 2;
    }
    else {
        board2.min = board2.position.getY() - board2.length;
        board2.max = board2.position.getY() + board2.length;
    }
    if (skill_using[1][i]) {
        board1.min = board1.position.getY() - board1.length / 2;
        board1.max = board1.position.getY() + board1.length / 2;
    }
    else {
        board1.min = board1.position.getY() - board1.length;
        board1.max = board1.position.getY() + board1.length;
    }
}

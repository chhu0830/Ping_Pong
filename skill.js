function speedUp(i) {
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

function disappear(i) {
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

function bigBoard(i) {
    if (skill_using[0][i]) {
        board1.length = board_length * 2;
    }
    else {
        board1.length = board_length;
    }
    if (skill_using[1][i]) {
        board2.length = board_length * 2;
    }
    else {
        board2.length = board_length;
    }
}

function variantBall(i) {
    if (skill_using[0][i]) {
        if (ball0.position.getX() < width / 2) {
            ball0.radius = ball_radius * 5;
        }
        else {
            ball0.radius = ball_radius / 5;
        }
    }
    if (skill_using[1][i]) {
        if (ball0.position.getX() > width / 2) {
            ball0.radius = ball_radius * 5;
        }
        else {
            ball0.radius = ball_radius / 5;
        }
    }
    if (!skill_using[0][i] && !skill_using[1][i]) {
        ball0.radius = ball_radius;
    }
}

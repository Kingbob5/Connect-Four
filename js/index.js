var turnCount = 0;
var color1 = '';
var color2 = '';

function space(x) {
    return $('.board table td').eq(x);
}

function top(x) {
    return $('.board table th').eq(x);
}

function colorCheck() {
    if (color1 === 'green') {
        $(".chip1").css("background-color", "green");
        $('.1').text('player 1 (green)');
    }
    else if (color1 === 'blue') {
        $(".chip1").css("background-color", "blue");
        $('.1').text('player 1 (blue)');
    }
    else if (color1 === 'yellow') {
        $(".chip1").css("background-color", "yellow");
        $('.1').text('player 1 (yellow)');
    }
    else if (color1 === 'brown') {
        $(".chip1").css("background-color", "brown");
        $('.1').text('player 1 (brown)');
    }
    else if (color1 === 'red') {
        $(".chip1").css("background-color", "red");
        $('.1').text('player 1 (red)');
    }
    else if (color1 === 'orange') {
        $(".chip1").css("background-color", "orange");
        $('.1').text('player 1 (orange)');
    }
    if (color2 === 'green') {
        $(".chip2").css("background-color", "green");
        $('.2').text('player 2 (green)');
    }
    else if (color2 === 'blue') {
        $(".chip2").css("background-color", "blue");
        $('.2').text('player 2 (blue)');
    }
    else if (color2 === 'yellow') {
        $(".chip2").css("background-color", "yellow");
        $('.2').text('player 2 (yellow)');
    }
    else if (color2 === 'brown') {
        $(".chip2").css("background-color", "brown");
        $('.2').text('player 2 (brown)');
    }
    else if (color2 === 'red') {
        $(".chip2").css("background-color", "red");
        $('.2').text('player 2 (red)');
    }
    else if (color2 === 'orange') {
        $(".chip2").css("background-color", "orange");
        $('.2').text('player 2 (orange)');
    }
    
}

function checkRed1() {
    var turn = 0;
    if ((!space(35).hasClass('chip1'))&&(!space(35).hasClass('chip2')) && (turn === 0)) {
        space(35).addClass('chip1');
        turnCount++;
        turn++;
    }
    else if ((!space(28).hasClass('chip1'))&&(!space(28).hasClass('chip2')) && (turn === 0)) {
        space(28).addClass('chip1');
        turnCount++;
        turn++;
    }
    else if ((!space(21).hasClass('chip1'))&&(!space(21).hasClass('chip2')) && (turn === 0)) {
        space(21).addClass('chip1');
        turnCount++;
        turn++;
    }
    else if ((!space(14).hasClass('chip1'))&&(!space(14).hasClass('chip2')) && (turn === 0)) {
        space(14).addClass('chip1');
        turnCount++;
        turn++;
    }
    else if ((!space(7).hasClass('chip1'))&&(!space(7).hasClass('chip2')) && (turn === 0)) {
        space(7).addClass('chip1');
        turnCount++;
        turn++;
    }
    else if ((!space(0).hasClass('chip1'))&&(!space(0).hasClass('chip2')) && (turn === 0)) {
        space(0).addClass('chip1');
        turnCount++;
        turn++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}
function checkYellow1() {
    var turn = 0;
    if ((!space(35).hasClass('chip1'))&&(!space(35).hasClass('chip2')) && (turn === 0)) {
        space(35).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(28).hasClass('chip1'))&&(!space(28).hasClass('chip2')) && (turn === 0)) {
        space(28).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(21).hasClass('chip1'))&&(!space(21).hasClass('chip2')) && (turn === 0)) {
        space(21).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(14).hasClass('chip1'))&&(!space(14).hasClass('chip2')) && (turn === 0)) {
        space(14).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(7).hasClass('chip1'))&&(!space(7).hasClass('chip2')) && (turn === 0)) {
        space(7).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(0).hasClass('chip1'))&&(!space(0).hasClass('chip2')) && (turn === 0)) {
        space(0).addClass('chip2');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}

function checkRed2() {
    var turn = 0;
    if ((!space(36).hasClass('chip1'))&&(!space(36).hasClass('chip2')) && (turn === 0)) {
        space(36).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(29).hasClass('chip1'))&&(!space(29).hasClass('chip2')) && (turn === 0)) {
        space(29).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(22).hasClass('chip1'))&&(!space(22).hasClass('chip2')) && (turn === 0)) {
        space(22).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(15).hasClass('chip1'))&&(!space(15).hasClass('chip2')) && (turn === 0)) {
        space(15).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(8).hasClass('chip1'))&&(!space(8).hasClass('chip2')) && (turn === 0)) {
        space(8).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(1).hasClass('chip1'))&&(!space(1).hasClass('chip2')) && (turn === 0)) {
        space(1).addClass('chip1');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}
function checkYellow2() {
    var turn = 0;
    if ((!space(36).hasClass('chip1'))&&(!space(36).hasClass('chip2')) && (turn === 0)) {
        space(36).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(29).hasClass('chip1'))&&(!space(29).hasClass('chip2')) && (turn === 0)) {
        space(29).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(22).hasClass('chip1'))&&(!space(22).hasClass('chip2')) && (turn === 0)) {
        space(22).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(15).hasClass('chip1'))&&(!space(15).hasClass('chip2')) && (turn === 0)) {
        space(15).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(8).hasClass('chip1'))&&(!space(8).hasClass('chip2')) && (turn === 0)) {
        space(8).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(1).hasClass('chip1'))&&(!space(1).hasClass('chip2')) && (turn === 0)) {
        space(1).addClass('chip2');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}

function checkRed3() {
    var turn = 0;
    if ((!space(37).hasClass('chip1'))&&(!space(37).hasClass('chip2')) && (turn === 0)) {
        space(37).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(30).hasClass('chip1'))&&(!space(30).hasClass('chip2')) && (turn === 0)) {
        space(30).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(23).hasClass('chip1'))&&(!space(23).hasClass('chip2')) && (turn === 0)) {
        space(23).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(16).hasClass('chip1'))&&(!space(16).hasClass('chip2')) && (turn === 0)) {
        space(16).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(9).hasClass('chip1'))&&(!space(9).hasClass('chip2')) && (turn === 0)) {
        space(9).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(2).hasClass('chip1'))&&(!space(2).hasClass('chip2')) && (turn === 0)) {
        space(2).addClass('chip1');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}
function checkYellow3() {
    var turn = 0;
    if ((!space(37).hasClass('chip1'))&&(!space(37).hasClass('chip2')) && (turn === 0)) {
        space(37).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(30).hasClass('chip1'))&&(!space(30).hasClass('chip2')) && (turn === 0)) {
        space(30).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(23).hasClass('chip1'))&&(!space(23).hasClass('chip2')) && (turn === 0)) {
        space(23).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(16).hasClass('chip1'))&&(!space(16).hasClass('chip2')) && (turn === 0)) {
        space(16).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(9).hasClass('chip1'))&&(!space(9).hasClass('chip2')) && (turn === 0)) {
        space(9).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(2).hasClass('chip1'))&&(!space(2).hasClass('chip2')) && (turn === 0)) {
        space(2).addClass('chip2');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}

function checkRed4() {
    var turn = 0;
    if ((!space(38).hasClass('chip1'))&&(!space(38).hasClass('chip2')) && (turn === 0)) {
        space(38).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(31).hasClass('chip1'))&&(!space(31).hasClass('chip2')) && (turn === 0)) {
        space(31).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(24).hasClass('chip1'))&&(!space(24).hasClass('chip2')) && (turn === 0)) {
        space(24).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(17).hasClass('chip1'))&&(!space(17).hasClass('chip2')) && (turn === 0)) {
        space(17).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(10).hasClass('chip1'))&&(!space(10).hasClass('chip2')) && (turn === 0)) {
        space(10).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(3).hasClass('chip1'))&&(!space(3).hasClass('chip2')) && (turn === 0)) {
        space(3).addClass('chip1');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}
function checkYellow4() {
    var turn = 0;
    if ((!space(38).hasClass('chip1'))&&(!space(38).hasClass('chip2')) && (turn === 0)) {
        space(38).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(31).hasClass('chip1'))&&(!space(31).hasClass('chip2')) && (turn === 0)) {
        space(31).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(24).hasClass('chip1'))&&(!space(24).hasClass('chip2')) && (turn === 0)) {
        space(24).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(17).hasClass('chip1'))&&(!space(17).hasClass('chip2')) && (turn === 0)) {
        space(17).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(10).hasClass('chip1'))&&(!space(10).hasClass('chip2')) && (turn === 0)) {
        space(10).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(3).hasClass('chip1'))&&(!space(3).hasClass('chip2')) && (turn === 0)) {
        space(3).addClass('chip2');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}

function checkRed5() {
    var turn = 0;
    if ((!space(39).hasClass('chip1'))&&(!space(39).hasClass('chip2')) && (turn === 0)) {
        space(39).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(32).hasClass('chip1'))&&(!space(32).hasClass('chip2')) && (turn === 0)) {
        space(32).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(25).hasClass('chip1'))&&(!space(25).hasClass('chip2')) && (turn === 0)) {
        space(25).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(18).hasClass('chip1'))&&(!space(18).hasClass('chip2')) && (turn === 0)) {
        space(18).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(11).hasClass('chip1'))&&(!space(11).hasClass('chip2')) && (turn === 0)) {
        space(11).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(4).hasClass('chip1'))&&(!space(4).hasClass('chip2')) && (turn === 0)) {
        space(4).addClass('chip1');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}
function checkYellow5() {
    var turn = 0;
    if ((!space(39).hasClass('chip1'))&&(!space(39).hasClass('chip2')) && (turn === 0)) {
        space(39).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(32).hasClass('chip1'))&&(!space(32).hasClass('chip2')) && (turn === 0)) {
        space(32).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(25).hasClass('chip1'))&&(!space(25).hasClass('chip2')) && (turn === 0)) {
        space(25).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(18).hasClass('chip1'))&&(!space(18).hasClass('chip2')) && (turn === 0)) {
        space(18).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(11).hasClass('chip1'))&&(!space(11).hasClass('chip2')) && (turn === 0)) {
        space(11).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(4).hasClass('chip1'))&&(!space(4).hasClass('chip2')) && (turn === 0)) {
        space(4).addClass('chip2');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}

function checkRed6() {
    var turn = 0;
    if ((!space(40).hasClass('chip1'))&&(!space(40).hasClass('chip2')) && (turn === 0)) {
        space(40).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(33).hasClass('chip1'))&&(!space(33).hasClass('chip2')) && (turn === 0)) {
        space(33).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(26).hasClass('chip1'))&&(!space(26).hasClass('chip2')) && (turn === 0)) {
        space(26).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(19).hasClass('chip1'))&&(!space(19).hasClass('chip2')) && (turn === 0)) {
        space(19).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(12).hasClass('chip1'))&&(!space(12).hasClass('chip2')) && (turn === 0)) {
        space(12).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(5).hasClass('chip1'))&&(!space(5).hasClass('chip2')) && (turn === 0)) {
        space(5).addClass('chip1');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}
function checkYellow6() {
    var turn = 0;
    if ((!space(40).hasClass('chip1'))&&(!space(40).hasClass('chip2')) && (turn === 0)) {
        space(40).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(33).hasClass('chip1'))&&(!space(33).hasClass('chip2')) && (turn === 0)) {
        space(33).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(26).hasClass('chip1'))&&(!space(26).hasClass('chip2')) && (turn === 0)) {
        space(26).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(19).hasClass('chip1'))&&(!space(19).hasClass('chip2')) && (turn === 0)) {
        space(19).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(12).hasClass('chip1'))&&(!space(12).hasClass('chip2')) && (turn === 0)) {
        space(12).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(5).hasClass('chip1'))&&(!space(5).hasClass('chip2')) && (turn === 0)) {
        space(5).addClass('chip2');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}

function checkRed7() {
    var turn = 0;
    if ((!space(41).hasClass('chip1'))&&(!space(41).hasClass('chip2')) && (turn === 0)) {
        space(41).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(34).hasClass('chip1'))&&(!space(34).hasClass('chip2')) && (turn === 0)) {
        space(34).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(27).hasClass('chip1'))&&(!space(27).hasClass('chip2')) && (turn === 0)) {
        space(27).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(20).hasClass('chip1'))&&(!space(20).hasClass('chip2')) && (turn === 0)) {
        space(20).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(13).hasClass('chip1'))&&(!space(13).hasClass('chip2')) && (turn === 0)) {
        space(13).addClass('chip1');
        turn++;
        turnCount++;
    }
    else if ((!space(6).hasClass('chip1'))&&(!space(6).hasClass('chip2')) && (turn === 0)) {
        space(6).addClass('chip1');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}
function checkYellow7() {
    var turn = 0;
    if ((!space(41).hasClass('chip1'))&&(!space(41).hasClass('chip2')) && (turn === 0)) {
        space(41).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(34).hasClass('chip1'))&&(!space(34).hasClass('chip2')) && (turn === 0)) {
        space(34).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(27).hasClass('chip1'))&&(!space(27).hasClass('chip2')) && (turn === 0)) {
        space(27).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(20).hasClass('chip1'))&&(!space(20).hasClass('chip2')) && (turn === 0)) {
        space(20).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(13).hasClass('chip1'))&&(!space(13).hasClass('chip2')) && (turn === 0)) {
        space(13).addClass('chip2');
        turn++;
        turnCount++;
    }
    else if ((!space(6).hasClass('chip1'))&&(!space(6).hasClass('chip2')) && (turn === 0)) {
        space(6).addClass('chip2');
        turn++;
        turnCount++;
    }
    else {
        alert('You bozo idiot! You can\'t go there!');
    }
}
function filled(x) {
    if ((space(x).hasClass('chip1')) || (space(x).hasClass('chip2'))) {
        return true
    }
    else {
        return false
    }
}

function tie() {
    if (filled(0) && filled(1) && filled(2) && filled(3) && filled(4) && filled(5) && filled(6) && filled(7) && filled(8) && filled(9) &&
        filled(10) && filled(11) && filled(12) && filled(13) && filled(14) && filled(15) && filled(16) && filled(17) && filled(18) && filled(19) &&
        filled(20) && filled(21) && filled(22) && filled(23) && filled(24) && filled(25) && filled(26) && filled(27) && filled(28) && filled(29) &&
        filled(30) && filled(31) && filled(32) && filled(33) && filled(34) && filled(35) && filled(36) && filled(37) && filled(38) && filled(39) &&
        filled(40) && filled(41)) {
        return true
    }
    else {
        return false
    }

}

function red(x) { // for the reds
    return (space(x).hasClass('chip1'));
}

function checkWinnerRed() {
    if ((red(35) && red(28) && red(21) && red(14)) ||
       (red(7) && red(28) && red(21) && red(14)) ||
       (red(7) && red(0) && red(21) && red(14)) ||
       (red(36) && red(29) && red(22) && red(15)) ||
       (red(8) && red(29) && red(22) && red(15)) ||
       (red(8) && red(1) && red(22) && red(15)) ||
       (red(37) && red(30) && red(23) && red(16)) ||
       (red(9) && red(30) && red(23) && red(16)) ||
       (red(9) && red(2) && red(23) && red(16)) ||
       (red(38) && red(31) && red(24) && red(17)) ||
       (red(10) && red(31) && red(24) && red(17)) ||
       (red(10) && red(3) && red(24) && red(17)) ||
       (red(39) && red(32) && red(25) && red(18)) ||
       (red(11) && red(32) && red(25) && red(18)) ||
       (red(11) && red(4) && red(25) && red(18)) ||
       (red(40) && red(33) && red(26) && red(19)) ||
       (red(12) && red(33) && red(26) && red(19)) ||
       (red(12) && red(5) && red(26) && red(19)) ||
       (red(41) && red(34) && red(27) && red(20)) ||
       (red(13) && red(34) && red(27) && red(20)) ||
       (red(13) && red(6) && red(27) && red(20)) ||
       (red(0) && red(1) && red(2) && red(3)) ||
       (red(4) && red(1) && red(2) && red(3)) ||
       (red(4) && red(5) && red(2) && red(3)) ||
       (red(4) && red(5) && red(6) && red(3)) ||
       (red(7) && red(8) && red(9) && red(10)) ||
       (red(11) && red(8) && red(9) && red(10)) ||
       (red(11) && red(12) && red(9) && red(10)) ||
       (red(11) && red(12) && red(13) && red(10)) ||
       (red(14) && red(15) && red(16) && red(17)) ||
       (red(18) && red(15) && red(16) && red(17)) ||
       (red(18) && red(19) && red(16) && red(17)) ||
       (red(18) && red(19) && red(20) && red(17)) ||
       (red(21) && red(22) && red(23) && red(24)) ||
       (red(25) && red(22) && red(23) && red(24)) ||
       (red(25) && red(26) && red(23) && red(24)) ||
       (red(25) && red(26) && red(27) && red(24)) ||
       (red(28) && red(29) && red(30) && red(31)) ||
       (red(32) && red(29) && red(30) && red(31)) ||
       (red(32) && red(33) && red(30) && red(31)) ||
       (red(32) && red(33) && red(34) && red(31)) ||
       (red(35) && red(36) && red(37) && red(38)) ||
       (red(39) && red(36) && red(37) && red(38)) ||
       (red(39) && red(40) && red(37) && red(38)) ||
       (red(39) && red(40) && red(41) && red(38)) ||
       (red(0) && red(8) && red(16) && red(24)) ||
       (red(1) && red(9) && red(17) && red(25)) ||
       (red(2) && red(10) && red(18) && red(26)) ||
       (red(3) && red(11) && red(19) && red(27)) ||
       (red(7) && red(15) && red(23) && red(31)) ||
       (red(8) && red(16) && red(24) && red(32)) ||
       (red(9) && red(17) && red(25) && red(33)) ||
       (red(10) && red(18) && red(26) && red(34)) ||
       (red(14) && red(22) && red(30) && red(38)) ||
       (red(15) && red(23) && red(31) && red(39)) ||
       (red(16) && red(24) && red(32) && red(40)) ||
       (red(17) && red(25) && red(33) && red(41)) ||
       (red(3) && red(9) && red(15) && red(21)) ||
       (red(4) && red(10) && red(16) && red(22)) ||
       (red(5) && red(11) && red(17) && red(23)) ||
       (red(6) && red(12) && red(18) && red(24)) ||
       (red(10) && red(16) && red(22) && red(28)) ||
       (red(11) && red(17) && red(23) && red(29)) ||
       (red(12) && red(18) && red(24) && red(30)) ||
       (red(13) && red(19) && red(25) && red(31)) ||
       (red(17) && red(23) && red(29) && red(35)) ||
       (red(18) && red(24) && red(30) && red(36)) ||
       (red(19) && red(25) && red(31) && red(37)) ||
       (red(20) && red(26) && red(32) && red(38))) {
           alert ('player 1 wins');
       }
       if (tie()) {
        alert('It\'s a tie')
        location.reload();
       }
}

function yellow(x) { // for the yellows
    return (space(x).hasClass('chip2'));
}

function checkWinnerYellow() {
    if ((yellow(35) && yellow(28) && yellow(21) && yellow(14)) ||
       (yellow(7) && yellow(28) && yellow(21) && yellow(14)) ||
       (yellow(7) && yellow(0) && yellow(21) && yellow(14)) ||
       (yellow(36) && yellow(29) && yellow(22) && yellow(15)) ||
       (yellow(8) && yellow(29) && yellow(22) && yellow(15)) ||
       (yellow(8) && yellow(1) && yellow(22) && yellow(15)) ||
       (yellow(37) && yellow(30) && yellow(23) && yellow(16)) ||
       (yellow(9) && yellow(30) && yellow(23) && yellow(16)) ||
       (yellow(9) && yellow(2) && yellow(23) && yellow(16)) ||
       (yellow(38) && yellow(31) && yellow(24) && yellow(17)) ||
       (yellow(10) && yellow(31) && yellow(24) && yellow(17)) ||
       (yellow(10) && yellow(3) && yellow(24) && yellow(17)) ||
       (yellow(39) && yellow(32) && yellow(25) && yellow(18)) ||
       (yellow(11) && yellow(32) && yellow(25) && yellow(18)) ||
       (yellow(11) && yellow(4) && yellow(25) && yellow(18)) ||
       (yellow(40) && yellow(33) && yellow(26) && yellow(19)) ||
       (yellow(12) && yellow(33) && yellow(26) && yellow(19)) ||
       (yellow(12) && yellow(5) && yellow(26) && yellow(19)) ||
       (yellow(41) && yellow(34) && yellow(27) && yellow(20)) ||
       (yellow(13) && yellow(34) && yellow(27) && yellow(20)) ||
       (yellow(13) && yellow(6) && yellow(27) && yellow(20)) ||
       (yellow(0) && yellow(1) && yellow(2) && yellow(3)) ||
       (yellow(4) && yellow(1) && yellow(2) && yellow(3)) ||
       (yellow(4) && yellow(5) && yellow(2) && yellow(3)) ||
       (yellow(4) && yellow(5) && yellow(6) && yellow(3)) ||
       (yellow(7) && yellow(8) && yellow(9) && yellow(10)) ||
       (yellow(11) && yellow(8) && yellow(9) && yellow(10)) ||
       (yellow(11) && yellow(12) && yellow(9) && yellow(10)) ||
       (yellow(11) && yellow(12) && yellow(13) && yellow(10)) ||
       (yellow(14) && yellow(15) && yellow(16) && yellow(17)) ||
       (yellow(18) && yellow(15) && yellow(16) && yellow(17)) ||
       (yellow(18) && yellow(19) && yellow(16) && yellow(17)) ||
       (yellow(18) && yellow(19) && yellow(20) && yellow(17)) ||
       (yellow(21) && yellow(22) && yellow(23) && yellow(24)) ||
       (yellow(25) && yellow(22) && yellow(23) && yellow(24)) ||
       (yellow(25) && yellow(26) && yellow(23) && yellow(24)) ||
       (yellow(25) && yellow(26) && yellow(27) && yellow(24)) ||
       (yellow(28) && yellow(29) && yellow(30) && yellow(31)) ||
       (yellow(32) && yellow(29) && yellow(30) && yellow(31)) ||
       (yellow(32) && yellow(33) && yellow(30) && yellow(31)) ||
       (yellow(32) && yellow(33) && yellow(34) && yellow(31)) ||
       (yellow(35) && yellow(36) && yellow(37) && yellow(38)) ||
       (yellow(39) && yellow(36) && yellow(37) && yellow(38)) ||
       (yellow(39) && yellow(40) && yellow(37) && yellow(38)) ||
       (yellow(39) && yellow(40) && yellow(41) && yellow(38)) ||
       (yellow(0) && yellow(8) && yellow(16) && yellow(24)) ||
       (yellow(1) && yellow(9) && yellow(17) && yellow(25)) ||
       (yellow(2) && yellow(10) && yellow(18) && yellow(26)) ||
       (yellow(3) && yellow(11) && yellow(19) && yellow(27)) ||
       (yellow(7) && yellow(15) && yellow(23) && yellow(31)) ||
       (yellow(8) && yellow(16) && yellow(24) && yellow(32)) ||
       (yellow(9) && yellow(17) && yellow(25) && yellow(33)) ||
       (yellow(10) && yellow(18) && yellow(26) && yellow(34)) ||
       (yellow(14) && yellow(22) && yellow(30) && yellow(38)) ||
       (yellow(15) && yellow(23) && yellow(31) && yellow(39)) ||
       (yellow(16) && yellow(24) && yellow(32) && yellow(40)) ||
       (yellow(17) && yellow(25) && yellow(33) && yellow(41)) ||
       (yellow(3) && yellow(9) && yellow(15) && yellow(21)) ||
       (yellow(4) && yellow(10) && yellow(16) && yellow(22)) ||
       (yellow(5) && yellow(11) && yellow(17) && yellow(23)) ||
       (yellow(6) && yellow(12) && yellow(18) && yellow(24)) ||
       (yellow(10) && yellow(16) && yellow(22) && yellow(28)) ||
       (yellow(11) && yellow(17) && yellow(23) && yellow(29)) ||
       (yellow(12) && yellow(18) && yellow(24) && yellow(30)) ||
       (yellow(13) && yellow(19) && yellow(25) && yellow(31)) ||
       (yellow(17) && yellow(23) && yellow(29) && yellow(35)) ||
       (yellow(18) && yellow(24) && yellow(30) && yellow(36)) ||
       (yellow(19) && yellow(25) && yellow(31) && yellow(37)) ||
       (yellow(20) && yellow(26) && yellow(32) && yellow(38))) {
           alert ('player 2 wins')
       }
}

function main () { 
    $('.options1').hide();
    $('.options2').hide();
    $('.1').on('click', function() {
        $('.options1').toggleClass('selected'); 
        $('.options1').slideToggle(400);
    });
    
    $('.green').on('click', function() {
        $('.options1').slideToggle(400);
        color1 = 'green';
        colorCheck();
    });
    $('.red').on('click', function() {
        $('.options1').slideToggle(400);
        color1 = 'red';
        colorCheck();
    });
    $('.orange').on('click', function() {
        $('.options1').slideToggle(400);
        color1 = 'orange';
        colorCheck();
    });
    $('.yellow').on('click', function() {
        $('.options1').slideToggle(400);
        color1 = 'yellow';
        colorCheck();
    });
    $('.blue').on('click', function() {
        $('.options1').slideToggle(400);
        color1 = 'blue';
        colorCheck();
    });
    $('.brown').on('click', function() {
        $('.options1').slideToggle(400);
        color1 = 'brown';
        colorCheck();
    });
    
    $('.2').on('click', function() {
        $('.options2').toggleClass('selected'); 
        $('.options2').slideToggle(400);
    });
    
    $('.green2').on('click', function() {
        $('.options2').slideToggle(400);
        color2 = 'green';
        colorCheck();
    });
    $('.red2').on('click', function() {
        $('.options2').slideToggle(400);
        color2 = 'red';
        colorCheck();
    });
    $('.orange2').on('click', function() {
        $('.options2').slideToggle(400);
        color2 = 'orange';
        colorCheck();
    });
    $('.yellow2').on('click', function() {
        $('.options2').slideToggle(400);
        color2 = 'yellow';
        colorCheck();
    });
    $('.blue2').on('click', function() {
        $('.options2').slideToggle(400);
        color2 = 'blue';
        colorCheck();
    });
    $('.brown2').on('click', function() {
        $('.options2').slideToggle(400);
        color2 = 'brown';
        colorCheck();
    });
    
    
    $('.reset').on('click', function() {
        location.reload();
    });
    
    top(0).on('click', function() {
        if (turnCount % 2 === 0) {
          colorCheck();
          checkRed1();
          colorCheck();
        }
        else if ((turnCount % 2 === 1)&&(!space(0).hasClass('chip1'))) {
          colorCheck();
          checkYellow1();
          colorCheck();
        }
        setTimeout(function () {checkWinnerRed()}, 500);
        setTimeout(function () {checkWinnerYellow()}, 500);
        if (turnCount % 2 === 0) {
          $('.turn').text('It is player 1\'s turn')
        }
        else if (turnCount % 2 === 1) {
          $('.turn').text('It is player 2\'s turn')
        }
    });
    
    top(1).on('click', function() {
        if (turnCount % 2 === 0) {
          colorCheck();
          checkRed2();
          colorCheck();
        }
        else if ((turnCount % 2 === 1)&&(!space(0).hasClass('chip1'))) {
          colorCheck(); 
          checkYellow2();
          colorCheck();
        }
        setTimeout(function() {checkWinnerRed()}, 500);
        setTimeout(function () {checkWinnerYellow()}, 500);
        if (turnCount % 2 === 0) {
          $('.turn').text('It is player 1\'s turn')
        }
        else if (turnCount % 2 === 1) {
          $('.turn').text('It is player 2\'s turn')
        }
    });
    
    top(2).on('click', function() {
        if (turnCount % 2 === 0) {
          colorCheck();
          checkRed3();
          colorCheck();
        }
        else if ((turnCount % 2 === 1)&&(!space(0).hasClass('chip1'))) {
          colorCheck();
          checkYellow3();
          colorCheck();
        }
        setTimeout(function () {checkWinnerRed()}, 500);
        setTimeout(function () {checkWinnerYellow()}, 500);
        if (turnCount % 2 === 0) {
          $('.turn').text('It is player 1\'s turn')
        }
        else if (turnCount % 2 === 1) {
          $('.turn').text('It is player 2\'s turn')
        }
    });
    
    top(3).on('click', function() {
        if (turnCount % 2 === 0) {
          colorCheck();
          checkRed4();
          colorCheck();
        }
        else if ((turnCount % 2 === 1)&&(!space(0).hasClass('chip1'))) {
          colorCheck();
          checkYellow4();
          colorCheck();
        }
        setTimeout(function () {checkWinnerRed()}, 500);
        setTimeout(function () {checkWinnerYellow()}, 500);
        if (turnCount % 2 === 0) {
          $('.turn').text('It is player 1\'s turn')
        }
        else if (turnCount % 2 === 1) {
          $('.turn').text('It is player 2\'s turn')
        }
    });
    
    top(4).on('click', function() {
        if (turnCount % 2 === 0) {
          colorCheck();
          checkRed5();
          colorCheck();
        }
        else if ((turnCount % 2 === 1)&&(!space(0).hasClass('chip1'))) {
          colorCheck();
          checkYellow5();
          colorCheck();
        }
        setTimeout(function () {checkWinnerRed()}, 500);
        setTimeout(function () {checkWinnerYellow()}, 500);
        if (turnCount % 2 === 0) {
          $('.turn').text('It is player 1\'s turn')
        }
        else if (turnCount % 2 === 1) {
          $('.turn').text('It is player 2\'s turn')
        }
    });
    
    top(5).on('click', function() {
        if (turnCount % 2 === 0) {
          colorCheck();
          checkRed6();
          colorCheck();
        }
        else if ((turnCount % 2 === 1)&&(!space(0).hasClass('chip1'))) {
          colorCheck();
          checkYellow6();
          colorCheck();
        }
        setTimeout(function () {checkWinnerRed()}, 500);
        setTimeout(function () {checkWinnerYellow()}, 500);
        if (turnCount % 2 === 0) {
          $('.turn').text('It is player 1\'s turn')
        }
        else if (turnCount % 2 === 1) {
          $('.turn').text('It is player 2\'s turn')
        }
    });
    
    top(6).on('click', function() {
        if (turnCount % 2 === 0) {
          colorCheck();
          checkRed7();
          colorCheck();
        }
        else if ((turnCount % 2 === 1)&&(!space(0).hasClass('chip1'))) {
          colorCheck();
          checkYellow7();
          colorCheck();
        }
        setTimeout(function () {checkWinnerRed()}, 500);
        setTimeout(function () {checkWinnerYellow()}, 500);
        if (turnCount % 2 === 0) {
          $('.turn').text('It is player 1\'s turn')
        }
        else if (turnCount % 2 === 1) {
          $('.turn').text('It is player 2\'s turn')
        }
    });
}

$(document).ready(main);
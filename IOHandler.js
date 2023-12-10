var freeze = false;
var moveup =false;
var movedown =false;
var moveleft =false;
var moveright =false;
function onMouseClick(event){
    freeze = !freeze;
}

document.addEventListener('click', onMouseClick, false);

function onKeydown(event){
    if(event.keyCode == 32){
        freeze = true;
    }
    else if (event.key === 'w' || event.key === 'W') {
        moveup=true;
    } else if (event.key === 'a' || event.key === 'A') {
      moveleft=true;
    } else if (event.key === 's' || event.key === 'S') {
        movedown=true;
    } else if (event.key === 'd' || event.key === 'D') {
        moveright=true;
    }
}

function onKeyup(event){
    if(event.keyCode == 32){
        freeze = false;
    }
    else if (event.key === 'w' || event.key === 'W') {
        moveup=false;
    } else if (event.key === 'a' || event.key === 'A') {
      moveleft=false;
    } else if (event.key === 's' || event.key === 'S') {
        movedown=false;
    } else if (event.key === 'd' || event.key === 'D') {
        moveright=false;
    }
}

document.addEventListener('keydown', onKeydown, false);
document.addEventListener('keyup', onKeyup, false);
let playTime = 30;

const timer = setInterval( function(){
    playTime--;
    console.log(playTime);
    if( playTime <= 0){
        clearInterval(timer);
        alert("Time's out!")
    }
}, 1000);
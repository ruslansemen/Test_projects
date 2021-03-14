'use srick';

function timerHandler() {
    alert("Hello! What are you doing just sitting there staring at a blank screen?");
    setTimeout(timerHandler, 2000);
}
setTimeout(timerHandler, 2000);
console.log("Connected");
document.addEventListener('keydown',(e)=>{
    let drumSound=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!drumSound)return;
    drumSound.currentTime=0;
    drumSound.play();
    key.classList.toggle('playing');
    //setTimeout(()=>{key.classList.toggle('playing');},70)   //my idea
});
//idea given in 30days of Js
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


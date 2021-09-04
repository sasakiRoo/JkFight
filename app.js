//element selection
const hero = document.querySelector('.hero')
let nilai = 0
const point = document.querySelector('.score')
let skor = 1

const c1 = document.querySelector ('.c1')
const c2 = document.querySelector('.c2')
const en1 = document.querySelector('.en1')
const en2 = document.querySelector('.en2')


const container = document.querySelector('.container')
const cntainer = document.querySelector('.container-a')

//----------

//element start behaviour
container.style.display = 'none'
cntainer.style.display = 'block'
en1.style.display = 'none'
en2.style.display = 'none'
//-------


//element behaviour when it's clicked
hero.addEventListener('click', () => {
  nilai++
  bg2()
})

c1.addEventListener('click', ()=>{
  setTimeout(function() {
    container.style.display = 'block'
    cntainer.style.display = 'none'
    en1.style.display = 'block'
  }, 2000);
})


c2.addEventListener('click', ()=>{
  setTimeout(function() {
    container.style.display = 'block'
    cntainer.style.display = 'none'
    en2.style.display = 'block'
  }, 2000);
  
})




function bg2(){
 if (nilai % 2 == 0){
  hero.classList.add('hero2')
  play()
 }else{
  hero.classList.remove('hero2')
 }
}
//----------


//audio play function
function play() {
  point.innerText = skor++;
  var audio = new Audio('sfx.mp3');
  audio.play();
}


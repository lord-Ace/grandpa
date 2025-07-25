const play = document.getElementById('play')
const song = document.getElementById('song')
const body = document.getElementById('body')

play.addEventListener('click', function(){
  if (song.paused){
    song.play()
    song.volume = 0.2
  } else{
    song.pause()
  }
})
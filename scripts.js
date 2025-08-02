document.addEventListener("DOMContentLoaded", function () {
const play = document.getElementById('play')
const song = document.getElementById('song')
const body = document.getElementById('gallery')

let imgCount = 0
// Create 100 images with the specified source and class
while (imgCount <= 52) {
  imgCount++
  const img = document.createElement('img')
  img.src = `https://res.cloudinary.com/dvjmqedze/image/upload/${imgCount}.png`
  img.classList.add('gallery')
  body.appendChild(img)
}
play.addEventListener('click', function(){
  if (song.paused){
    song.play()
    song.volume = 0.2
  } else{
    song.pause()
  }
})
})
// https://res.cloudinary.com/dvjmqedze/image/upload/twelve.png


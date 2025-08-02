document.addEventListener("DOMContentLoaded", function () {
const play = document.getElementById('play')
const song = document.getElementById('song')
const body = document.getElementById('gallery')
// Ensure the song is paused initially

// Add an event listener to the play button
if (play) {
  play.addEventListener('mouseover', function() {
    play.style.cursor = 'pointer'
    console.log('Mouse over play button')
    play.addEventListener('click', function(){
      if (song.paused){
        song.play()
        song.volume = 0.2
      } else{
        song.pause()
      }
    })
  })
}

let imgCount = 0
// Create 100 images with the specified source and class
while (imgCount <= 51) {
  imgCount++
  const img = document.createElement('img')
  img.src = `https://res.cloudinary.com/dvjmqedze/image/upload/${imgCount}.webp`
  img.classList.add('gallery')
  body.appendChild(img)
}
})
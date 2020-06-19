// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
   setEventListeners()
})

const setEventListeners = () => {
  const glyphs = document.querySelectorAll('.like-glyph')
  for (let glyph of glyphs) {
    glyph.addEventListener('click', postLike)
  } 
}

const postLike = event => {
  const glyph = event.target 
  mimicServerCall()
  .then(resp => {
    glyph.innerHTML = glyph.innerHTML === EMPTY_HEART ?  FULL_HEART : EMPTY_HEART 
    glyph.classList.toggle('activated-heart')
  })

  .catch(error => {
    const modalDiv = document.getElementById('modal')
    const modalP = document.getElementById('modal-message')
    modalDiv.classList.remove('hidden')
    modalP.innerText = error 
    setTimeout(() => modalDiv.classList.add('hidden'), 5000)
    
  })
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Your code here
let dodger = document.getElementById('dodger')
dodger.style.backgroundColor = '#FF69B4'
dodger.style.left
dodger.style.bottom = '0px'

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight(){
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

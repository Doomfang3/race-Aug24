/* window.onload = function () {
}; */

window.addEventListener('load', () => {
  const startButton = document.getElementById('start-button')
  const restartButton = document.getElementById('restart-button')

  let game

  function startGame() {
    console.log('start game')
    game = new Game()
    game.start()
  }

  startButton.addEventListener('click', function () {
    startGame()
  })

  restartButton.addEventListener('click', function () {
    startGame()
  })

  document.addEventListener('keydown', event => {
    if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
      game.player.directionX = -1
    }
    if (event.code === 'KeyD' || event.code === 'ArrowRight') {
      game.player.directionX = 1
    }
  })

  document.addEventListener('keyup', event => {
    if ((event.code === 'KeyA' || event.code === 'ArrowLeft') && game.player.directionX < 0) {
      game.player.directionX = 0
    }
    if ((event.code === 'KeyD' || event.code === 'ArrowRight') && game.player.directionX > 0) {
      game.player.directionX = 0
    }
  })
})

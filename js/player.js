class Player {
  constructor(gamescreen) {
    this.gamescreen = gamescreen
    this.width = 40
    this.height = 80
    this.left = gamescreen.clientWidth / 2 - this.width / 2
    this.top = gamescreen.clientHeight - this.height - 50
    this.directionX = 0 // -1 0 1
    this.speed = 5
    this.element = document.createElement('img')

    this.element.src = '../images/car.png'
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`

    this.element.style.position = 'absolute'
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`

    this.gamescreen.appendChild(this.element)
  }

  render() {
    this.move()
    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`
  }

  move() {
    this.left += this.directionX * this.speed
    if (this.left < GRASS_WIDTH) {
      this.left = GRASS_WIDTH
    }
    if (this.left > this.gamescreen.clientWidth - this.width - GRASS_WIDTH) {
      this.left = this.gamescreen.clientWidth - this.width - GRASS_WIDTH
    }
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect()
    const obstacleRect = obstacle.element.getBoundingClientRect()

    return (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    )
  }
}

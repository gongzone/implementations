const calculateVector = (origin, length, angle) => {
  return {
    x: length * Math.sin(angle) + origin.x,
    y: length * Math.cos(angle) + origin.y + 5,
  };
};

class Pendulum {
  constructor(fullWidth, fullHeight) {
    this.length = fullHeight / 2;
    this.angle = Math.PI / 4;
    this.gravity = 0.001;
    this.angularVelocity = 0;
    this.angularAccerelation = 0;

    this.origin = {
      x: fullWidth / 2,
      y: -5,
    };

    this.vector = calculateVector(this.origin, this.length, this.angle);
  }
  drawLine(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;
    ctx.moveTo(this.origin.x, this.origin.y);
    ctx.lineTo(this.vector.x, this.vector.y);
    ctx.stroke();
    ctx.closePath();
  }
  drawWeight(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(this.vector.x, this.vector.y, 40, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }
  draw(ctx) {
    this.drawLine(ctx);
    this.drawWeight(ctx);
    this.update();
  }
  update() {
    this.angularAccerelation = -1 * this.gravity * Math.sin(this.angle);
    this.angularVelocity += this.angularAccerelation;
    this.angle += this.angularVelocity;
    this.vector = calculateVector(this.origin, this.length, this.angle);
  }
}

export default Pendulum;

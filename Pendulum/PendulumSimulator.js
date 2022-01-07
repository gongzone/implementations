class Vector {
  constructor() {
    this.x;
    this.y;
  }
}

class PendulumSimulator {
  constructor(fullWidth, ctx) {
    this.ctx = ctx;

    // 정적 데이터
    this.mass = 0.01;
    this.length = 400;
    this.gravity = 0.001;
    this.damping = 0.992;

    // 동적 데이터
    this.angle = Math.PI / 4;
    this.angularVelocity = 0;
    this.angularAccerelation = 0;

    // Positions
    this.origin = {
      x: fullWidth / 2,
      y: -5,
    };

    this.vector = {
      x: this.length * Math.sin(this.angle) + this.origin.x,
      y: this.length * Math.cos(this.angle) + this.origin.y + 5,
    };

    // 객체 인스턴스 생성
    this.line = new Line(this.origin, this.vector);
    this.ball = new Ball(this.vector);
  }
  run() {
    this.line.draw(this.ctx);
    this.ball.draw(this.ctx);
    this.update();
  }
  update() {
    this.angularAccerelation = -1 * this.gravity * Math.sin(this.angle);
    this.angularVelocity += this.angularAccerelation;
    this.angle += this.angularVelocity;
    this.angularVelocity *= this.damping;

    this.vector = {
      x: this.length * Math.sin(this.angle) + this.origin.x,
      y: this.length * Math.cos(this.angle) + this.origin.y + 5,
    };

    this.line.vector = this.vector;
    this.ball.vector = this.vector;
  }
}

class Line {
  constructor(origin, vector) {
    this.origin = origin;
    this.vector = vector;

    this.lineWidth = 8;
    this.color = "orange";
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.moveTo(this.origin.x, this.origin.y);
    ctx.lineTo(this.vector.x, this.vector.y);
    ctx.stroke();
    ctx.closePath();
  }
}

class Ball {
  constructor(vector) {
    this.vector = vector;

    this.radius = 40;
    this.color = "orange";
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.vector.x, this.vector.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }
}

export default PendulumSimulator;

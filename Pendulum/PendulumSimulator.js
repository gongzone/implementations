class PendulumSimulator {
  constructor(fullWidth, ctx) {
    this.ctx = ctx;

    // 정적 데이터
    this.length = 400;
    this.gravity = 0.00098;
    //this.damping = 0.997;

    // 동적 데이터
    this.angle = Math.PI / 4;
    this.angularVelocity = 0;
    this.angularAccerelation = 0;

    // Pivot Position
    this.origin = {
      x: fullWidth / 2,
      y: -5,
    };

    // Target Position
    this.vector = {
      x: this.length * Math.sin(this.angle) + this.origin.x,
      y: this.length * Math.cos(this.angle) + this.origin.y + 5,
    };

    // 객체 인스턴스 생성
    this.line = new Line(this.origin, this.vector);
    this.ball = new Ball(this.vector);
  }
  // 시뮬레이터 구동 메소드
  run() {
    this.line.draw(this.ctx);
    this.ball.draw(this.ctx);
    this.update();
  }
  // 시뮬레이터 데이터 업데이트 메소드
  update() {
    this.angularAccerelation = -1 * this.gravity * Math.sin(this.angle);
    this.angularVelocity += this.angularAccerelation;
    //this.angularVelocity *= this.damping;
    this.angle += this.angularVelocity;

    // 새로 산출된 angle 값으로 vector 값 업데이트
    this.vector = {
      x: this.length * Math.sin(this.angle) + this.origin.x,
      y: this.length * Math.cos(this.angle) + this.origin.y + 5,
    };

    // 실제 객체 벡터값 업데이트
    this.line.vector = this.vector;
    this.ball.vector = this.vector;
  }
}

class Line {
  constructor(origin, vector) {
    // origin과 vector값을 파라미터로 받아옵니다.
    this.origin = origin;
    this.vector = vector;

    // 줄 관련 정적 데이터
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
    // 추의 중심점인 vector값을 받아옵니다.
    this.vector = vector;

    // 추 관련 정적 데이터
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

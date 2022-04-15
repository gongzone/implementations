import PendulumSimulator from "./PendulumSimulator.js";

class App {
  constructor() {
    // 기본 데이터
    this.canvas;
    this.ctx;

    // 사이즈 관련 데이터
    this.fullWidth;
    this.fullHeight;
    this.scale; // 디스플레이 렌더링 차이 대응 데이터
  }
  // 데이터 초기화 메소드
  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.scale = window.devicePixelRatio;

    this.resize();
  }
  // 리사이즈 시 사이즈 관련 데이터 수정 및 적용 메소드
  resize() {
    this.fullWidth = document.body.clientWidth;
    this.fullHeight = document.body.clientHeight;

    this.canvas.width = this.fullWidth * this.scale;
    this.canvas.height = this.fullHeight * this.scale;
    this.ctx.scale(this.scale, this.scale);

    this.PendulumSimulator = new PendulumSimulator(this.fullWidth, this.ctx);
  }
  // 애니메이션 구동 메소드
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.fullWidth, this.fullHeight);

    this.PendulumSimulator.run();
  }
}

const onLoadHandler = () => {
  const app = new App();
  window.addEventListener("resize", app.resize.bind(app));

  app.init();
  app.animate();
};

window.addEventListener("load", onLoadHandler);

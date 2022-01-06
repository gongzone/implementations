import Pendulum from "./Pendulum.js";

class App {
  constructor() {
    this.canvas;
    this.ctx;

    this.fullWidth = document.body.clientWidth;
    this.fullHeight = document.body.clientHeight;
    this.scale = window.devicePixelRatio;
  }
  init() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.resize();
  }
  resize() {
    this.fullWidth = document.body.clientWidth;
    this.fullHeight = document.body.clientHeight;

    this.canvas.width = Math.floor(this.fullWidth * this.scale);
    this.canvas.height = Math.floor(this.fullHeight * this.scale);
    this.ctx.scale(this.scale, this.scale);

    this.pendulum = new Pendulum(this.fullWidth, this.fullHeight);
  }
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.fullWidth, this.fullHeight);

    this.pendulum.draw(this.ctx);
  }
}

const onLoadHandler = () => {
  const app = new App();
  window.addEventListener("resize", app.resize.bind(app));

  app.init();
  app.animate();
};

window.addEventListener("load", onLoadHandler);

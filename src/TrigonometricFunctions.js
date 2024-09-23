/**
 * @module TrigonometricFunctions
 */

class TrigonometricFunctions {
  constructor(circle, angle) {
    this.circle = circle;
    this.angle = angle;
  }

  get sideOpposite() {
    return this.circle.radius * Math.sin(this.angle);
  }
  get sideAdjacent() {
    return this.circle.radius * Math.cos(this.angle);
  }
  get sides() {
    return [this.sideOpposite, this.sideAdjacent];
  }
}

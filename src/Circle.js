/**
 * @module Circle
 */

import * as fns from "./circle-functions";

/**
 * @typedef {Object} Options
 * @property {number} circumference Boundary measure of the circle or perimeter.
 * @property {number} radius The distance from the center of the circle to the circumference.
 * @property {number} diameter The line measure that passes through the centre of the circle
 * and touches the two points on the circumference.
 */

/**
 * @classdesc
 * This library allows obtaining the properties of a geometric circle from any of its
 * measurements.
 */
class Circle {
  /**
   * @param {Options} options Circle options.
   */
  constructor(options) {
    /**
     * @private
     */
    this.properties = options;
  }

  /**
   * @returns {number} circumference Boundary measure of the circle or perimeter.
   */
  get circumference() {
    if (this.properties.circumference) return this.properties.circumference;

    if (this.properties.radius) {
      return fns.circumferenceFromRadius(this.properties.radius);
    }

    if (this.properties.diameter) {
      return fns.circumferenceFromDiameter(this.properties.diameter);
    }
  }

  /**
   * @returns {number} radius The distance from the center of the circle to the circumference.
   */
  get radius() {
    if (this.properties.radius) return this.properties.radius;

    if (this.properties.circumference) {
      return fns.radiusFromCircumference(this.properties.circumference);
    }

    if (this.properties.diameter) {
      return fns.radiusFromDiameter(this.properties.diameter);
    }
  }

  /**
   * @returns {number} diameter The line measure that passes through the centre of the circle
   * and touches the two points on the circumference.
   */
  get diameter() {
    if (this.properties.diameter) return this.properties.diameter;

    if (this.properties.circumference) {
      return fns.diameterFromCircumference(this.properties.circumference);
    }

    if (this.properties.radius) {
      return fns.diameterFromRadius(this.properties.radius);
    }
  }

  /**
   * @returns {number} area Square area of a geometric circle in two dimensions
   */
  get area() {
    if (this.radius) {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
}

export default Circle;

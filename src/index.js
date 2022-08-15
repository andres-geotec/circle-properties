/**
 * @module Circle
 */

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
      return circumferenceFromRadius(this.properties.radius);
    }

    if (this.properties.diameter) {
      return circumferenceFromDiameter(this.properties.diameter);
    }
  }

  /**
   * @returns {number} radius The distance from the center of the circle to the circumference.
   */
  get radius() {
    if (this.properties.radius) return this.properties.radius;

    if (this.properties.circumference) {
      return radiusFromCircumference(this.properties.circumference);
    }

    if (this.properties.diameter) {
      return radiusFromDiameter(this.properties.diameter);
    }
  }

  /**
   * @returns {number} diameter The line measure that passes through the centre of the circle
   * and touches the two points on the circumference.
   */
  get diameter() {
    if (this.properties.diameter) return this.properties.diameter;

    if (this.properties.circumference) {
      return diameterFromCircumference(this.properties.circumference);
    }

    if (this.properties.radius) {
      return diameterFromRadius(this.properties.radius);
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

/**
 * Calculate the circumference from the radius of a circle.
 * @param {number} radius The distance from the center of the circle to the circumference.
 * @returns {number} circumference Boundary measure of the circle or perimeter.
 */
export function circumferenceFromRadius(radius) {
  return circumferenceFromDiameter(2 * radius);
}

/**
 * Calculate the circumference from the diameter of a circle.
 * @param {number} diameter The line measure that passes through the centre of the circle
 * and touches the two points on the circumference.
 * @returns {number} circumference Boundary measure of the circle or perimeter.
 */
export function circumferenceFromDiameter(diameter) {
  return Math.PI * diameter;
}

/**
 * Calculate the radius from the circumference of a circle.
 * @param {number} circumference Boundary measure of the circle or perimeter.
 * @returns {number} radius The distance from the center of the circle to the circumference.
 */
export function radiusFromCircumference(circumference) {
  return radiusFromDiameter(diameterFromCircumference(circumference));
}

/**
 * Calculate the radius from the diameter of a circle.
 * @param {number} diameter The line measure that passes through the centre of the circle
 * and touches the two points on the circumference.
 * @returns {number} radius The distance from the center of the circle to the circumference.
 */
export function radiusFromDiameter(diameter) {
  return diameter / 2;
}

/**
 * Calculate the diameter from the circumference of a circle.
 * @param {number} circumference Boundary measure of the circle or perimeter.
 * @returns {number} diameter The line measure that passes through the centre of the circle
 * and touches the two points on the circumference.
 */
export function diameterFromCircumference(circumference) {
  return circumference / Math.PI;
}

/**
 * Calculate the diameter from the radius of a circle.
 * @param {number} radius The distance from the center of the circle to the circumference.
 * @returns {number} diameter The line measure that passes through the centre of the circle
 * and touches the two points on the circumference.
 */
export function diameterFromRadius(radius) {
  return radius * 2;
}

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
 */
class Circle {
    properties: object;

    /**
    * @param {Options} options Circle options.
    */
    constructor(options: object) {
        /**
         * @private
         */
        this.properties = options;
    }
}

export default Circle;

/**
 * Calculate the circumference from the radius of a circle.
 * @param {number} radius The distance from the center of the circle to the circumference.
 * @returns {number} circumference Boundary measure of the circle or perimeter.
 */
export function circumferenceFromRadius(radius: number): number {
    return circumferenceFromDiameter(2 * radius);
}

/**
 * Calculate the circumference from the diameter of a circle.
 * @param {number} diameter The line measure that passes through the centre of the circle
 * and touches the two points on the circumference.
 * @returns {number} circumference Boundary measure of the circle or perimeter.
 */
export function circumferenceFromDiameter(diameter: number): number {
    return Math.PI * diameter;
}

/**
 * Calculate the radius from the circumference of a circle.
 * @param {number} circumference Boundary measure of the circle or perimeter.
 * @returns {number} radius The distance from the center of the circle to the circumference.
 */
export function radiusFromCircumference(circumference: number): number {
    return radiusFromDiameter(diameterFromCircumference(circumference));
}

/**
 * Calculate the radius from the diameter of a circle.
 * @param {number} diameter The line measure that passes through the centre of the circle
 * and touches the two points on the circumference.
 * @returns {number} radius The distance from the center of the circle to the circumference.
 */
export function radiusFromDiameter(diameter: number): number {
    return diameter / 2;
}

/**
 * Calculate the diameter from the circumference of a circle.
 * @param {number} circumference Boundary measure of the circle or perimeter.
 * @returns {number} diameter The line measure that passes through the centre of the circle
 * and touches the two points on the circumference.
 */
export function diameterFromCircumference(circumference: number): number {
    return circumference / Math.PI;
}

/**
 * Calculate the diameter from the radius of a circle.
 * @param {number} radius The distance from the center of the circle to the circumference.
 * @returns {number} diameter The line measure that passes through the centre of the circle
 * and touches the two points on the circumference.
 */
export function diameterFromRadius(radius: number): number {
    return radius * 2;
}

/**
 * @module Circle
 */

/**
 * @typedef {Object} Options
 * @property {number} circumference Boundary measure of the circle or perimeter
 * @property {number} radius Line measure from the center of the circle to the circumference
 * @property {number} diameter The line measure that passes through the centre of the circle
 * and touches the two points on the circumference
 */

/**
 * @classdesc
 */
class Circle {
    properties: object

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
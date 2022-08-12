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
    properties: {
        circumference: number,
        radius: number,
        diameter: number,
    };

    /**
    * @param {Options} options Circle options.
    */
    constructor(options: {
        circumference: number,
        radius: number,
        diameter: number,
    }) {
        /**
         * @private
         */
        this.properties = options;
    }

    /**
     * @returns {number} circumference Boundary measure of the circle or perimeter.
     */
    public get circumference(): number | undefined {
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
    public get radius(): number | undefined {
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
    public get diameter(): number | undefined {
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
    get area(): number | undefined {
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

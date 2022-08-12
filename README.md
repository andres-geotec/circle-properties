# Circle

Lines and circles are the important elementary figures in geometry. We know that a line is a locus of a point moving in a constant direction, whereas the circle is a locus of a point moving at a constant distance from some fixed point. The theoretical importance of the circle is reflected in the number of amazing applications. ([mathlake.com](http://mathlake.com/Properties-of-Circle))

Use this library to get the properties of a geometric circle from any of its measurements.

| [hompahe](https://andres-geotec.github.io/circle-properties/) | [npm](https://www.npmjs.com/package/circle-properties) | [github](https://github.com/andres-geotec/circle-properties) |
| -- | -- | -- |

## Install

### [npm](https://www.npmjs.com/package/circle-properties)

```npm
npm i circle-properties
```

## Usage

```javascript
const circle = new Circle({
    ... // any measure or property
});
```

## Properties

* **Circumference**: Boundary measure of the circle or perimeter.
* **Radius**: The distance from the center of the circle to the circumference.
* **Diameter**: The line measure that passes through the centre of the circle and touches the two points on the circumference.
* **area**: Square area of a geometric circle in two dimensions


### Example

```javascript
import Circle from "circle-properties";

const circle1 = new Circle({
    raduis: 15,
});
console.log(circle1.diameter, circle1.circumference, circle1.area);
// result: 30, 94.24777960769379, 706.8583470577034

const circle2 = new Circle({
    circumference: 40.5
});
console.log(circle2.radius, circle2.diameter, circle2.area);
// result: 6.445775195221762, 12.891550390443523, 130.5269477032407
```

## Functions

If you need to calculate the properties without instantiating a Circle object, use the functions:

* `circumferenceFromRadius(radius)` Calculate the circumference from the radius of a circle.
* `circumferenceFromDiameter(diameter)` Calculate the circumference from the diameter of a circle.
* `radiusFromCircumference(circumference)` Calculate the radius from the circumference of a circle.
* `radiusFromDiameter(diameter)` Calculate the radius from the diameter of a circle.
* `diameterFromCircumference(circumference)` Calculate the diameter from the circumference of a circle.
* `diameterFromRadius(radius)` Calculate the diameter from the radius of a circle.

### Example

```javascript
import { circumferenceFromRadius, radiusFromCircumference } from "circle-properties";

console.log(circumferenceFromRadius(15));
// result: 94.24777960769379

console.log(radiusFromCircumference(40.5));
// result: 6.445775195221762
```

## License

MIT

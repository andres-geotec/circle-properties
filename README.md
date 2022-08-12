# Circle

Lines and circles are the important elementary figures in geometry. We know that a line is a locus of a point moving in a constant direction, whereas the circle is a locus of a point moving at a constant distance from some fixed point. The theoretical importance of the circle is reflected in the number of amazing applications. ([mathlake.com](http://mathlake.com/Properties-of-Circle))

Use this library to get the properties of a geometric circle from any of its measurements.

## Usage

```javascript
const circle = new Circle({
    ... // any measure or property
});
```

## Properties

* Circumference: The boundary of the circle is known as the circumference
* Radius: The line from the centre “O” of the circle to the circumference of the circle is called the radius and it is denoted by “R” or “r”
* Diameter: The line that passes through the centre of the circle and touches the two points on the circumference is called the diameter and it is denoted by the symbol “D” or “d”


## Example

```javascript
import Circle from "circle-properties";

const circle1 = new Circle({
    raduis: 15,
});
console.log(circle1.diameter, circle1.circumference, circle1.area);
// result: 

const circle2 = new Circle({
    circumference: 40.5
});
console.log(circle2.raduis, circle2.diameter, circle2.area);
// result: 
```
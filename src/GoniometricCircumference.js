// TrigonometricCircumference

/**
 * Se crea un triangulo rectángulo imaginario en el que la hipotenusa es el radio, asi que
 * sin = altura del triangulo
 * cos = ancho del triangulo
 *
 * en este caso como queremos que el primer punto se posicione arriba del baricentro:
 * sin = ancho del triangulo (+ coordenada x)
 * cos = altura del triangulo (+ coordenada y)
 */

export default class GoniometricCircumference {
  /**
   * @param {Options} options Sin nombre options.
   */
  constructor(options) {
    this.center = options.center || [0, 0];

    this.radianAngle = options.radianAngle ?? 1;

    this.radius = options.radius || 1;
  }

  get sideOpposite() {
    return Math.sin(this.radianAngle) * this.radius;
  }

  get sideAdjacent() {
    return Math.cos(this.radianAngle) * this.radius;
  }

  get sideTangent() {
    return Math.tan(this.radianAngle) * this.radius;
  }

  get pointA() {
    return this.center;
  }

  get pointB() {
    return [
      this.center[0] + this.sideAdjacent,
      this.center[1] + this.sideOpposite,
    ];
  }

  get pointC() {
    return [this.center[0] + this.sideAdjacent, this.center[1]];
  }

  get pointD() {
    return [this.center[0] + this.radius, this.center[1] + this.sideTangent];
  }

  get pointE() {
    return [this.center[0] + this.radius, this.center[1]];
  }
}

export const TAU = 2 * Math.PI;

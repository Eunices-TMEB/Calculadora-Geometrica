export abstract class Figura {
    abstract calcularPerimetro(): number;
  }
  
  export class CirculoArcoiris extends Figura {
    constructor(private radio: number) {
      super();
    }
  
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }
  
  export class TrianguloColores extends Figura {
    constructor(
      private lado1: number,
      private lado2: number,
      private lado3: number
    ) {
      super();
    }
  
    calcularPerimetro(): number {
      return this.lado1 + this.lado2 + this.lado3;
    }
  }
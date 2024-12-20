import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TrianguloColores } from '../figura';
import { DecimalPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, DecimalPipe, CommonModule]
})
export class TrianguloComponent {
  lado1: number = 0;
  lado2: number = 0;
  lado3: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    const triangulo = new TrianguloColores(this.lado1, this.lado2, this.lado3);
    this.perimetro = triangulo.calcularPerimetro();
  }
}
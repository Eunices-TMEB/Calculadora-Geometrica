import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CirculoArcoiris } from '../figura';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, DecimalPipe, CommonModule]
})
export class CirculoComponent {
  radio: number = 0;
  perimetro: number | null = null;

  calcularPerimetro() {
    const circulo = new CirculoArcoiris(this.radio);
    this.perimetro = circulo.calcularPerimetro();
  }
}
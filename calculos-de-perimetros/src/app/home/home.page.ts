import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    FormsModule, 
    CirculoComponent, 
    TrianguloComponent,
    CommonModule
  ],
})
export class HomePage {
  figuraSeleccionada: string = '';
}
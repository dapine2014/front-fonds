import { Component,OnInit } from '@angular/core';
import { FondoService } from '../../services/fondo.service'
import {IFondo} from '../core/IFondo';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-fondos',
  templateUrl: './fondos.component.html',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatChipsModule, MatProgressBarModule, NgForOf, NgIf, CurrencyPipe],
  styleUrl: './fondos.component.css'
})
export class FondosComponent implements OnInit{

  fondos: IFondo[] = [];

  constructor(private fondoService: FondoService) {}

  ngOnInit(): void {
    this.getFondos();
  }

  getFondos(): void {
    this.fondoService.getFondos().subscribe((data) => {
      this.fondos = data;
    });
  }

  /*suscribir(fondoId: number): void {
    this.fondoService.suscribirFondo(fondoId).subscribe(() => {
      alert('Suscripción exitosa');
      this.getFondos();
    });
  }

  cancelar(fondoId: number): void {
    this.fondoService.cancelarSuscripcion(fondoId).subscribe(() => {
      alert('Cancelación exitosa');
      this.getFondos();
    });
  }*/


}



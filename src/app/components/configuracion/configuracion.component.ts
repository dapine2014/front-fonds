import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {NgIf, UpperCasePipe} from '@angular/common';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatRadioGroup,
    MatRadioButton,
    NgIf,
    UpperCasePipe
  ]

})
export class ConfiguracionComponent implements OnInit{
  notificationType: string = '';
  storedNotificationType: string | null = '';
  ngOnInit(): void {
    this.storedNotificationType = sessionStorage.getItem('notificationType');
  }

  constructor(private http: HttpClient) {}


  onSubmit() {
    if (!this.notificationType) {
      return;  // Si no se ha seleccionado nada, no hacer nada
    }

    sessionStorage.setItem('notificationType', this.notificationType);
    this.storedNotificationType = this.notificationType;

    console.log("NOTIFICACION: "+ this.notificationType);

    const subscriptionData = {
      notificationType: this.notificationType  // Incluyendo la preferencia del usuario
    };

  }
}

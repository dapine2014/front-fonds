import {Component, OnInit} from '@angular/core';
import {IUser} from '../core/IUser';
import {FondoService} from '../../services/fondo.service';
import {ITransactionHistory} from '../core/ITransactionHistory';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit{
  userEvent:Array<IUser> = new Array<IUser>();
  historyRecor:Array<ITransactionHistory> = new Array<ITransactionHistory>();


  constructor(private fondoService: FondoService) {}

  ngOnInit(): void {
    this.getHistorianData();
  }

  getHistorianData(): void {
    this.fondoService.getHistorial().subscribe((data: IUser[]) => {
      this.userEvent = data.filter(user => user.id === 'b57dfe3d-cc60-47e0-bc62-bce22178c4d5');
      if(this.userEvent.length > 0){
        this.historyRecor = this.userEvent[0]?.transactionHistory || [];
      }
    });
  }
}

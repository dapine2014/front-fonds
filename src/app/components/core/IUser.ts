import {IFondosSuscritos} from './IFondosSuscritos';
import {ITransactionHistory} from './ITransactionHistory';

export interface IUser {
  id?:string
  nombre?:	string
  email?:	string
  telefono?:	string
  saldo?:	number
  fondosSuscritos?:Array<IFondosSuscritos>
  transactionHistory?:Array<ITransactionHistory>
}

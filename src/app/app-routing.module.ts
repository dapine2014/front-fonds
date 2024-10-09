import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FondosComponent} from './components/fondos/fondos.component';
import {HistorialComponent} from './components/historial/historial.component';

const routes: Routes = [{path:'fondos',component:FondosComponent},
                        {path:'historial',component:HistorialComponent},
                        { path: '', redirectTo: '/fondos', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

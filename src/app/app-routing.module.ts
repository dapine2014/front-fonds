import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FondosComponent} from './components/fondos/fondos.component';
import {HistorialComponent} from './components/historial/historial.component';
import {ConfiguracionComponent} from './components/configuracion/configuracion.component';

const routes: Routes = [{path:'fondos',component:FondosComponent},
                        {path:'historial',component:HistorialComponent},
                        {path:'configurar',component:ConfiguracionComponent},
                        {path:'**', pathMatch: 'full', redirectTo: 'fondos' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

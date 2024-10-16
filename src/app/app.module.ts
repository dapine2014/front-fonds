import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FondosComponent } from './components/fondos/fondos.component';
import { HistorialComponent } from './components/historial/historial.component';
import { SuscripcionComponent } from './components/suscripcion/suscripcion.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {NavbarComponent} from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import {ConfiguracionComponent} from './components/configuracion/configuracion.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef, MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HistorialComponent,
    SuscripcionComponent,

  ],
  imports: [
    ConfiguracionComponent,
    BrowserModule,
    AppRoutingModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    FondosComponent,
    MatToolbarModule,
    HttpClientModule,
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngresosService } from './ingresos.service';
import { FormsModule } from '@angular/forms';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { EgresosService } from './egresos.service';
import { FormularioComponent } from './formulario/formulario.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresosService, EgresosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

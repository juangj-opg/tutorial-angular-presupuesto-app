import { Component, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresosService } from './egresos.service';
import { Ingreso } from './ingreso.model';
import { IngresosService } from './ingresos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'presupuesto-app';
  
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];
  
  constructor(
    private ingresosService: IngresosService,
    private egresosService: EgresosService
  ) {}

  ngOnInit(): void {
    this.ingresos = this.ingresosService.ingresos;
    this.egresos = this.egresosService.egresos;
  }

  getIngresoTotal() {
    let ingresoTotal:number=0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.value;
    });
    return ingresoTotal;
  }

  getEgresoTotal() {
    let egresoTotal:number=0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.value;
    });
    return egresoTotal;
  }

  getPorcentajeTotal() {
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal()-this.getEgresoTotal();
  }


}

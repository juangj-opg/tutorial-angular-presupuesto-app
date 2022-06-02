import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from '../egreso.model';
import { EgresosService } from '../egresos.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css'],
})
export class EgresoComponent implements OnInit {
  @Input() egreso: Egreso;
  @Input() ingresoTotal: number;

  constructor(private egresoService: EgresosService) {}

  ngOnInit(): void {}

  eliminarRegistro(egreso: Egreso) {
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.value / this.ingresoTotal;
  }
}

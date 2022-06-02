import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso.model';
import { IngresosService } from '../ingresos.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  @Input() ingreso: Ingreso;

  constructor(private ingresoService: IngresosService) { }

  ngOnInit(): void {
  }

  eliminarRegistro(ingreso: Ingreso){
     this.ingresoService.eliminar(ingreso);
  }

}

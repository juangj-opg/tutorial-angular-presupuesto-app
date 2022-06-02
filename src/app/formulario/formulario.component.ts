import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso.model';
import { EgresosService } from '../egresos.service';
import { Ingreso } from '../ingreso.model';
import { IngresosService } from '../ingresos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  tipo: string = 'ingresoOperacion';
  descriptionInput: string;
  valueInput: number;

  constructor(
    private ingresosService: IngresosService,
    private egresosService: EgresosService
  ) {}

  ngOnInit(): void {}

  tipoOperacion(evento) {
    this.tipo = evento.target.value;
    console.log(this.tipo);
  }

  agregarValor() {
    console.log(this.tipo);
    if(this.tipo == "ingresoOperacion")
      this.ingresosService.ingresos.push(new Ingreso(this.descriptionInput, this.valueInput));
    else
      this.egresosService.egresos.push(new Egreso(this.descriptionInput, this.valueInput));
  }
}

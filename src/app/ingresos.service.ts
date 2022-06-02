import { Injectable } from "@angular/core";
import { Ingreso } from "./ingreso.model";

@Injectable()
export class IngresosService{
    ingresos: Ingreso[] = [
        new Ingreso("Salario", 2100.00),
        new Ingreso("Venta coche", 1500.00),
    ];

    eliminar(ingreso:Ingreso){
        const index: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(index,1);
    }
}
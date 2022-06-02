import { Injectable } from "@angular/core";
import { Egreso } from "./egreso.model";

@Injectable()
export class EgresosService{
    egresos: Egreso[] = [
        new Egreso("Renta departamento", 900.00),
        new Egreso("Ropa", 200.00),
    ]

    eliminar(egreso:Egreso){
        const index: number = this.egresos.indexOf(egreso);
        this.egresos.splice(index,1);
    }
}
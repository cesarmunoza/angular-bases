import { Component } from "@angular/core";
import { Empleado } from './empleado';
@Component({
    selector: 'empleado-tag',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent {
    public titulo = 'Componente empleados: ';

    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajador_externo: boolean;

    constructor() {
        this.empleado = new Empleado('Mary', 52, 'Propietaria', false);
        this.trabajadores = [
            new Empleado('Cesar Munoz', 37, 'Analista', true),
            new Empleado('Julliana Patiño', 37, 'Gerente', true),
            new Empleado('Nico', 20, 'Hijito', true)
        ];

        this.trabajador_externo = true;

    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor: any) {
        this.trabajador_externo = valor;
    }
}
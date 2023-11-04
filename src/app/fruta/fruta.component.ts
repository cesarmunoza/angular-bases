import { Component } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html'
})
export class FrutaComponent {
  public nombre_componente = 'Componente de fruta ';
  public listado_frutas = 'Naranja, Nanzana, Pera, Sandía ';

  public nombre: String;

  public trabajos: Array<any> = ['Carpintero', 44, 'fontanro'];

  constructor() {
    this.nombre = 'Cesar munoz'
  }

  cambiarNombre() {
    this.nombre = "SuperCesar";
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cambiarNombre();
  }
}

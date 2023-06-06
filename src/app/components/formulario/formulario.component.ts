import { Component, Output, EventEmitter } from '@angular/core';
import { Carro } from 'src/app/core/models/car.model';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class FormularioComponent {
  @Output() carroAdicionado = new EventEmitter<Carro>();

  novoCarro: Carro = {
    id: Math.floor(Date.now() * Math.random()),
    modelo: '',
    imageUrl: '',
    marca: '',
    ano: 0,
    cor: '',
    edite: false,
  };

  constructor() { }


   adicionarCarro() {
      this.carroAdicionado.emit(this.novoCarro)
   }



  }

import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {
  carro: Carro = new Carro("", 0);

  roteador = inject(ActivatedRoute);

  constructor() {
    let id = this.roteador.snapshot.paramMap.get('id');
    if (id) {
      this.carro.nome = "Fusca";
      this.carro.ano = 1970;
    }
   }

}

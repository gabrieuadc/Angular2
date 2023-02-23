import { Component } from '@angular/core';

@Component({
  selector: 'app-gestao-fluxo',
  templateUrl: './gestao-fluxo.component.html',
  styleUrls: ['./gestao-fluxo.component.css']
})
export class GestaoFluxoComponent {
  displayedColumns: string[] = ['name', 'contact', 'service', 'value', 'date'];

}

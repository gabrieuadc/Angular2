import { Component, OnInit } from '@angular/core';
import { AndamentoService } from 'src/app/services/andamento.service';
import { ServicesInterface } from 'src/app/services/IServices';

@Component({
  selector: 'app-cad-andamento',
  templateUrl: './cad-andamento.component.html',
  styleUrls: ['./cad-andamento.component.css']
})
export class CadAndamentoComponent {
  displayedColumns: string[] = ['name', 'contact', 'service', 'value', 'date'];
  services!: ServicesInterface[];
  filter!:number;
  dataSource1!:ServicesInterface[];

  costTotal!:number;
  numObj!:number;

  constructor(private andamentoService: AndamentoService){

  }

  ngOnInit(){
    this.andamentoService.getAllService().subscribe({next : (res) => this.services = res, error: (err) => console.log(err), complete:() => {}});
  }


verificaData(filterDate:String, element:ServicesInterface[]){
  var filtrado = element.filter(function(obj) { if((obj.date) == filterDate ) return (obj.date); else {return  } });
  this.dataSource1= filtrado;
  this.getTotalCost(filtrado);
  this.getTotalobj(filtrado);
}

getTotalCost(element:ServicesInterface[]) {
  this.costTotal= element.map(t => t.value).reduce((acc, value) => { if(value === undefined) {return acc}; return acc + value},0);
}

getTotalobj(element:ServicesInterface[]) {
  this.numObj= element.map(t => t.name).length;
}


// handleChange(e){
//   let date1= (e.target.value+ "-01T00:00:00.000Z")
//   setfilter(date1)
//   let date2= new Date(e.target.value);
//   let date3= new Date(date2.getFullYear(), date2.getUTCMonth()+1, 0);
//   setfilter2(date3.toISOString());
// }


}


// verificaData(filterDate:number, element:ServicesInterface[]){
//   let date2= new Date(filterDate);
//   let date3= new Date(date2.getFullYear(), date2.getUTCMonth(), 1);
//   var filtrado = element.filter(function(obj) { if(new Date(obj.date) >= date3 ) return (obj.date); else {return  } });
//   this.dataSource1= filtrado;
//   this.getTotalCost(filtrado);
//   this.getTotalobj(filtrado);

//   console.log(date3.toLocaleDateString());
// }
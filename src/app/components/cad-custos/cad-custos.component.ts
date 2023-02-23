import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CCustosInterface } from 'src/app/services/ICCustos';
import { CcustoService } from 'src/app/services/ccusto.service';





@Component({
  selector: 'app-cad-custos',
  templateUrl: './cad-custos.component.html',
  styleUrls: ['./cad-custos.component.css']
})

export class CadCustosComponent implements OnInit{
  public cadCustos!: FormGroup;

  displayedColumns: string[] = ['Ccusto', 'mod', 'md', 'cif', 'cpp', 'actions'];
  // dataSource = ELEMENT_DATA;
  // custos!: CCustosInterface[];


  custos!: CCustosInterface[];

  costTotal!:number;
  numObj!:number;    
  dataSource = this.custos;


  disablee=false;

  public cpp1!:number;

  

  constructor(private fb: FormBuilder, private ccustoService: CcustoService, ){
    
  }

  ngOnInit(): void {    
    this.cadCustos= this.fb.group({
      cc: ['', [Validators.required]],
      mod: [, [Validators.required]],
      md: [, [Validators.required]],
      cif: [, [Validators.required]],
      cpp: [, [Validators.required]],
    });
    // this.cadCustos.disable();



      this.ccustoService.getAllCCusto().subscribe({next: (res) => this.custos = res, error: (err) => console.log(err), complete:() =>{}})
  }

  postCcusto() {
    this.ccustoService.postCCusto(this.cadCustos.value).subscribe((res)=>{alert("Cadastrado com sucesso"); window.location.reload()});
  }

  deleteCCusto(id:number) {
    this.ccustoService.deleteCCusto(id).subscribe((res)=>{alert("Deletado com sucesso"); window.location.reload()});
  }

  


}

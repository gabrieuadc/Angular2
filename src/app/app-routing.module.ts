import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadAndamentoComponent } from './components/cad-andamento/cad-andamento.component';
import { CadCustosComponent } from './components/cad-custos/cad-custos.component';
import { CadServicesComponent } from './components/cad-services/cad-services.component';
import { GestaoCustosComponent } from './components/gestao-custos/gestao-custos.component';
import { GestaoFluxoComponent } from './components/gestao-fluxo/gestao-fluxo.component';

const routes: Routes = [
{
  path:'cadServices', component: CadServicesComponent
},
{
  path:'cadAndamento', component: CadAndamentoComponent
},
{
  path:'cadCustos', component: CadCustosComponent
},
{
  path:'fluxoCaixa', component: GestaoCustosComponent
},
{
  path:'gestaoFluxo', component: GestaoFluxoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

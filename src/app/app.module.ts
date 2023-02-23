import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { CadAndamentoComponent } from './components/cad-andamento/cad-andamento.component';
import { CadServicesComponent } from './components/cad-services/cad-services.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CadCustosComponent } from './components/cad-custos/cad-custos.component';
import { GestaoCustosComponent } from './components/gestao-custos/gestao-custos.component';
import { GestaoFluxoComponent } from './components/gestao-fluxo/gestao-fluxo.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';









@NgModule({
  declarations: [
    AppComponent,
    CadAndamentoComponent,
    CadServicesComponent,
    CadCustosComponent,
    GestaoCustosComponent,
    GestaoFluxoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

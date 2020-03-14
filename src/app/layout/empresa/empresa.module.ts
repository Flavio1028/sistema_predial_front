import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeEmpresaComponent,
    CadastrarEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    FormsModule,
    PaginationModule.forRoot(),
    NgxMaskModule.forRoot(),
    TimepickerModule.forRoot(),
    SortableModule.forRoot()
  ]
})
export class EmpresaModule { }

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';

import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresaRoutingModule } from './empresa-routing.module';

@NgModule({
  declarations: [HomeEmpresaComponent, CadastrarEmpresaComponent],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TimepickerModule.forRoot(),
    PaginationModule.forRoot(),
    NgxMaskModule.forRoot(),
    SortableModule.forRoot(),
  ],
})
export class EmpresaModule {}

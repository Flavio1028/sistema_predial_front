import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';


const routes: Routes = [
  {
    path: '', component: HomeEmpresaComponent, canActivate: [AuthGuard]
  },
  {
    path: 'cadastrar', component: CadastrarEmpresaComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }

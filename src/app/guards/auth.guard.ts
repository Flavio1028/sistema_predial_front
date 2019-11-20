
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.verificarAcesso();
  }

  private verificarAcesso() {
    // Verifica se a sessao esta ativa
    const valor = sessionStorage.getItem('sessaoAtiva');
    if (valor != null && valor === 'true') {
      // Exibe o menu
      this.authService.mostrarMenuEmitter.emit(true);
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}

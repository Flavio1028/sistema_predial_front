import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  /*
   * Informa se o usuario esta autenticado
   */
  private usuarioAutenticado: boolean = false;

  /*
   * Indica se o menu deve ser mostrado ao usuario
   */
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin() {
    this.mostrarMenuEmitter.emit(true);
    this.usuarioAutenticado = true;
    sessionStorage.setItem('sessaoAtiva', this.usuarioAutenticado + '');
    this.router.navigate(['/home']);
  }

  fazerLogout() {
    // Limpa os dados da sessao
    sessionStorage.clear();
    this.mostrarMenuEmitter.emit(false);
    this.router.navigate(['/login']);
  }

}

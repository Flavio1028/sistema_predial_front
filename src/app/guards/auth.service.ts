import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  // tslint:disable-next-line: no-inferrable-types
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
    this.mostrarMenuEmitter.emit(false);
    this.usuarioAutenticado = false;
    sessionStorage.setItem('sessaoAtiva', this.usuarioAutenticado + '');
    this.router.navigate(['/login']);
  }

}

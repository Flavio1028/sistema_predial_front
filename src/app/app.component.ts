import { Component, OnInit } from '@angular/core';

import { AuthService } from './guards/auth.service';
import { ModalService } from './shared/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Sistema Predial';

  // tslint:disable-next-line: no-inferrable-types
  menu: boolean = false;

  // tslint:disable-next-line: no-inferrable-types
  mostrarMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private modalService: ModalService) { }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar: boolean) => {
        this.mostrarMenu = mostrar;
      }
    );
  }

  /*
   * Alteta a exibicao do menu lateral
   */
  expandirMenu() {
    this.menu = !this.menu;
  }

  /*
   * Menu Mobile
   */
  menuMobile() {
    document.getElementById('sidebarCollapse').click();
  }

  /*
   * Executa o logout do usuario
   */
  fazerLogout() {
    const resultado$ = this.modalService.modalConfirmacao('Tem certeza que deseja sair ?');
    resultado$.asObservable().subscribe(
      dados => {
        if (dados) {
          this.authService.fazerLogout();
        }
      }
    );
  }

}

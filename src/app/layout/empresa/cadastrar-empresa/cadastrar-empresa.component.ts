import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.scss']
})
export class CadastrarEmpresaComponent implements OnInit {

  /*
   * Lista com os conjuntos disponiveis
   */
  listaConjuntosDisponiveis: any[] = [
    { id: 1, name: 'Sala 1' },
    { id: 2, name: 'Sala 2' },
    { id: 3, name: 'Sala 3' },
    { id: 4, name: 'Sala 4' },
    { id: 5, name: 'Sala 5' }
  ];

  /*
   * Lista com os conjuntos adicionados
   */
  listaConjuntosAdicionados: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /*
   * Volta para pagina home da empresa
   */
  voltarHomeEmpresa() {
    this.router.navigate(['/empresa']);
  }

  /*
   * Volta para pagina inicial
   */
  voltarHome() {
    this.router.navigate(['/home']);
  }

}

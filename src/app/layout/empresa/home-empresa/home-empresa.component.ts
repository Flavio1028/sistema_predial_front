import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

import { EmpresaService } from '../empresa.service';
import { ModalService } from 'src/app/shared/modal.service';

@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.scss']
})
export class HomeEmpresaComponent implements OnInit {

  /*
   * Lista com as empresas carregadas
   */
  listaEmpresa: any;

  contentArray: any;
  returnedArray: string[];

  constructor(
    private router: Router,
    private service: EmpresaService,
    private spinner: NgxSpinnerService,
    private modal: ModalService
  ) { }

  ngOnInit(): void {
    // Carrega os dados
    this.carregarEmpresas();
  }

  /*
   * Carrega as empresas cadastradas
   */
  carregarEmpresas() {
    // Exibe o carregando
    this.spinner.show();
    this.service.listarEmpresas().subscribe(
      empresas => {
        this.listaEmpresa = empresas;
        // Carrega o total de itens
        this.contentArray = new Array(this.listaEmpresa.length).fill('');
        this.contentArray = this.listaEmpresa.map((empresa: any) => empresa);
        this.returnedArray = this.contentArray.slice(0, 10);
        this.spinner.hide();
      }, error => this.tratarErro(error)
    );
  }

  /*
   * Faz a paginacao
   * @param event
   */
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

  /*
   * Busca a empresa pela Razao Social
   * @param valor
   */
  buscarEmpresa(valor: any) {
    // Limpa o mapa
    this.contentArray = [];
    for (let empresa of this.listaEmpresa) {
      var buscar = "" + empresa.rzSocial;
      if (buscar.search(valor) != -1) {
        this.contentArray.push(empresa);
      }
    }
    // Atuliza a lista na tela
    this.returnedArray = this.contentArray.slice(0, 10);
  }

  /*
   * Carrega a tela para cadastrar a empresa
   */
  cadastarEmpresa() {
    this.router.navigate(['empresa/cadastrar']);
  }

  /*
   * Carrega a tela de detalhar
   * @param idEmpresa
   */
  detalharEmpresa(idEmpresa: number) {
    console.log(idEmpresa);
  }

  /*
   * Carrega a tela para editar a empresa
   * @param idEmpresa
   */
  editarEmpresa(idEmpresa: number) {
    console.log(idEmpresa);
  }

  /*
   * Exclui e empresa selecionada
   * @param idEmpresa
   */
  excluirEmpresa(idEmpresa: number, nmEmpresa: string) {
    const resultado$ = this.modal.modalConfirmacao("Excluir a empresa " + nmEmpresa + ".");
    resultado$.asObservable().subscribe(
      dados => {
        if (dados) {
          console.log(idEmpresa);
        }
        resultado$.unsubscribe();
      }
    );
  }

  /*
   * Trata os erros da aplicacao
   * @param erro
   */
  tratarErro(erro: any) {
    console.debug(erro);
    // Limpa os dados das listas
    this.listaEmpresa = null;
    this.contentArray = null;
    this.returnedArray = null;
    // Exibe a mensagem de erro para o usuario
    this.modal.modalErro("Desculpe, não foi possível carregar os dados.");
    this.spinner.hide();
  }

  /*
   * Volta para pagina inicial
   */
  voltarHome() {
    this.router.navigate(['/home']);
  }

}

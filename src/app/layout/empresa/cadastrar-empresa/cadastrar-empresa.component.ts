import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";

import { ModalService } from "src/app/shared/modal.service";
import { EmpresaService } from "../empresa.service";

@Component({
  selector: "app-cadastrar-empresa",
  templateUrl: "./cadastrar-empresa.component.html",
  styleUrls: ["./cadastrar-empresa.component.scss"],
})
export class CadastrarEmpresaComponent implements OnInit {
  // Formulario
  formulario: FormGroup;

  /*
   * Lista com os conjuntos disponiveis
   */
  listaConjuntosDisponiveis: any[] = [
    { id: 1, name: "Sala 1" },
    { id: 2, name: "Sala 2" },
    { id: 3, name: "Sala 3" },
    { id: 4, name: "Sala 4" },
    { id: 5, name: "Sala 5" },
  ];

  /*
   * Lista com os conjuntos adicionados
   */
  listaConjuntosAdicionados: any[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private modalService: ModalService,
    private service: EmpresaService
  ) {}

  ngOnInit(): void {
    // Cria o formulario
    this.carregarFormulario();
  }

  /*
   * Carrega os dados do formulario
   */
  carregarFormulario() {
    this.formulario = this.fb.group({
      idEmpresa: [null, Validators.required],
      razaoSocial: [null, Validators.required],
      cnpj: [null, Validators.required],
      tempMim: [null, Validators.required],
      tempMax: [null, Validators.required],
      horaAbertura: [null, Validators.required],
      horaFechamento: [null, Validators.required],
      listaConjuntos: [null, Validators.required],
    });
  }

  cadastrar(): void {
    this.validarConjuntosAdiciodos();
    if (this.formulario.valid) {
    } else {
      this.modalService.modalAlerta("Todos os campos devem ser informados.");
    }
  }

  /*
   * Altera o valor da lista
   */
  validarConjuntosAdiciodos(): boolean {
    // Carrega os itens
    let lista = this.listaConjuntosAdicionados;
    // Altera o valor
    this.formulario.controls["listaConjuntos"].setValue(lista);
    // Verifica se esta valido
    if (this.listaConjuntosAdicionados.length != 0) {
      return true;
    }
    return false;
  }

  /*
   * Volta para pagina home da empresa
   */
  voltarHomeEmpresa() {
    this.router.navigate(["/empresa"]);
  }

  /*
   * Volta para pagina inicial
   */
  voltarHome() {
    this.router.navigate(["/home"]);
  }
}

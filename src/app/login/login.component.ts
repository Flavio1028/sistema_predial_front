import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../guards/auth.service';
import { BsModalRef } from 'ngx-bootstrap/modal/ngx-bootstrap-modal';
import { LoginService } from './login.service';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Formulario de login
  formulario: FormGroup;

  deleteModalRef: BsModalRef;

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private service: LoginService,
    private modalService: ModalService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // Cria o formulario
    this.carregarFormulario();
  }

  /*
   * Carrega os dados do formulario
   */
  carregarFormulario() {
    this.formulario = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
      lembrar: [false]
    });
  }

  fazerLogin() {
    if (this.formulario.valid) {
      // Exibe carregando
      this.spinner.show();
      this.service.fazerLogin().subscribe(
        dados => {
          // Verifica se o usuario logou
          let valido = false;
          // Carrega os dados digitados
          const usuario = this.formulario.get('usuario').value;
          const senha = this.formulario.get('senha').value;
          dados.forEach((dado: { usuario: any; senha: any; }) => {
            if (dado.usuario == usuario && dado.senha == senha) {
              // salva os dados na sessao do usuario
              this.authService.fazerLogin();
              valido = true;
            }
          });
          if (!valido) {
            this.modalService.modalInfoErro("Usuário/Senha inválido(s).");
          }
          this.spinner.hide();
        }
      );
    } else {
      this.validarCampo('usuario');
      this.validarCampo('senha');
    }
  }

  /*
   * Valida o campos do formulario
   */
  validarCampo(nmCampo: string) {
    const valorCampo = this.formulario.get(nmCampo).value;
    document.getElementById(nmCampo).classList.remove('is-invalid');
    if (valorCampo === '') {
      document.getElementById(nmCampo).classList.add('is-invalid');
    }
  }

}

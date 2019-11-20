import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Formulario de login
  formulario: FormGroup;
  // Erro campo usuario
  erroUsuario = false;
  // Erro campo senha
  erroSenha = false;

  constructor(
    private fb: FormBuilder,
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
      this.authService.fazerLogin();
    } else {
      this.exibirErroCampoUsuario();
      this.exibirErroCampoSenha();
    }
  }

  /*
   * Valida o campo usuario
   */
  exibirErroCampoUsuario() {
    const valorCampo = this.formulario.controls.usuario.value;
    document.getElementById('usuario').classList.remove('invalid-feedback');
    this.erroUsuario = false;
    if (valorCampo === '') {
      document.getElementById('usuario').classList.add('invalid-feedback');
      this.erroUsuario = true;
    }
  }

  /*
   * Valida o campo senha
   */
  exibirErroCampoSenha() {
    const valorCampo = this.formulario.controls.senha.value;
    document.getElementById('senha').classList.remove('invalid-feedback');
    this.erroSenha = false;
    if (valorCampo === '') {
      document.getElementById('senha').classList.add('invalid-feedback');
      this.erroSenha = true;
    }
  }

}

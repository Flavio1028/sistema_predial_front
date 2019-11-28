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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /*
   * URL utilizada para realizar o login do usuario
   */
  urlLogin: string = "assets/mock/usuarios.json";

  constructor(private http: HttpClient) { }

  /*
   * Faz o login do usuario
   */
  fazerLogin() {
    return this.http.get<any>(this.urlLogin).pipe(delay(3000), take(1));
  }

}

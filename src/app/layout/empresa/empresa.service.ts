import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  /*
   *  Url para carrega as empresas
   */
  urlCarregarEmpresas: string = "assets/mock/empresas.json";

  constructor(private http: HttpClient) { }

  /*
   * Carrega a lista das empresas
   */
  listarEmpresas() {
    return this.http.get(`${this.urlCarregarEmpresas}`).pipe(take(1), delay(900));
  }

}

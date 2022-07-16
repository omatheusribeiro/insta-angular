import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient) { }

  autenticar(usuario: string, senha: string): Observable<any>{
    return this.httpClient.post(environment.url.toString() + 'user/login', {
      userName: usuario,
      password: senha
    })
  }
}

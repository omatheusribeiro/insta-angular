import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(
    private autenticacaoService: AutenticacaoService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.autenticacaoService
      .autenticar(this.usuario, this.senha)
      .subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      });
  }
}

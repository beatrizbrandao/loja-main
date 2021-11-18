import { Injectable } from '@angular/core';
import { Maquiagem } from './maquiagem/maquiagem.model';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { MEAT_API } from '../app.api';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class MaquiagensService {

  constructor(private http: HttpClient, private toastr: ToastrService) {}

 maquiagens(): Observable<Maquiagem[]> {
    return this.http.get<Maquiagem[]>(`${MEAT_API}/maquiagens`).pipe(
      map(maquiagens => maquiagens),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(e: any): Observable<any> {
    this.exibirMensagem('OPS !!!','Servidor Desconectado!','toast-error');
    return EMPTY
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void{
    this.toastr.show(mensagem,titulo,{closeButton:true, progressBar:true}, tipo)
  }

}
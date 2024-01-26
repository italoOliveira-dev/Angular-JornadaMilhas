import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PessoaUsuario } from '../models/Types';

@Injectable({
	providedIn: 'root'
})
export class CadastroService {

	apiUrl: string = environment.apiUrl;

	constructor(private http: HttpClient) { }

	cadastrarNovoUsuario(dadosUsuario: PessoaUsuario): Observable<PessoaUsuario> {
		return this.http.post<PessoaUsuario>(`${this.apiUrl}/auth/cadastro`, {dadosUsuario});
	}
}

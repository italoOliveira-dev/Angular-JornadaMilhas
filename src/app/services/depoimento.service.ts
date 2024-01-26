import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Depoimento } from '../models/Types';

@Injectable({
	providedIn: 'root'
})
export class DepoimentoService {

	urlApi = environment.apiUrl;

	constructor(private http: HttpClient) { }

	listar(): Observable<Depoimento[]> {
		return this.http.get<Depoimento[]>(`${this.urlApi}/depoimentos`);
	}
}

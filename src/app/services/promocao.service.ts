import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Promocao } from '../models/Types';

@Injectable({
	providedIn: 'root'
})
export class PromocaoService {

	private apiUrl: string = environment.apiUrl;

	constructor(
    private http: HttpClient
	) { }

	listar (): Observable<Promocao[]> {
		return this.http.get<Promocao[]>(`${this.apiUrl}/promocoes`);
	}
}

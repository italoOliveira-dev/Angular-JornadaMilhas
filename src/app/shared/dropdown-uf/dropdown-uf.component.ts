import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable, map, startWith } from 'rxjs';
import { UnidadeFederativa } from '../../models/Types';
import { UnidadeFederativaService } from '../../services/unidade-federativa.service';


@Component({
	selector: 'app-dropdown-uf',
	standalone: true,
	imports: [
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatAutocompleteModule,
		ReactiveFormsModule,
		AsyncPipe
	],
	templateUrl: './dropdown-uf.component.html',
	styleUrl: './dropdown-uf.component.scss'
})
export class DropdownUfComponent implements OnInit {
	@Input() label: string = '';
	@Input() iconePrefixo: string = '';
	@Input() control!: FormControl;

	unidadesFederativas: UnidadeFederativa[] = [];
	filtoUnidadeFederativa$?: Observable<UnidadeFederativa[]>;

	constructor(private unidadeFederativaService: UnidadeFederativaService) {

	}

	ngOnInit(): void {
		this.listarPromocoes();
		this.filtarUnidadeFederativas();
	}

	listarPromocoes() {
		this.unidadeFederativaService.listar()
			.subscribe(response => this.unidadesFederativas = response);
	}

	filtarUnidadeFederativas() {
		this.filtoUnidadeFederativa$ = this.control.valueChanges.pipe(
			startWith(''),
			map(value => this._filter(value || '')),
		);
	}

	private _filter(value: string | UnidadeFederativa): UnidadeFederativa[] {
		const nomeUF = typeof value === 'string' ? value : value?.nome;
		const filterValue = nomeUF.toLowerCase();

		return this.unidadesFederativas.filter(option => option.nome.toLowerCase().includes(filterValue));
	}

	displayFN(estado: UnidadeFederativa): string {
		return estado && estado.nome ? estado.nome : '';
	}

}

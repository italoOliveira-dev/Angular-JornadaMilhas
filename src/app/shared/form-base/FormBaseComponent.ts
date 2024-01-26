import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { UnidadeFederativa } from '../../models/Types';
import { ContainerComponent } from '../container/container.component';
import { DropdownUfComponent } from '../dropdown-uf/dropdown-uf.component';
import { FormularioService } from './../../services/formulario.service';



@Component({
	selector: 'app-form-base',
	standalone: true,
	imports: [
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatGridListModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatRadioModule,
		DropdownUfComponent,
		MatDividerModule,
		MatCheckboxModule,
		ContainerComponent,
		ReactiveFormsModule
	],
	templateUrl: './form-base.component.html',
	styleUrl: './form-base.component.scss'
})
export class FormBaseComponent implements OnInit {
	cadastroForm!: FormGroup;
	estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);
	@Input() perfilComponent!: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	@Output() acaoClique: EventEmitter<any> = new EventEmitter();

	constructor(
		private formBuilder: FormBuilder,
		private formularioService: FormularioService
	) { }

	ngOnInit() {
		this.cadastroForm = this.formBuilder.group({
			nome: [null, Validators.required],
			nascimento: [null, [Validators.required]],
			cpf: ['12312312123', [Validators.required]],
			cidade: ['Fortaleza', Validators.required],
			email: ['teste@email.com', [Validators.required, Validators.email]],
			senha: ['123456', [Validators.required, Validators.minLength(3)]],
			genero: ['outro'],
			telefone: ['12312312123', Validators.required],
			estado: this.estadoControl,
			confirmarEmail: ['teste@email.com', [Validators.required, Validators.email]],
			confirmarSenha: ['123456', [Validators.required, Validators.minLength(3)]],
			aceitarTermos: [null, [Validators.requiredTrue]]
		});

		this.formularioService.setCadastro(this.cadastroForm);
	}

	executarAcao() {
		this.acaoClique.emit();
	}
}

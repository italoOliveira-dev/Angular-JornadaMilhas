import { Component } from '@angular/core';
import { PessoaUsuario } from '../../models/Types';
import { FormularioService } from '../../services/formulario.service';
import { BannerComponent } from '../../shared/banner/banner.component';
import { FormBaseComponent } from '../../shared/form-base/FormBaseComponent';
import { CadastroService } from './../../services/cadastro.service';

@Component({
	selector: 'app-cadastro',
	standalone: true,
	imports: [
		BannerComponent,
		FormBaseComponent,
	],
	templateUrl: './cadastro.component.html',
	styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

	perfilComponent: boolean = false;

	constructor(
		private formularioService: FormularioService,
		private cadastroService: CadastroService
	) {

	}

	cadastrar() {
		const formCadastro = this.formularioService.getCadastro();
		if (formCadastro?.valid) {
			const novoCadastro = formCadastro.getRawValue() as PessoaUsuario;
			console.log(novoCadastro);
			this.cadastroService.cadastrarNovoUsuario(novoCadastro).subscribe({
				next: (value) => {
					console.log('Cadastro realizado com sucesso', value);
				},
				error: (err) => {
					console.log('Erro ao realizar cadastro', err);
				}
			});
		}
	}
}

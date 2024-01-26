import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { BannerComponent } from '../../shared/banner/banner.component';



@Component({
	selector: 'app-login',
	standalone: true,
	imports: [
		CommonModule,
		BannerComponent,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		ReactiveFormsModule,
		RouterLink
	],
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
	loginForm!: FormGroup;

	constructor (
		private formBuilder: FormBuilder,
		private authService: AutenticacaoService
	) {

	}

	ngOnInit(): void {
		this.loginForm = this.formBuilder.group({
			email: [null, [Validators.required, Validators.email]],
			senha: [null, Validators.required]
		});
	}

	login () {

		const email = this.loginForm.value.email;
		const senha = this.loginForm.value.senha;

		this.authService.autenticar(email, senha).subscribe({
			next: response => {
				console.log(response);
			},
			error: (err) => {
				console.log('erro no login', err);
			}
		});
	}
}

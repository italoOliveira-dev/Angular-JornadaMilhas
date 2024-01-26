import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormBuscaService } from '../../services/form-busca.service';
import { BotaoControleComponent } from '../botao-controle/botao-controle.component';
import { SeletorPassageiroComponent } from '../seletor-passageiro/seletor-passageiro.component';

@Component({
	selector: 'app-modal',
	standalone: true,
	imports: [
		MatDialogModule,
		MatIconModule,
		MatChipsModule,
		MatButtonModule,
		BotaoControleComponent,
		SeletorPassageiroComponent,
		ReactiveFormsModule,
		FormsModule
	],
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.scss'
})
export class ModalComponent {

	constructor(public formBuscaService: FormBuscaService) {

	}

}

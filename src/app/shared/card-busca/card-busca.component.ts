import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-card-busca',
	standalone: true,
	imports: [
		MatCardModule,
		MatButtonModule,
	],
	templateUrl: './card-busca.component.html',
	styleUrl: './card-busca.component.scss'
})
export class CardBuscaComponent {
	@Input() imagem: string = '';
	@Input() destino: string = '';
	@Input() preco: string = '';
}

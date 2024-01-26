import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-botao-controle',
	standalone: true,
	imports: [MatIconModule, NgClass],
	templateUrl: './botao-controle.component.html',
	styleUrl: './botao-controle.component.scss'
})
export class BotaoControleComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = 'incrementar';
}

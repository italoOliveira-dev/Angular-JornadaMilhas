import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BotaoControleComponent } from '../botao-controle/botao-controle.component';

@Component({
	selector: 'app-seletor-passageiro',
	standalone: true,
	imports: [BotaoControleComponent],
	templateUrl: './seletor-passageiro.component.html',
	styleUrl: './seletor-passageiro.component.scss',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SeletorPassageiroComponent),
			multi: true
		}
	]
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
	@Input() titulo: string = '';
	@Input() subTitulo: string = '';

	value: number = 0;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onChange = (valor: number) => { };
	onTouch = () => { };

	writeValue(valor: number): void {
		this.value = valor;
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setDisabledState?(isDisabled: boolean): void {

	}

	incrementar() {
		this.value += 1;
		this.onChange(this.value);
		this.onTouch;
	}

	decrementar() {
		if (this.value > 0) {
			this.value -= 1;
			this.onChange(this.value);
			this.onTouch;
		}
	}
}

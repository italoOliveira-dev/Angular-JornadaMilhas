import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormBuscaService } from '../../services/form-busca.service';
import { CardComponent } from '../card/card.component';
import { DropdownUfComponent } from '../dropdown-uf/dropdown-uf.component';

@Component({
	selector: 'app-form-busca',
	standalone: true,
	imports: [
		CardComponent,
		MatButtonToggleModule,
		MatIconModule,
		MatChipsModule,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatButtonModule,
		ReactiveFormsModule,
		MatAutocompleteModule,
		DropdownUfComponent,
		FormsModule,
	],
	templateUrl: './form-busca.component.html',
	styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {

	constructor(
		public formBuscaService: FormBuscaService) { }

	buscar() {
		console.log(this.formBuscaService.formBusca.value);
	}

}

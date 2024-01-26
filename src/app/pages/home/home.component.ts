import { Component, OnInit } from '@angular/core';
import { Depoimento, Promocao } from '../../models/Types';
import { DepoimentoService } from '../../services/depoimento.service';
import { PromocaoService } from '../../services/promocao.service';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CardBuscaComponent } from '../../shared/card-busca/card-busca.component';
import { CardDepoimentoComponent } from '../../shared/card-depoimento/card-depoimento.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { FormBuscaComponent } from '../../shared/form-busca/form-busca.component';

@Component({
	selector: 'app-home',
	standalone: true,
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	imports: [
		BannerComponent,
		ContainerComponent,
		CardBuscaComponent,
		CardDepoimentoComponent,
		FormBuscaComponent
	]
})
export class HomeComponent implements OnInit {
	promocoes: Promocao[] = [];
	depoimentos: Depoimento[] = [];

	constructor(
		private promocaoService: PromocaoService,
		private depoimentoService: DepoimentoService
	) {

	}

	ngOnInit(): void {
		this.listarPromocoes();
		this.listarDepoimentos();
	}

	listarPromocoes() {
		this.promocaoService.listar()
			.subscribe(
				response => this.promocoes = response
			);
	}

	listarDepoimentos() {
		this.depoimentoService.listar()
			.subscribe(
				response => this.depoimentos = response
			);
	}
}

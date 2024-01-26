import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { ContainerComponent } from '../container/container.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [
		MatToolbarModule,
		MatButtonModule,
		ContainerComponent,
		RouterLink
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

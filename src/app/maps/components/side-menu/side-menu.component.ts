import { Component } from '@angular/core';
import { MenuItemI } from '../../interfaces/menu-item-i';

@Component({
	selector: 'maps-side-menu',
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
	
	public menuItems: MenuItemI[] = [
		{ route: '/maps/fullscreen', 	name: 'Full Screen' },
		{ route: '/maps/zoom-range', 	name: 'Zoom Range' },
		{ route: '/maps/markers', 		name: 'Markers' },
		{ route: '/maps/properties', 	name: 'Properties' },
	];

}

import { AfterViewInit, Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

// * debemos manejarlo de esta manera
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiamhvbmdvbWV6ZGV2ZWxvcGVyIiwiYSI6ImNscDE0NTNycTBkN3YybHM0dnBja3l4c2MifQ.t1sTVKRtVm2Jmqe3Hu8mQQ';

@Component({
	templateUrl: './full-screen-page.component.html',
	styleUrls: ['./full-screen-page.component.scss']
})
export class FullScreenPageComponent implements AfterViewInit {

	ngAfterViewInit(): void {

		const map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/mapbox/streets-v12', // style URL
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: 9, // starting zoom
		});
		
	}
}

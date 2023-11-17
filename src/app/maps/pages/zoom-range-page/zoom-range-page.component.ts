import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
	templateUrl: './zoom-range-page.component.html',
	styleUrls: ['./zoom-range-page.component.scss']
})
export class ZoomRangePageComponent implements AfterViewInit {
	
	@ViewChild('map') public divMap?: ElementRef;

	public zoom: number = 10;
	public map?: Map;

	ngAfterViewInit(): void {

		if( !this.divMap ) throw 'El HTML no fue encontrado (Mapa)';

		this.map = new Map({
			container: this.divMap.nativeElement, // container ID
			style: 'mapbox://styles/mapbox/streets-v12', // style URL
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: this.zoom, // starting zoom
		});

		this.mapsListeners();

	}

	mapsListeners() {
		if ( !this.map ) throw 'Mapa no inicializado';

		this.map.on('zoom', (ev) => {
			this.zoom = this.map!.getZoom();
		});

		this.map.on('zoomend', (ev) => {
			
			if( this.map!.getZoom() < 17 ) return
			this.map?.zoomTo(17)

		})
	}

	zoomIn() {
		this.map?.zoomIn();
	}

	zoomOut() {
		this.map?.zoomOut();
	}

	zoomChanged( value: string ) {
		this.zoom = Number(value);
		this.map?.zoomTo( this.zoom );
	}

}

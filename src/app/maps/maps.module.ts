import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';

import { MiniMapComponent } from './components/mini-map/mini-map.component';

import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import * as mapboxgl from 'mapbox-gl';
// * debemos manejarlo de esta manera
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiamhvbmdvbWV6ZGV2ZWxvcGVyIiwiYSI6ImNscDE0NTNycTBkN3YybHM0dnBja3l4c2MifQ.t1sTVKRtVm2Jmqe3Hu8mQQ';

@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule
  ]
})
export class MapsModule { }

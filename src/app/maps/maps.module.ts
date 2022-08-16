import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapsComponent } from './components/mini-maps/mini-maps.component';
import { FullscreenComponent } from './pages/fullscreen/fullscreen.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropsComponent } from './pages/props/props.component';

@NgModule({
  declarations: [
    MiniMapsComponent,
    FullscreenComponent,
    MarkersComponent,
    ZoomRangeComponent,
    PropsComponent,
  ],
  imports: [CommonModule, MapsRoutingModule],
})
export class MapsModule {}

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css'],
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap!: ElementRef;

  map!: mapboxgl.Map;

  zoomLevel: number = 10;

  center: [number, number] = [6.947131521604064, 50.9213538380246];

  constructor() {}
  ngOnDestroy(): void {
    this.map.off('zoom', (e) => {});
    this.map.off('zoomend', (e) => {});
    this.map.off('move', (e) => {});
  }

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: 16,
    });

    this.map.on('zoom', (ev) => (this.zoomLevel = this.map.getZoom()));

    this.map.on('zoomend', (ev) => {
      if (this.map.getZoom() > 18) {
        this.map.zoomTo(18);
      }
    });

    this.map.on('move', (ev) => {
      const target = ev.target;
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    });
  }

  zoomIn() {
    this.map.zoomIn();
  }

  zoomOut() {
    this.map.zoomOut();
  }

  zoomChange(value: string) {
    this.map.zoomTo(Number(value));
  }
}

import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

interface markerColor {
  color: string;
  marker?: mapboxgl.Marker;
  center?: [number, number];
}

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.css'],
})
export class MarkersComponent implements AfterViewInit {
  @ViewChild('map') divMap!: ElementRef;

  map!: mapboxgl.Map;

  zoomLevel: number = 15;

  center: [number, number] = [6.947131521604064, 50.9213538380246];

  markers: markerColor[] = [];

  constructor() {}
  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: 16,
    });

    this.readLocalStorage();
  }

  addMarker() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const marker = new mapboxgl.Marker({
      draggable: true,
      color,
    })
      .setLngLat(this.center)
      .addTo(this.map);

    this.markers.push({
      color,
      marker,
    });

    this.savLocalStorage();

    marker.on('dragend', (e) => {
      this.savLocalStorage();
    });
  }

  gotoMarker(marker: mapboxgl.Marker) {
    this.map.flyTo({
      center: marker.getLngLat(),
    });
  }

  savLocalStorage() {
    const lngLat: markerColor[] = [];

    this.markers.forEach((mark) => {
      const color = mark.color;
      const { lng, lat } = mark.marker!.getLngLat();

      lngLat.push({
        color,
        center: [lng, lat],
      });
    });

    localStorage.setItem('markers', JSON.stringify(lngLat));
  }

  readLocalStorage() {
    if (!localStorage.getItem('markers')) {
      return;
    }

    const lngLatArr: markerColor[] = JSON.parse(
      localStorage.getItem('markers')!
    );

    lngLatArr.forEach((i) => {
      const newMarker = new mapboxgl.Marker({
        color: i.color,
        draggable: true,
      })
        .setLngLat(i.center!)
        .addTo(this.map);

      this.markers.push({
        marker: newMarker,
        color: i.color,
      });

      newMarker.on('dragend', (e) => {
        this.savLocalStorage();
      });
    });
  }

  deleteMarker(i: number) {
    this.markers[i].marker?.remove();
    this.markers.splice(i, 1);
    this.savLocalStorage();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage {
  // Coordenadas para centrar el mapa y el marcador
  center: google.maps.LatLngLiteral = { lat: 21.846583, lng: -102.259444 }; // Coordenadas nuevas
  zoom = 16;

  // Coordenadas del marcador
  markerPosition: google.maps.LatLngLiteral = { lat: 21.846583, lng: -102.259444 };

  constructor() {}
}

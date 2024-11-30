import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { UbicacionPageRoutingModule } from './ubicacion-routing.module';
import { UbicacionPage } from './ubicacion.page';
import { GoogleMapsModule } from '@angular/google-maps';  // Importa el módulo de Google Maps

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicacionPageRoutingModule,
    GoogleMapsModule  // Asegúrate de agregar esto
  ],
  declarations: [UbicacionPage]
})
export class UbicacionPageModule {}

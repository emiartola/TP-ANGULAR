import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { HomeComponent } from './components/home/home.component';
import { InstrumentoItemComponent } from './components/instrumento-item/instrumento-item.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FuncionesApiService } from './services/funciones-api.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DetalleInstrumentoComponent,
    InstrumentoItemComponent,
    HomeComponent,
    DondeEstamosComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [FuncionesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

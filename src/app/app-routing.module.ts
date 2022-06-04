import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleInstrumentoComponent } from './components/detalle-instrumento/detalle-instrumento.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { HomeComponent } from './components/home/home.component';
import { InstrumentoItemComponent } from './components/instrumento-item/instrumento-item.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
    { path: 'where', component: DondeEstamosComponent },
    { path: 'instrumentos', component: InstrumentoItemComponent },
    { path: 'detalleInstrumento/:id', component: DetalleInstrumentoComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

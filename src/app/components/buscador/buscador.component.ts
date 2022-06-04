import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionesApiService } from 'src/app/services/funciones-api.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  instrumentosBusqueda:any = [];
  termino:string= "";
  
  constructor(private activatedRoute:ActivatedRoute, private service:FuncionesApiService, private router:Router) { }
  
  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.instrumentosBusqueda = this.service.buscarInstrumentos(params['termino']);
    });
  }
  
  public verInstrumento(idx:string){
    this.router.navigate(['/detalleInstrumento', idx])
  }
  }
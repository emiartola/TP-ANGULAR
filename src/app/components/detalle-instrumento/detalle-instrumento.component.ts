import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionesApiService } from 'src/app/services/funciones-api.service';

@Component({
  selector: 'app-detalle-instrumento',
  templateUrl: './detalle-instrumento.component.html',
  styleUrls: ['./detalle-instrumento.component.css']
})
export class DetalleInstrumentoComponent implements OnInit {

  instrumento:any;


  constructor(private activatedRoute:ActivatedRoute, private service:FuncionesApiService, private router: Router) {

    // console.log("ID PARAM " + this.activatedRoute.params['id']);
    this.activatedRoute.params.subscribe(params =>{
      console.log(params['id'])
      this.instrumento = this.service.getInstrumentoXId(params['id'])
    }) 
    
  
  }
 


  ngOnInit(): void {
    
  }

}

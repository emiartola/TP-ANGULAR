import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionesApiService } from 'src/app/services/funciones-api.service';

@Component({
  selector: 'app-instrumento-item',
  templateUrl: './instrumento-item.component.html',
  styleUrls: ['./instrumento-item.component.css']
})

export class InstrumentoItemComponent implements OnInit {
  
  instrumentosArr:any[] = [];

  constructor(private service:FuncionesApiService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.instrumentosArr = this.service.getInstrumentos();
    console.log(this.instrumentosArr);
  }

  public verInstrumento(idx:string){
    console.log("ID INSTRUMENTO " + idx);
    this.router.navigate(['/detalleInstrumento', idx])
  }


}


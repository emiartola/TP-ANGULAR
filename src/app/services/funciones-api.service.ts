import { Injectable } from '@angular/core';
import  *  as  data  from  'src/assets/datos/instrumentos.json'

@Injectable({
  providedIn: 'root'
})
export class FuncionesApiService {

  productosFile:any  = (data  as  any).default;

  constructor() {
    console.log("Servicio Cargado!");
    console.log(this.productosFile);
   }
   
  public getInstrumentos():any[]{
    return this.productosFile.instrumentos;
    console.log(this.productosFile.instrumentos);
  }

  public getInstrumentoXId(idx:string):any{
      for(let instrumento of this.productosFile.instrumentos){
          if(instrumento.id == idx){
            return instrumento;
          } 
      }
  }

  public buscarInstrumentos(termino:string):any[]{
      let instrumentosArr:any[] = [];
      termino = termino.toLowerCase();

      for(let instrumento of this.productosFile.instrumentos){
        let nombre = instrumento.nombre.toLowerCase();
        if(nombre.indexOf(termino) >= 0){
          instrumentosArr.push(instrumento);
        }

      }
      return instrumentosArr;
    }
}








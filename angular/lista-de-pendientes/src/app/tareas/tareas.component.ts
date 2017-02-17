import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor(private http: Http) { }


  tareas: Array<Object>;
  modeloItem: any;
  error: any;

  ngOnInit() {
    this.modeloItem = {};
    this.peticionExterna();
  }

  actualizar():void{
    this.peticionExterna();
  }

  peticionExterna(): void {

    this.http.request('http://localhost:8080/api/lista')
      .subscribe(
        (respuesta: Response) =>  this.tareas = respuesta.json() ,
        ( error:Response ) => this.error = error
      )

  }


  crearRegistro():void{

      var parametros = { texto: this.modeloItem.nuevoNombre };

     this.http.post('http://localhost:8080/api/lista' , parametros)
      .subscribe((respuesta: Response) => {

          this.peticionExterna();
        
      })

  }

  

  
}

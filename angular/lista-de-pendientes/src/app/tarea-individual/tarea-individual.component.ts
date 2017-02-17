import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { Http , Response} from '@angular/http';

@Component({
  selector: 'app-tarea-individual',
  templateUrl: './tarea-individual.component.html',
  styleUrls: ['./tarea-individual.component.css']
})
export class TareaIndividualComponent implements OnInit {

  @Input()
  tareaInfo: any;

  @Output()
  cambioTarea : EventEmitter<number> = new EventEmitter();

  mostrarDatos:Boolean;
  tareaModel:any;


  constructor(private http: Http) { }

  ngOnInit() {
    this.tareaModel = {};
  }

  activarEdicion(nombre:String):void{
    this.mostrarDatos = true;
    this.tareaModel.nombre = nombre;
  }


  editarTarea(tareaInfo){
    var parametros = { texto : this.tareaModel.nombre}

    this.http.put('http://localhost:8080/api/lista/' + tareaInfo._id ,   parametros)
    .subscribe((respuesta: Response) => {

      this.cambioTarea.emit();

     }  )
  }

  borrarRegistro(tareaInfo):void{
    this.http.delete('http://localhost:8080/api/lista/' + tareaInfo._id)
    .subscribe((respuesta: Response) => {

      this.cambioTarea.emit();

     }  )
  }
}

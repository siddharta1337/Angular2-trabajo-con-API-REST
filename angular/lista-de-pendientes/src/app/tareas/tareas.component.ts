import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas;
  error;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.peticionExterna();
  }

  actualizar(): void {
    this.peticionExterna();
  }

  peticionExterna(): void {
    this.http.get('http://localhost:8080/api/lista')
      .subscribe(
        (respuesta) => this.tareas = respuesta,
        (error) => this.error = error

      )
  }

  crearRegistro(nuevoNombre) {

    var parametros = { texto: nuevoNombre.value };

    this.http.post('http://localhost:8080/api/lista', parametros).subscribe(respuesta => {
      this.peticionExterna();
    })
  }



}

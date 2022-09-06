import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/model/datos';
import { Usuario } from 'src/app/model/usuario';
import { DemoService } from '../../providers/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre: string='';
  formulario: Datos;
  ver: boolean=false;
  listaUsuarios: Usuario[]=[];

  constructor(private _servicioDemo: DemoService) {
    this.formulario=new Datos();
  }

  ngOnInit(): void {
    this.nombre='Sin Nombre';
  }

  onSubmit() {
    this.nombre=this.formulario.nombre;
  }

  verUsuarios(){
    this._servicioDemo.obtenerUsuarios().subscribe(respuesta=>{
      this.listaUsuarios=respuesta as Usuario[];
      console.log(this.listaUsuarios);
      this.ver=true;
    });
    
  }
}

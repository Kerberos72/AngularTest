import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Usuario } from './../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  API_URL: string;
  httpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.API_URL = environment.URL_API;
    this.httpHeaders.set('Content-Type', 'application/json');
    this.httpHeaders.set('Access-Control-Allow-Origin:', '*');
    this.httpHeaders.set('Access-Control-Allow-Headers:', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    this.httpHeaders.set('Access-Control-Allow-Methods:', 'GET, POST, OPTIONS, PUT, DELETE');
  }

  obtenerUsuarios(): Observable<any> {
    const API = this.API_URL;
    return this.http.get(API, { headers: this.httpHeaders });
  }

  guardarUsuario(usuario: Usuario): Observable<any> {
    const API = this.API_URL+'/guardar';
    return this.http.post(API,usuario,{ headers: this.httpHeaders });
  }

  eliminarUsuario(usuario: Usuario): Observable<any> {
    const API = this.API_URL+'/eliminar/'+usuario.id;
    return this.http.delete(API,{ headers: this.httpHeaders });
  }

}

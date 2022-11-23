import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programa} from '../class/programa';

const baseUrl = 'http://localhost:8080/api/v1/programa';


@Injectable({
  providedIn: 'root'
})
export class ProgramaService {

  constructor(private http: HttpClient) {   }

// Obtener Programas
  getAll():Observable<Programa[]>{
    return this.http.get<Programa[]>(baseUrl);
  }

//Obtener un Programa
get(id:String):Observable<Programa>{
  return this.http.get<Programa>(baseUrl+'/'+id);
}

//Crear Programa 
create(programa:Programa):Observable<Programa>{
  return this.http.post<Programa>(baseUrl, programa);
}

//Actualizar Programa
update(programa:Programa):Observable<Programa>{
  return this.http.put<Programa>(baseUrl,programa)
}
}
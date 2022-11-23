import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from '../class/mail';


@Injectable({
  providedIn: 'root'
})
export class MailService {
  
  private baseUrl = 'http://localhost:8080/api/v1/add';

  constructor(private http : HttpClient) { }
  
  correo :Mail = new Mail();

  crearMail():Observable<Mail>{
    return this.http.post<Mail>(this.baseUrl,this.correo)
  }
}

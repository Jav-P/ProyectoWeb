import { Component, OnInit } from '@angular/core';
import { ProgramaService } from '../services/programa.service';
import { Programa } from '../class/programa';
import { Router } from '@angular/router';



@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {
titulo:string="Lista de Programas";

  programas:Programa[];

  constructor(private pservice:ProgramaService, private rutas:Router) { }

  ngOnInit(): void {
    this.pservice.getAll().subscribe(
          p  => this.programas=p
    );
  }

  irLogin(){
    this.rutas.navigate([''])
  }

}

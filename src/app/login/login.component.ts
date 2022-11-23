import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthenticationService } from 'src/app/services/auth.service';
import { Mail } from '../class/mail';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;
  
  /*correo.
    mailTo: "javierandrespp@hotmail.com",
	  mailSubject: "Prueba desde el Front",
	  mailContent: "Funciona"
  }*/
  constructor(
    private apps : AppComponent,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private mail:MailService) { 
    }

  ngOnInit() {
  }

  irLogin(){
    this.router.navigate([''])
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      //this.invalidLogin = false;
      this.loginSuccess = true;
      this.apps.isLoggedIn = true
      this.successMessage = 'Login Successful.';
      console.log("Me logeo");     
      this.router.navigate(['/programa']);
      //this.correo();
    }, error => {
      console.log("Dio error");
      
      this.invalidLogin = true;
      this.loginSuccess = false;
    });    
    
  }
  
  correo(){
    this.mail.crearMail().subscribe(dato=>{
      //console.log(dato);      
      //console.log("Enviar correo");
    },error=>{
      //console.log("Dio error");
      //console.log(error);
      
    })    
  }
}
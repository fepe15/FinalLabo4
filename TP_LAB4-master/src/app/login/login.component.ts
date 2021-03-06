import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Subscription, from} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {LoginService} from '../../../src/app/services/login.service';
import { UsuariosService } from '../services/usuarios.service';
import {Usuario} from '../clases/usuario';
import { MatDialog, MatDialogRef} from '@angular/material';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm: FormGroup;
  registerForm: FormGroup;

    loading = false;
    submitted = false;
    returnUrl: string;
    datacallback: string;
    public dataRespuesta:any;
    respuesta: any;
    hide: any;
    registro = false;
    @Input () type: any;

    constructor(
        private formBuilder: FormBuilder,
        //private route: ActivatedRoute,
        private router: Router,
        private _login: LoginService,
        private userService: UsuariosService,
        private dialog: MatDialog
        //private authenticationService: AuthenticationService,
        //private alertService: AlertService
        ) {
        }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required],
          password2: ['', Validators.required]
      });
      }

      get f() { return this.loginForm.controls; }
      get r() { return this.registerForm.controls; }

      GoToRegistro(){
        this.registro=true;
      }

  
  Registrar(){ 

      this.submitted = true;
      this.loading = true;
      
      // stop here if form is invalid
      // if (this.loginForm.invalid) {
      //   return;
      // }
      if(this.r.password.value == this.r.password2.value){
        let clave:string = this.r.password.value;
        if(clave.length > 7){
          this.cargarUsuario(this.r.username.value, this.r.password.value);
          this.dialog.closeAll();
        }
        else{
          alert("la contraseña debe tener 8 caracteres como minimo")
        }
      }
      else{
        alert("Las contraseñas no coinciden");
      }

  }

cargarUsuario(usuario,clave){
  this.userService.CargarCliente(usuario,clave).subscribe(data=>{
    let respuesta= JSON.parse(data._body);
   console.log(respuesta);
   if(respuesta != undefined){
    alert("usuario Cargardo Correctamente")
   }
 });
}
  

Entrar(){ 
    
  this.submitted = true;
  this.loading = true;
  
  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }
 
  let datosLogin = new Usuario(this.f.username.value, this.f.password.value);

  this._login.ServiceLogin(datosLogin)
  .subscribe( data =>{


    this.respuesta = JSON.parse(data._body);

    if (this.respuesta)
    {
      localStorage.setItem('data', JSON.stringify(this.respuesta) );
      localStorage.setItem('usuario', JSON.stringify(this.respuesta.datos) );
      
      localStorage.setItem('token', JSON.stringify(this.respuesta.token) );
      this.dialog.closeAll();
      if(this.respuesta.datos.perfil =='administrador')
      {
        this.router.navigate(['administrador']); 
      }
      else
      {
        if(this.respuesta.datos.perfil =='local')
        {
          this.router.navigate(['local']); 
        }
        else
        { 
          if(this.respuesta.datos.perfil =='cliente')
          {
            this.router.navigate(['menu']); 
          }
          else
          { 
            this.router.navigate(['listado']); 
          }
        }
      }
     
    }
    else{
      alert("error");
      this.router.navigate(['home']); 
    }

   
  });

}

LoginSocio()
{
  this.loginForm.controls['username'].setValue('admin@gmail.com');
  this.loginForm.controls['password'].setValue('admin');
}

LoginCliente()
{
  this.loginForm.controls['username'].setValue('cliente1@gmail.com');
  this.loginForm.controls['password'].setValue('1234');
}

LoginAdministrador()
{
this.loginForm.controls['username'].setValue('admin@gmail.com');
this.loginForm.controls['password'].setValue('1234');
}

LoginLocal()
{
this.loginForm.controls['username'].setValue('burgerking@bk.com');
this.loginForm.controls['password'].setValue('1234');
}


LoginChopera()
{
this.loginForm.controls['username'].setValue('chopera1@gmail.com');
this.loginForm.controls['password'].setValue('1234');
}

LoginCocina()
{
this.loginForm.controls['username'].setValue('cocina1@gmail.com');
this.loginForm.controls['password'].setValue('1234');
}

LoginCandy()
{
this.loginForm.controls['username'].setValue('candy1@gmail.com');
this.loginForm.controls['password'].setValue('1234');
}

}

import { Directive, ElementRef, Renderer, Input } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Directive({
  selector: '[appFondo]'
})
export class FondoDirective {

  perfil:string;
  
  
  constructor(private auth: AuthService, private element : ElementRef, private renderer : Renderer) 
  
  {
    this.perfil= auth.GetPayLoad().perfil;


    switch(this.perfil)
    {
      case "admin": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/bar-principal.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "barra": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/bar-principal.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "chopera": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/beer-820011_1920.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "candy": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/fondoCandy.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "mozo": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/fondoMozo.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "cocina": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/fondoCocina.jpg')");
     
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
      case "cliente": this.renderer.setElementStyle( this.element.nativeElement, 'background-image', "url('../../../assets/imagenes/fondoCliente.jpg')");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-repeat', "no-repeat");
      this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");
      break;
    }
    /*this.renderer.setElementStyle( this.element.nativeElement, 'background-position', "center center");
    this.renderer.setElementStyle( this.element.nativeElement, 'background-repeat', "no-repeat");
    this.renderer.setElementStyle( this.element.nativeElement, 'background-size', "cover");*/
   }

   


}

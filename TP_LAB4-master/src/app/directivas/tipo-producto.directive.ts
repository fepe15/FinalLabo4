import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[estilo]'
})
export class TipoProductoDirective {

  @Input() tipo: string;

  constructor(private element : ElementRef, private renderer : Renderer) { }

  ngOnInit()
  {


    switch(this.tipo)
    {
      case "cocina": this.renderer.setElementStyle( this.element.nativeElement, 'color', 'red')
      this.renderer.setElementStyle( this.element.nativeElement, 'font-size', '18px');
      this.renderer.setElementStyle( this.element.nativeElement, 'font-weight', 'bold')
      this.renderer.setElementStyle( this.element.nativeElement, 'font-family', 'verdana')
      break;
      case "barra": this.renderer.setElementStyle( this.element.nativeElement, 'color', 'blue');
      this.renderer.setElementStyle( this.element.nativeElement, 'font-size', '18px');
      this.renderer.setElementStyle( this.element.nativeElement, 'font-weight', 'bold')
      this.renderer.setElementStyle( this.element.nativeElement, 'font-family', 'verdana')
      break;
      case "chopera": this.renderer.setElementStyle( this.element.nativeElement, 'color', 'blue');
      this.renderer.setElementStyle( this.element.nativeElement, 'font-size', '18px');
      this.renderer.setElementStyle( this.element.nativeElement, 'font-weight', 'bold')
      this.renderer.setElementStyle( this.element.nativeElement, 'font-family', 'verdana')
      break;
      case "candy": this.renderer.setElementStyle( this.element.nativeElement, 'color', 'black');
      this.renderer.setElementStyle( this.element.nativeElement, 'font-size', '18px');
      this.renderer.setElementStyle( this.element.nativeElement, 'font-weight', 'bold')
      this.renderer.setElementStyle( this.element.nativeElement, 'font-family', 'verdana')
      break;
    }
  }

}

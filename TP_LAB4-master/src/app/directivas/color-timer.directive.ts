import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[ColorTimer]'
})
export class ColorTimerDirective {
  @Input() tiempo;

  constructor(private element : ElementRef, private renderer : Renderer) { }


  ngOnInit(){
    //console.log(this.tiempo);

    if(this.tiempo=="00:59"){
    this.renderer.setElementStyle( this.element.nativeElement, "color", "red");
    }
    if(this.tiempo=="00:00"){
      this.renderer.setElementStyle( this.element.nativeElement, "color", "green");
      }
      if(this.tiempo=="Terminado"){
        this.renderer.setElementStyle( this.element.nativeElement, "color", "green");
        }
  }
 

}

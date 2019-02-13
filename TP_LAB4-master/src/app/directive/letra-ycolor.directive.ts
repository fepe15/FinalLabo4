import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[letraYcolor]'
})
export class LetraYcolorDirective {

  constructor(private element : ElementRef, private renderer : Renderer) { }

  ngOnInit() 
  {
    this.renderer.setElementStyle( this.element.nativeElement, 'color', 'whitesmoke');
    this.renderer.setElementStyle( this.element.nativeElement, 'font-family', "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif");
  }
 
  

}


// letraYcolor
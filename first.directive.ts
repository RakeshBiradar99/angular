import { Directive ,ElementRef, HostListener,HostBinding,Renderer2} from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(private el:ElementRef,private renderer:Renderer2 ) {
/*  el.nativeElement.style.color="red";
    el.nativeElement.style.backgroundColor="sky blue";
   }
   @HostListener('mouseleave') mouseLeave(){
     this.el.nativeElement.style.color="blue";
   }
   @HostListener('click') onClick(){
    this.el.nativeElement.style.backgroundColor="pink";
  }
  @HostBinding("style.backgroundColor") bgColor:any;
 
@HostListener('mouseenter') mouseEnter(){
 this, this.bgColor="blue";

}


el.nativeElement.style.color="red";
  }
  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement,'background-color','khaki');
    this.renderer.setProperty(this.el.nativeElement,'color',"blue");
  }
  */
//  dateExample=Date();
}
}
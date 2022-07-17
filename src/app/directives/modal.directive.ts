import {Directive, ElementRef, HostListener} from '@angular/core';

// BETA :D

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {
  private start = false;

  constructor(private el: ElementRef) {
  }

  @HostListener('click', ['$event']) onMouseClick() {
    this.start = !this.start;
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: any) {
    if (this.start) {
      const position = event.target.getBoundingClientRect();

      this.el.nativeElement.style.top = `${position.top + event.movementY}px`;
      this.el.nativeElement.style.left = `${position.left + event.movementX}px`;
    }
  }
}

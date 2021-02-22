import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { ButtonTypeEnum } from '../enums/button-type.enum';
import { KeyValue } from '../types';


@Directive({
  selector: '[hbButton]'
})
export class HbButtonDirective implements OnInit {
  _look: ButtonTypeEnum = ButtonTypeEnum.Primary;

  @Input()
  set look(value: ButtonTypeEnum) {
    this._look = value;
    this.updateStyles();
  }
  get look(): ButtonTypeEnum {
    return this._look;
  }

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    console.log(this.look);
  }

  updateStyles(): void {
    const stylesByType = ButtonTypeEnum.styles(this.look);
    Object.keys(stylesByType).forEach((key: string) => {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        key,
        stylesByType[key]
      );
    });
  }
}

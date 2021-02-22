import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { applyStyles } from '../core/styles.core';
import { commonBtnStyle } from '../constants/button-styles.constants';
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

  apply: (keyValue: KeyValue) => void;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {
    this.apply = (keyValue: KeyValue) =>
      applyStyles(elementRef, renderer, keyValue);
  }

  ngOnInit(): void {
    this.applyCommonStyles();
  }

  applyCommonStyles(): void {
    this.apply(commonBtnStyle);
  }

  updateStyles(): void {
    this.apply(ButtonTypeEnum.styles(this.look));
  }
}

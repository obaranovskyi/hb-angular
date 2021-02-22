import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { applyStyles } from '../core/styles.core';
import { commonBtnStyle } from '../constants/button-styles.constants';
import { ButtonTypeEnum } from '../enums/button-type.enum';
import { KeyValue, ApplyStyleFn } from '../types';


@Directive({
  selector: '[hbButton]'
})
export class HbButtonDirective implements OnInit {
  private _look: ButtonTypeEnum = ButtonTypeEnum.Primary;
  private _apply: ApplyStyleFn;

  @Input()
  set look(value: ButtonTypeEnum) {
    this._look = value;
    this._updateStyles();
  }
  get look(): ButtonTypeEnum {
    return this._look;
  }

  constructor(
    private readonly _elementRef: ElementRef,
    private readonly _renderer2: Renderer2
  ) {
    this._apply = (keyValue: KeyValue) =>
      applyStyles(_elementRef, _renderer2, keyValue);
  }

  ngOnInit(): void {
    this._applyCommonStyles();
  }

  private _applyCommonStyles(): void {
    this._apply(commonBtnStyle);
  }

  private _updateStyles(): void {
    this._apply(ButtonTypeEnum.styles(this.look));
  }
}

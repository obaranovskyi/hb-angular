import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

import { applyStyles } from '../core';
import { commonBtnStyle } from '../constants/button-styles.constant';
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

  @HostListener('mouseover')
  onMouseOver(): void {
    this._apply({ 'opacity': '0.8' });
  }

  @HostListener('mouseout')
  onMouseOut(): void {
    this._apply({ 'opacity': '0.9' });
  }

  @HostListener('mousedown')
  onMouseDown(): void {
    this._apply({ 'opacity': '1' });
  }

  @HostListener('mouseup')
  onMouseUp(): void {
    this._apply({ 'opacity': '0.8' });
  }

  private _applyCommonStyles(): void {
    this._apply(commonBtnStyle);
  }

  private _updateStyles(): void {
    this._apply(ButtonTypeEnum.styles(this.look));
  }
}

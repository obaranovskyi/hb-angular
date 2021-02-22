import { Directive, Input, OnInit, Renderer2 } from '@angular/core';

import { ButtonTypeEnum } from '../enums/button-type.enum';


@Directive({
  selector: '[hbButton]'
})
export class HbButtonDirective implements OnInit {
  @Input()
  look: string = 'primary';

  constructor(
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    console.log(this.look);
  }
}

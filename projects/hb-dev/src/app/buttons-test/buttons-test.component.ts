import { Component, OnInit } from '@angular/core';

import { ButtonTypeEnum } from '@obaranovskyi/hb-angular-buttons';


@Component({
  selector: 'dev-buttons-test',
  templateUrl: './buttons-test.component.html',
  styleUrls: ['./buttons-test.component.scss']
})
export class ButtonsTestComponent {
  // TODO: Remove
  //ButtonTypeEnum: typeof ButtonTypeEnum = ButtonTypeEnum;
  //firstBtnClass: ButtonTypeEnum = ButtonTypeEnum.Dark;
  //toggleBtn: ButtonTypeEnum = ButtonTypeEnum.Light;

  //onClick(event: MouseEvent): void {
    //this.firstBtnClass = this.firstBtnClass === ButtonTypeEnum.Dark
      //? ButtonTypeEnum.Light
      //: ButtonTypeEnum.Dark;
  //}
}

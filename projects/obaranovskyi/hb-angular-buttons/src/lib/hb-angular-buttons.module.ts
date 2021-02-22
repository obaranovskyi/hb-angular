import { NgModule } from '@angular/core';

import { HbButtonDirective } from './directives/hb-button.directive';


@NgModule({
  declarations: [
    HbButtonDirective
  ],
  exports: [
    HbButtonDirective
  ]
})
export class HbAngularButtonsModule { }

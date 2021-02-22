import { NgModule } from '@angular/core';

import { HbAngularButtonsComponent } from './hb-angular-buttons.component';
import { HbButtonDirective } from './directives/hb-button.directive';


@NgModule({
  declarations: [
    HbAngularButtonsComponent,
    HbButtonDirective
  ],
  exports: [
    HbAngularButtonsComponent,
    HbButtonDirective
  ]
})
export class HbAngularButtonsModule { }

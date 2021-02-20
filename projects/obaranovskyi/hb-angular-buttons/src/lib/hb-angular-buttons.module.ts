import { NgModule } from '@angular/core';
import { HbAngularButtonsComponent } from './hb-angular-buttons.component';
import { HbButtonComponent } from './hb-button/hb-button.component';


@NgModule({
  declarations: [
    HbAngularButtonsComponent,
    HbButtonComponent
  ],
  imports: [
  ],
  exports: [
    HbAngularButtonsComponent,
    HbButtonComponent
  ]
})
export class HbAngularButtonsModule { }

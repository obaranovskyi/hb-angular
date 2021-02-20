import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { ButtonsTestComponent } from './buttons-test/buttons-test.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'buttons-test', component: ButtonsTestComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

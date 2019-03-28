import { NgModule } from '@angular/core';
import { SxyComponent } from './sxy.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [SxyComponent, ToggleComponent],
  imports: [
  ],
  exports: [SxyComponent]
})
export class SxyModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SxyComponent } from './sxy.component';
import { ToggleComponent } from './toggle/toggle.component';
import { InputBoxComponent } from './input-box/input-box.component';

@NgModule({
  declarations: [SxyComponent, ToggleComponent, InputBoxComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [SxyComponent]
})
export class SxyModule { }

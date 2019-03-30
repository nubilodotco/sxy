import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sxy-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {

  inputActive = false;
  inputFocus = false;
  @Input() colorAccents = 'rgb(30, 144, 255)';
  @Input() colorValue = 'rgb(0,0,0)';
  @Input() pattern = '*';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() value = '';
  @Input() width = '200px';

  constructor() { }

  ngOnInit() {
  }

}

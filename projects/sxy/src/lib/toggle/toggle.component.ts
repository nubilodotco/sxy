import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sxy-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

/** If the toggle should be 'on' when initialized, it can be taken as an input */
@Input() checked: boolean;

/** Set the color of the toggle when false (unchecked), default if not provided */
@Input() falseColor = 'rgb(204, 204, 204)';

  /** Set the color of the toggle when true (checked), default if not provided */
@Input() trueColor = 'rgb(59, 169, 68)';

/** Create an event emitter to send the status of the check back up */
@Output() toggled: EventEmitter<boolean> = new EventEmitter();

constructor() { }

ngOnInit() {
}

/** Get the event.target.checked and set this.checked to its value.
 * After that, emit it through our @Output for the implementer.
 */
toggle(event: any): void {
  this.checked = event.target.checked;
  this.toggled.emit(this.checked);
}
}

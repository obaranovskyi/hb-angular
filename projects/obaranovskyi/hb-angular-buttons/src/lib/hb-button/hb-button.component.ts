import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'hb-button',
  templateUrl: './hb-button.component.html',
  styleUrls: ['./hb-button.component.scss']
})
export class HbButtonComponent implements OnInit {
 
  click: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  ngOnInit(): void {
  }

}

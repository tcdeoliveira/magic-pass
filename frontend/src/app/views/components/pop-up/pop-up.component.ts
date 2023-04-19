import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
          

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})


export class PopUpComponent {
  faXmark = faXmark;

  @Input() actions: any;
  @Input() title: string | undefined;
  @Output() onCloseEvent = new EventEmitter<boolean>();
  @Output() onCancelEvent = new EventEmitter<boolean>();

  onClose(){
    this.onCloseEvent.emit(true);
  }

  onCancel(){
    this.onCancelEvent.emit(true);
  }
}

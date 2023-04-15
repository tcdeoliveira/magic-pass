import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'dashboard-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {
  @Input() label:string|undefined = undefined;
  @Input() value:Observable<number|string>|number|undefined = undefined;

  ngOnInit(): void {
    this.label = this.label ?? "Label";
    this.label = this.label ?? this.value ?? "0.00";
  }
}

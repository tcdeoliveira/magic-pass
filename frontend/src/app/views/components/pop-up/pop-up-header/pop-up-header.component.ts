import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up-header',
  templateUrl: './pop-up-header.component.html',
  styleUrls: ['./pop-up-header.component.scss']
})
export class PopUpHeaderComponent {
  @Input() title:string|undefined

}

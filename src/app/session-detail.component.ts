import { Session } from './session.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'session-detail',
  templateUrl: 'session-detail.component.html',
  styleUrls: ['session-detail.component.css']
})
export class SessionDetailComponent {
  @Input() session: Session;
}
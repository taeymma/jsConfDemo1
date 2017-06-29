import { Component } from '@angular/core';
import { Session } from './session.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string  = 'something something';
  selectedSession: Session = null;
  sessions: Session[] = [
    new Session('session1', 'joske', 'D101', 'info 1'),
    new Session('session2', 'joske', 'D102', 'info 2'),
    new Session('session3', 'joske', 'D103', 'info 3')
  ];

  select(session) {
    if (this.selectedSession == session) {
      this.selectedSession = null;
    } else {
      this.selectedSession = session;
    }
  }

  isSelected(session) {
    return (this.selectedSession == session);
  }
}

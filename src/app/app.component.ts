import {Component, OnInit} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {map, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-tutorial';

  constructor() {
  }

  ngOnInit(): void {
    const subject = new Subject();

    subject.subscribe({
      next: value => console.log(value),
      error: err => console.log(err),
      complete: () => console.log('completed')
    });

    subject.subscribe({
      next: value => console.log(value)
    });

    subject.next('A new data piece');
    // subject.error('Error');
    subject.complete();
  }
}

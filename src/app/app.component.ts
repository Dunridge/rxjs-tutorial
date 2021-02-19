import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

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
    const input = document.querySelector('input');
    const observable = fromEvent(input, 'input');
    observable
      .pipe(
        map(event => {
          // @ts-ignore
          return event.target.value;
        }),
        debounceTime(2000),
        distinctUntilChanged()
      )
      .subscribe({
        // @ts-ignore
        next: (value) => console.log(value)
      });
  }
}

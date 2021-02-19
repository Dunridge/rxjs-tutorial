import {Component, OnInit} from '@angular/core';
import {fromEvent, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, mergeMap, pluck, reduce, scan} from 'rxjs/operators';

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
    const input1 = document.querySelector('#input1');
    const input2 = document.querySelector('#input2');

    const span = document.querySelector('span');

    const obs1 = fromEvent(input1, 'input');
    const obs2 = fromEvent(input2, 'input');

    obs1.pipe(
      mergeMap(event1 => {
        return obs2.pipe(
          // @ts-ignore
          map(event2 => event1.target.value + ' ' + event2.target.value)
        );
      })
    ).subscribe(
      combinedValue => span.textContent = combinedValue
    );
  }
}

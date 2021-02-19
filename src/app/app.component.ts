import {Component, OnInit} from '@angular/core';
import {fromEvent, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, pluck, reduce, scan} from 'rxjs/operators';

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
        pluck('target', 'value'),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe({
        // @ts-ignore
        next: value => console.log(value)
      });
  }
}

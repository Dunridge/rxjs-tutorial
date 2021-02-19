import {Component, OnInit} from '@angular/core';
import {fromEvent, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, reduce, scan} from 'rxjs/operators';

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
    const observable = of(1, 2, 3, 4, 5);

    observable
      .pipe(
        scan((total, curr) => total + curr, 0)
      )
      .subscribe({
        next: value => console.log(value)
      });
  }
}

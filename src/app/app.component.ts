import {Component, OnInit} from '@angular/core';
import {fromEvent, interval, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, mergeMap, pluck, reduce, scan, switchMap} from 'rxjs/operators';

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
    const button = document.querySelector('button');

    const obs1 = fromEvent(button, 'click');
    const obs2 = interval(1000);

    // obs1.subscribe(
    //   (event) => {
    //     obs2.subscribe(
    //       value => console.log(value)
    //     );
    //   }
    // );

    // now the switchMap allows us to call the value from the inner observable and cancel other's out
    obs1.pipe(
      switchMap(
        event => {
          return obs2;
        }
      )
    ).subscribe(console.log);
  }
}

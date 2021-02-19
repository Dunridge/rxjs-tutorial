import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, fromEvent, interval, of, Subject} from 'rxjs';
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
    const clickEmitted = new BehaviorSubject('Not clicked');
    const button = document.querySelector('button');
    const div = document.querySelector('div');

    button.addEventListener('click', () => clickEmitted.next('Clicked!'));

    clickEmitted.subscribe(value => {
      // @ts-ignore
      div.textContent = value;
    });
  }
}

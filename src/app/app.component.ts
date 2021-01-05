import {Component, OnInit} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
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
    const button = document.querySelector('button');

    const observer = {
      next(value): void {
        console.log(value);
        // console.log(value.clientX);
      },
      error(err: any): void {
        console.log(err);
      },
      complete(): void {
        console.log('Completed');
      }
    };

    // creating an observable
    Observable.create(obs => {
      obs.next('A value');
      // obs.error('Error');
      // setTimeout(() => {
      //   obs.next('Another value'); // if we move this to after the complete call it never fires
      //   obs.complete();
      // }, 2000);
      button.onclick = event => {
        obs.next(event);
      };
    })
      .subscribe(observer);

    // building an Observable from scratch
  }
}

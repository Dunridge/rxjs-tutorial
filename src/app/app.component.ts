import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
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
    const observable = interval(1000);
    const observer = {
      next: (value) => {
        console.log(value);
      }
    };

    observable.pipe(
      map(value => {
        return 'Number: ' + value;
      }),
      throttleTime(2000)
      )
      .subscribe(observer);
  }
}

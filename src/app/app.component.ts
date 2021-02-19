import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {filter} from 'rxjs/operators';

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

    observable
      .pipe(
        filter((value => value % 2 === 0))
      )
      .subscribe({
        next: value => console.log(value),
        error: err => console.log('Error: ', err)
      });
  }
}

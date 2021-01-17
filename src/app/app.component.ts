import {Component, OnInit, ViewChild} from '@angular/core';
import {combineLatest, fromEvent, Observable} from 'rxjs';
import {map, scan, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-tutorial';

  ngOnInit(): void {
    const button = document.querySelector('button');
    // .addEventListener('click', () => console.log('clicked'));

    // fromEvent(button, 'click')
    //   .subscribe(() => console.log('clicked!!!'));

    // let count = 0;
    // button.addEventListener('click', () => console.log(`clicked ${++count} times`));

    // fromEvent(button, 'click').pipe(
    //  scan((countNum) => countNum + 1, 0)
    // ).subscribe((countNum) => console.log(`clicked ${countNum} times`));

    // fromEvent(button, 'click').pipe(
    //   throttleTime(1000),
    //   scan((countNum) => countNum + 1, 0)
    // ).subscribe((countNum) => console.log(`clicked ${countNum} times`));

    fromEvent(button, 'click').pipe(
      throttleTime(1000),
      map((event: MouseEvent) => event.clientX),
      scan((countNum, clientX) => countNum + clientX, 0)
    ).subscribe((countNum) => {
      // console.log(`clicked ${countNum} times`);
      console.log(countNum);
    });
  }
}

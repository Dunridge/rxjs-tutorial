import {Component, OnInit} from '@angular/core';
import 'rxjs';
import {fromEvent, interval, Observable, of, timer} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {debounce, debounceTime, filter, first, last, map, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-tutorial';
  value: any;
  observable$: Observable<any>;

  ngOnInit(): void {

    const clicks = fromEvent(document, 'click');

    // const mouseEvents = fromEvent(document, 'mousemove');
    //
    // mouseEvents.pipe(
    //   debounceTime(1000)
    // ).subscribe(e => console.log(e));

    // const numbers = of(10, -100, 1000);
    //
    // numbers.pipe(
    //   filter(n => n > 0),
    //   // first(),
    //   last()
    // ).subscribe(value => console.log(value));

    // const names = of('Max', 'Andrii', 'Vlad');
    // names.subscribe(name => console.log(name));

    // const jsonString = '{ "type": "Dog", "breed": "Pug"}';
    // const apiCall = of(jsonString);
    //
    // apiCall.pipe(
    //   map(json => JSON.parse(json))
    // ).subscribe(obj => console.log(obj.type, obj.breed));

    // const numbers = of(10, 100, 1000);
    //
    // numbers.pipe(
    //   map(num => Math.log(num)),
    //   map(num => Math.pow(num, 2))
    // ).subscribe(x => console.log(x));

    // const timerValue = timer(1000);
    // timerValue.finally(() => console.log('All done'))
    //   .subscribe();

    // this.observable$ = Observable.create(observer => {
    //   observer.next('hello'); // call next method to send values (value can be anything)
    //   observer.next('world');
    // });
    // this.observable$.subscribe(value => {
    //   console.log(value);
    // });

    // const clicks = fromEvent(document, 'click');
    // clicks.subscribe(click => console.log(click));

    // const promise = new Promise(((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('resolved!');
    //   }, 2000); // prints after a delay
    // }));
    //
    // const obsvPromise = fromPromise(promise)
    //   .subscribe(result => console.log(result));

    // const timerValue = timer(1000);
    // timerValue.subscribe(done => console.log('ding!!!'));

    // const intervalValue = interval(1000);
    // intervalValue.subscribe(int => console.log(new Date().getSeconds())); // every second we get a new value

    // const mashup = of('anything', ['you', 'want'], 23, true, {cool: 'stuff'});
    // mashup.subscribe(val => console.log(val));

    // Hot vs. Cold Observables
    // Cold
    // const cold = Observable.create(observer => {
    //   observer.next(Math.random());
    // });
    //
    // cold.subscribe(a => console.log(a));
    // cold.subscribe(b => console.log(b));

    // Hot
    // const x = Math.random();
    //
    // const hot = Observable.create(observer => {
    //   observer.next(x);
    // });
    //
    // hot.subscribe(a => console.log(a));
    // hot.subscribe(b => console.log(b));


  }
}

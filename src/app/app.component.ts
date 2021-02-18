import {Component, OnInit, ViewChild} from '@angular/core';
import {
  asyncScheduler,
  BehaviorSubject,
  combineLatest,
  from,
  fromEvent,
  interval,
  merge,
  observable,
  Observable,
  of,
  Subject,
  timer
} from 'rxjs';
import {
  bufferCount,
  catchError,
  debounceTime,
  delay,
  filter,
  map, retry,
  scan,
  share,
  shareReplay,
  switchMap,
  take, takeUntil, takeWhile,
  tap,
  throttleTime
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs-tutorial';

  ngOnInit(): void {

    const source = interval(100);

    const subscription = source.pipe(
      takeUntil(timer(2000))
      // takeWhile(v => v <= 10)
    );

    subscription.subscribe(console.log);

    // const subscription = source.subscribe(v => {
    //   console.log(v);
    //   if (v >= 10) {
    //     subscription.unsubscribe();
    //   }
    // });


    // const sub = new Subject();


    // sub.pipe(
    //   catchError(err => of('error')),
    //   // retry(2)
    // ).subscribe(console.log);
    //
    // sub.next('good');
    // sub.error('broken');

    // const randoAsync = Observable.create(o => o.next(Math.random()));
    // const delayed = randoAsync.pipe(delay(1000));
    //
    // const merged = merge(delayed, randoAsync, randoAsync, randoAsync);
    //
    // merged.subscribe(console.log);

    // const randoAsync = Observable.create(o => o.next(Math.random()));
    // const delayed = randoAsync.pipe(delay(1000));
    //
    // const combo = combineLatest([delayed, randoAsync, randoAsync, randoAsync]);
    //
    // combo.subscribe(console.log);

    // const user$ = of({uid: Math.random()});
    //
    // const fetchOrders = (userId) => {
    //   return of(`${userId}'s order data`);
    // };
    //
    // const orders$ = user$.pipe(
    //   switchMap(user => {
    //     return fetchOrders(user.uid);
    //   })
    // );
    //
    // orders$.subscribe(console.log);

    // const button = document.querySelector('button');

    // const event = fromEvent(document, 'mousemove');
    //
    // const buffered = event.pipe(bufferCount(20));
    // buffered.subscribe(console.log);

    // event.subscribe(console.log);

    // const debounced = event.pipe(debounceTime(1000));
    // debounced.subscribe(console.log);

    // const throttle = event.pipe(throttleTime(1000));
    // throttle.subscribe(console.log);


    // const source = of('Jeff');
    //
    // const tapped = source.pipe(
    //   tap(console.log),
    //   map(c => c.toUpperCase()),
    //   tap(console.log)
    // );
    //
    // tapped.subscribe(console.log);

    // const source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //
    // const modified = source.pipe(
    //   map(n => Math.pow(n, 2)),
    //   scan(((acc, value) => acc + value)),
    //   filter(value => value > 10),
    //   take(3)
    // );
    //
    // modified.subscribe(console.log);

    // const bs = new BehaviorSubject('Hola');
    //
    // bs.subscribe(console.log);
    // bs.next('Mundo');
    // bs.subscribe(console.log);

    // const subject = new Subject();
    // subject.next('Hello');
    // subject.subscribe(console.log);
    // subject.next('World!');
    //
    // subject.subscribe(console.log);
    // const cold = Observable.create(o => o.next(Math.random));

    // const hot = cold.pipe(shareReplay(1));

    // hot.subscribe(console.log); // only this subscriber will get the actual value
    // hot.subscribe(console.log);

    // const basic = Observable.create(observer => {
    //   observer.next('A');
    //   observer.next('B');
    //   observer.next('C');
    // });
    //
    // const hello = of('hello', asyncScheduler);
    // hello.subscribe(console.log);
    //
    // console.log('world');

    // basic.subscribe(value => console.log(value));
    // basic.subscribe(console.log);


    // const event = fromEvent(document, 'click')
    //   .subscribe(console.log);
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

    // fromEvent(button, 'click').pipe(
    //   throttleTime(1000),
    //   map((event: MouseEvent) => event.clientX),
    //   scan((countNum, clientX) => countNum + clientX, 0)
    // ).subscribe((countNum) => {
    //   // console.log(`clicked ${countNum} times`);
    //   console.log(countNum);
    // });
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Injector,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Signals {
  injector = inject(Injector);
  name = signal('kamaraj test');
  age = signal(10);
  gender = signal('female');
  isMajor = computed(() => {
    if (this.gender() === 'male') {
      return this.age() >= 18 ? true : false;
    } else {
      return false;
    }
  });
  ngOnInit() {
    this.name.set('test');
    this.name.update((value) => value + ' unit tesr');

    setTimeout(() => {
      this.age.set(30);
      this.gender.set('male');
    }, 2000);
  }

  testFunction() {
    alert(13);
  }
  constructor() {
    effect(() => {
      console.log('runed');
      if (this.age() == 30) {
        console.log('inside run');
      }
    });
    // this.ranafterEffect();
  }

  // Utrackable rin the code
  ranafterEffect = effect(
    () => {
      console.log('effect in function: ' + this.age());
    },
    { injector: this.injector },
  );
  testFunctionTwo() {
    console.log('kamataj test');
  }
}

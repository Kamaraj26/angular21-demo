import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Signals } from './components/signals/signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Signals],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular21-demo');
}

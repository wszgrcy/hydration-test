import { Component } from '@angular/core';
import { Wrapper } from './wrapper';
import { Cmp1 } from './cmp1/cmp1';

@Component({
  selector: 'app-root',
  imports: [Wrapper, Cmp1],
  templateUrl: './app.html',
})
export class App {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  template: `<input type="text" />`,
  host: { ngSkipHydration: 'true' },
})
export class Cmp1 {}

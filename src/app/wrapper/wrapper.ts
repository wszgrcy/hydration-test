import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  imports: [],
  templateUrl: './wrapper.html',
  host: { ngSkipHydration: 'true' },
})
export class WrapperCmp {}

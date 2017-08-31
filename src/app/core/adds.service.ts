import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

interface AppState {
  data: any[]
}

@Injectable()
export class AddsService {
  constructor(public store: Store<AppState>) {

  }
  
}

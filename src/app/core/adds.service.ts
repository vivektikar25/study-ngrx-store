import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface AppState {
  data: any[]
}

@Injectable()
export class AddsService {
  adds: Observable<AppState>;

  constructor(public store: Store<AppState>) {
    this.adds = this.store.select('adds');
  }

  postAdd = (add) => {
    this.store.dispatch({"type": "POST", payload: add});
  }
  
}

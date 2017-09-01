import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AddsService } from './../core/adds.service';

interface AppState {
  data: any[]
}

@Component({
  selector: 'app-view-add',
  templateUrl: './view-add.component.html',
  styleUrls: ['./view-add.component.css']
})
export class ViewAddComponent implements OnInit {
  adds: Observable<AppState>;
  // adds;
  
  constructor(
    public store: Store<AppState>,
    public addsService: AddsService
  ) {  }

  ngOnInit() {
    console.log("In init");
    // this.adds = this.addsService.store.dispatch({type: 'VIEW', payload: { }});
    this.adds = this.addsService.store.select('adds');
  }

}

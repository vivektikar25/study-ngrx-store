import { Component, OnInit } from '@angular/core';
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
  
  constructor(
    public addsService: AddsService
  ) {  }

  ngOnInit() {
    this.adds = this.addsService.adds;
  }

}

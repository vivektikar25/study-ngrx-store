import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddsService } from './../core/adds.service';
import { Observable } from 'rxjs/Observable';

interface AppState {
  data: any[]
}

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  postAddForm: FormGroup;
  adds: Observable<AppState>;

  constructor(
    public fb: FormBuilder,
    public addsService: AddsService
  ) {
    this.adds = this.addsService.adds;
   }

  ngOnInit() {
    this.postAddForm = this.fb.group({
      deviceName: ['', Validators.required],
      deviceSpecification: this.fb.group({
        deviceModel: ['', Validators.required],
        deviceRam: ['', Validators.required],
      }),
      quantity:['', Validators.required],
      date:['', Validators.required]
    });
  }

  postAdd = () => {
    this.addsService.postAdd(this.postAddForm.value);
  };

}

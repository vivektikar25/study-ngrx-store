import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  postAddForm: FormGroup;

  constructor(public fb: FormBuilder) { }

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
    console.log(this.postAddForm.controls.deviceSpecification.invalid);
  };

}

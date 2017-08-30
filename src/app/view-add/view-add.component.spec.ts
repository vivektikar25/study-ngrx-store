import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddComponent } from './view-add.component';

describe('ViewAddComponent', () => {
  let component: ViewAddComponent;
  let fixture: ComponentFixture<ViewAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

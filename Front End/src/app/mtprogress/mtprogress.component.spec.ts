import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtprogressComponent } from './mtprogress.component';

describe('MtprogressComponent', () => {
  let component: MtprogressComponent;
  let fixture: ComponentFixture<MtprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

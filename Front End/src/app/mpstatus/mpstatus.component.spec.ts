import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpstatusComponent } from './mpstatus.component';

describe('MpstatusComponent', () => {
  let component: MpstatusComponent;
  let fixture: ComponentFixture<MpstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

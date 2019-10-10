import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MphistoryComponent } from './mphistory.component';

describe('MphistoryComponent', () => {
  let component: MphistoryComponent;
  let fixture: ComponentFixture<MphistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MphistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MphistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

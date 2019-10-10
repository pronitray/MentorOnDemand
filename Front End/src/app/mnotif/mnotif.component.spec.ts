import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnotifComponent } from './mnotif.component';

describe('MnotifComponent', () => {
  let component: MnotifComponent;
  let fixture: ComponentFixture<MnotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

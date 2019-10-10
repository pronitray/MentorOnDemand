import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtprogressComponent } from './utprogress.component';

describe('UtprogressComponent', () => {
  let component: UtprogressComponent;
  let fixture: ComponentFixture<UtprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

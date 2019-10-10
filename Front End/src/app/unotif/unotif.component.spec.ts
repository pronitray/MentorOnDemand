import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnotifComponent } from './unotif.component';

describe('UnotifComponent', () => {
  let component: UnotifComponent;
  let fixture: ComponentFixture<UnotifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

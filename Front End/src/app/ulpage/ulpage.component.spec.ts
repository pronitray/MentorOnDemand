import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlpageComponent } from './ulpage.component';

describe('UlpageComponent', () => {
  let component: UlpageComponent;
  let fixture: ComponentFixture<UlpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

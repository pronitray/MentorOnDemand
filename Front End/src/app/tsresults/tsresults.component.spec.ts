import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsresultsComponent } from './tsresults.component';

describe('TsresultsComponent', () => {
  let component: TsresultsComponent;
  let fixture: ComponentFixture<TsresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

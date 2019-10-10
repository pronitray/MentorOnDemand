import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EskillsComponent } from './eskills.component';

describe('EskillsComponent', () => {
  let component: EskillsComponent;
  let fixture: ComponentFixture<EskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

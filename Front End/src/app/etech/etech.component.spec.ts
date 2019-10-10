import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtechComponent } from './etech.component';

describe('EtechComponent', () => {
  let component: EtechComponent;
  let fixture: ComponentFixture<EtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlpageComponent } from './mlpage.component';

describe('MlpageComponent', () => {
  let component: MlpageComponent;
  let fixture: ComponentFixture<MlpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

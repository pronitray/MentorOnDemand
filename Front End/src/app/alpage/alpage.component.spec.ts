import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpageComponent } from './alpage.component';

describe('AlpageComponent', () => {
  let component: AlpageComponent;
  let fixture: ComponentFixture<AlpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

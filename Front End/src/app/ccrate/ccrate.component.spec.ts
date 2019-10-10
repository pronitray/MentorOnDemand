import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcrateComponent } from './ccrate.component';

describe('CcrateComponent', () => {
  let component: CcrateComponent;
  let fixture: ComponentFixture<CcrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

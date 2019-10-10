import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChkoutpgComponent } from './chkoutpg.component';

describe('ChkoutpgComponent', () => {
  let component: ChkoutpgComponent;
  let fixture: ComponentFixture<ChkoutpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChkoutpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChkoutpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

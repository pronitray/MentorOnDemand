import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtcompleteComponent } from './mtcomplete.component';

describe('MtcompleteComponent', () => {
  let component: MtcompleteComponent;
  let fixture: ComponentFixture<MtcompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtcompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

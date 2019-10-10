import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtcompleteComponent } from './utcomplete.component';

describe('UtcompleteComponent', () => {
  let component: UtcompleteComponent;
  let fixture: ComponentFixture<UtcompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtcompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

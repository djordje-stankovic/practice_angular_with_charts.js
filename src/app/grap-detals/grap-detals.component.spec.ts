import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapDetalsComponent } from './grap-detals.component';

describe('GrapDetalsComponent', () => {
  let component: GrapDetalsComponent;
  let fixture: ComponentFixture<GrapDetalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapDetalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapDetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

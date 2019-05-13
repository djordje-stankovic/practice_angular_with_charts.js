import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigGrapComponent } from './big-grap.component';

describe('BigGrapComponent', () => {
  let component: BigGrapComponent;
  let fixture: ComponentFixture<BigGrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigGrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigGrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

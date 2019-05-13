import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachesComponent } from './maches.component';

describe('MachesComponent', () => {
  let component: MachesComponent;
  let fixture: ComponentFixture<MachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

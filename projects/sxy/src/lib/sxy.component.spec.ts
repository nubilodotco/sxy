import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SxyComponent } from './sxy.component';

describe('SxyComponent', () => {
  let component: SxyComponent;
  let fixture: ComponentFixture<SxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTdComponent } from './special-td.component';

describe('SpecialTdComponent', () => {
  let component: SpecialTdComponent;
  let fixture: ComponentFixture<SpecialTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

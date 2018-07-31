import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StruckComponent } from './struck.component';

describe('StruckComponent', () => {
  let component: StruckComponent;
  let fixture: ComponentFixture<StruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

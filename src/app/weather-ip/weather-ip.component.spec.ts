import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIPComponent } from './weather-ip.component';

describe('WeatherIPComponent', () => {
  let component: WeatherIPComponent;
  let fixture: ComponentFixture<WeatherIPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherIPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

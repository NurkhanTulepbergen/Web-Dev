import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyDetialComponent } from './vacancy-detial.component';

describe('VacancyDetialComponent', () => {
  let component: VacancyDetialComponent;
  let fixture: ComponentFixture<VacancyDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyDetialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacancyDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

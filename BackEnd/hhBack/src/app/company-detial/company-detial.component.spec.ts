import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetialComponent } from './company-detial.component';

describe('CompanyDetialComponent', () => {
  let component: CompanyDetialComponent;
  let fixture: ComponentFixture<CompanyDetialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDetialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

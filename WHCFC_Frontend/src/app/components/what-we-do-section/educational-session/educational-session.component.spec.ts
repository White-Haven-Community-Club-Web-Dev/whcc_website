import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalSessionComponent } from './educational-session.component';

describe('EducationalSessionComponent', () => {
  let component: EducationalSessionComponent;
  let fixture: ComponentFixture<EducationalSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalSessionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

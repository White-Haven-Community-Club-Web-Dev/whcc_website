import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalSessionsComponent } from './educational-sessions.component';

describe('EducationalSessionsComponent', () => {
  let component: EducationalSessionsComponent;
  let fixture: ComponentFixture<EducationalSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationalSessionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationalSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

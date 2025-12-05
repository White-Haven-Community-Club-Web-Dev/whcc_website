import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F3ProgramComponent } from './f3-program.component';

describe('F3ProgramComponent', () => {
  let component: F3ProgramComponent;
  let fixture: ComponentFixture<F3ProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F3ProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F3ProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

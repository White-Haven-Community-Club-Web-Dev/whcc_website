import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthProgramComponent } from './youth-program.component';

describe('YouthProgramComponent', () => {
  let component: YouthProgramComponent;
  let fixture: ComponentFixture<YouthProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouthProgramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YouthProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

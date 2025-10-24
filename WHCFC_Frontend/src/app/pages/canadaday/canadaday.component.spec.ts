import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanadadayComponent } from './canadaday.component';

describe('CanadadayComponent', () => {
  let component: CanadadayComponent;
  let fixture: ComponentFixture<CanadadayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanadadayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CanadadayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

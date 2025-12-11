import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCupPosterComponent } from './world-cup-poster.component';

describe('WorldCupPosterComponent', () => {
  let component: WorldCupPosterComponent;
  let fixture: ComponentFixture<WorldCupPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldCupPosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldCupPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

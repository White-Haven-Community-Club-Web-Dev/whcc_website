import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorSoccerComponent } from './indoor-soccer.component';

describe('IndoorSoccerComponent', () => {
  let component: IndoorSoccerComponent;
  let fixture: ComponentFixture<IndoorSoccerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndoorSoccerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndoorSoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

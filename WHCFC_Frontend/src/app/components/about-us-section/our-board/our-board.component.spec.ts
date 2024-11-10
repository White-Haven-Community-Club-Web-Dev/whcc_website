import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBoardComponent } from './our-board.component';

describe('OurBoardComponent', () => {
  let component: OurBoardComponent;
  let fixture: ComponentFixture<OurBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

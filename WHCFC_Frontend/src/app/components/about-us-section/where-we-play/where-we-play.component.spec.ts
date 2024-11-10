import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereWePlayComponent } from './where-we-play.component';

describe('WhereWePlayComponent', () => {
  let component: WhereWePlayComponent;
  let fixture: ComponentFixture<WhereWePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhereWePlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhereWePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

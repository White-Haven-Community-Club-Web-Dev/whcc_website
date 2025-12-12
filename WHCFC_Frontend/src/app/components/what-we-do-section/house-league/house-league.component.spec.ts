import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseLeagueComponent } from './house-league.component';

describe('HouseLeagueComponent', () => {
  let component: HouseLeagueComponent;
  let fixture: ComponentFixture<HouseLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseLeagueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

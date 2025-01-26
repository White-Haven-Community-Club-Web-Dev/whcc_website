import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorHighlightComponent } from './sponsor-highlight.component';

describe('SponsorHighlightComponent', () => {
  let component: SponsorHighlightComponent;
  let fixture: ComponentFixture<SponsorHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorHighlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsorHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

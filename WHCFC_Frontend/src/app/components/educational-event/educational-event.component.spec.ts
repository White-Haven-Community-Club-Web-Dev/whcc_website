import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationalEventBlok, EducationalEventComponent } from './educational-event.component';

describe('EducationalEventComponent', () => {
  let fixture: ComponentFixture<EducationalEventComponent>;
  const event: EducationalEventBlok = {
    title: 'Community gardening workshop',
    date: 'Sunday, May 9, 2027',
    time: '10:00 AM',
    description: 'Learn to grow vegetables together.',
    venue: 'Community garden',
    trainer: 'Workshop facilitator',
    audience: 'All neighbours',
    cost: 'Free',
    flyer: { filename: 'https://example.com/garden.png', alt: 'Gardening workshop flyer' },
    registrationUrl: { linktype: 'url', url: 'https://example.com/register' },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [EducationalEventComponent] });
    fixture = TestBed.createComponent(EducationalEventComponent);
  });

  function render(blok: EducationalEventBlok): HTMLElement {
    fixture.componentRef.setInput('blok', blok);
    fixture.detectChanges();
    return fixture.nativeElement;
  }

  it('renders a future event directly from CMS content with full layout by default', () => {
    const element = render(event);
    for (const value of [event.title, event.date, event.time, event.description, event.venue, event.trainer]) {
      expect(element.textContent).toContain(value!);
    }
    expect(element.querySelector('img')?.getAttribute('src')).toBe(event.flyer!.filename!);
    expect(element.querySelector('img')?.alt).toBe(event.flyer!.alt!);
    const link = element.querySelector('a')!;
    expect(link.href).toBe('https://example.com/register');
    expect(link.target).toBe('_blank');
    expect(link.rel).toBe('noopener noreferrer');
    expect(link.textContent).toContain('Register Now');
    expect(link.textContent).toContain('opens in a new tab');
  });

  it('uses the CMS layout and responds to content changes without an event identifier', () => {
    const element = render({ ...event, layout: 'compact' });
    expect(element.textContent).not.toContain(event.trainer!);
    render({ ...event, title: 'Neighbourhood art class', layout: 'full', buttonText: 'Reserve a place' });
    expect(element.querySelector('h2')?.textContent).toContain('Neighbourhood art class');
    expect(element.textContent).toContain(event.trainer!);
    expect(element.querySelector('a')?.textContent).toContain('Reserve a place');
    expect(element.querySelectorAll('section').length).toBe(1);
  });

  it('omits missing optional content and incomplete registration links', () => {
    const element = render({ title: 'New session', date: 'Next month', time: 'Noon' });
    expect(element.querySelectorAll('dt').length).toBe(1);
    expect(element.querySelector('img')).toBeNull();
    expect(element.querySelector('a')).toBeNull();
    expect(element.textContent).not.toContain('undefined');
    expect(element.querySelector('.md\\:grid-cols-2')).toBeNull();
  });

  it('does not add a separator when only one participation field is provided', () => {
    const element = render({ ...event, cost: undefined });
    expect(element.querySelector('dl > div:last-child dd')?.textContent?.trim()).toBe(event.audience!);
  });

  it('supports Storyblok internal links and cached external URLs', () => {
    const element = render({ ...event, registrationUrl: { linktype: 'story', cached_url: 'register' } });
    expect(element.querySelector('a')?.getAttribute('href')).toBe('/register');
    render({ ...event, registrationUrl: { linktype: 'url', cached_url: 'https://example.com/signup' } });
    expect(element.querySelector('a')?.href).toBe('https://example.com/signup');
  });

  it('lists one learning outcome per line in the full layout only', () => {
    const learningOutcomes = 'Plan a garden bed\n\n  Choose seeds for the season  \n';
    const element = render({ ...event, learningOutcomes });
    const items = Array.from(element.querySelectorAll('ul li')).map((item) => item.textContent?.trim());
    expect(items).toEqual(['Plan a garden bed', 'Choose seeds for the season']);
    expect(element.querySelector('h3')?.textContent).toContain('What you will learn');
    render({ ...event, learningOutcomes, layout: 'compact' });
    expect(element.querySelector('ul')).toBeNull();
    render({ ...event, learningOutcomes: ' \n ' });
    expect(element.querySelector('ul')).toBeNull();
    expect(element.querySelector('h3')).toBeNull();
  });

  it('does not render unsafe registration protocols', () => {
    const element = render({ ...event, registrationUrl: { linktype: 'url', url: 'javascript:alert(1)' } });
    expect(element.querySelector('a')).toBeNull();
  });
});

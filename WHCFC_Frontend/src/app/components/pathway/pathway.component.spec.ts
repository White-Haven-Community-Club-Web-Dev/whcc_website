import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PathwayBlok, PathwayComponent, PathwayStageBlok } from './pathway.component';

describe('PathwayComponent', () => {
  let fixture: ComponentFixture<PathwayComponent>;

  // Fixture: the six stages of the WHCC Development Pathway document of November 18, 2026.
  // In production this content comes from the Storyblok story `pathway`.
  const stages: PathwayStageBlok[] = [
    {
      key: 'participate',
      name: 'Participate',
      experience: 'A young person discovers an opportunity to participate. The young person attends activities and builds relationships.',
      impact: 'Removes barriers through free or affordable programming, equipment, outreach and transportation support where possible. Provide safe, enjoyable and consistent sport and community experiences.',
    },
    {
      key: 'develop',
      name: 'Develop',
      experience: 'The participant builds skills, confidence and positive habits.',
      impact: 'Leveling up the football experience through tournaments and skill development clinics',
    },
    {
      key: 'lead',
      name: 'Lead',
      experience: 'The participant begins taking responsibility and supporting others.',
      impact: 'Provides leadership training, volunteer opportunities, and support roles in coaching and mentorship',
    },
    {
      key: 'coach',
      name: 'Coach',
      experience: 'Older participants develop coaching skills',
      impact: 'Provides appropriate NCCP training and gain supervised practical experience',
    },
    {
      key: 'mentor',
      name: 'Mentor',
      experience: 'Older youth support younger participants',
      impact: 'Provides peer mentoring, education, and positive role modelling to develop younger participants',
    },
    {
      key: 'create-deliver',
      name: 'Create/Deliver',
      experience: 'The young person gives back to the community.',
      impact: 'Creates pathways into coaching, volunteering, mentoring, employment, and community leadership.',
    },
  ];
  const names = ['Participate', 'Develop', 'Lead', 'Coach', 'Mentor', 'Create/Deliver'];
  const pathway = { content: { eyebrow: 'Our Pathway', title: 'WHCC Development Pathway', stages } };
  const blok: PathwayBlok = { pathway, layout: 'full' };

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [PathwayComponent], providers: [provideRouter([])] });
    fixture = TestBed.createComponent(PathwayComponent);
  });

  function render(value: PathwayBlok): HTMLElement {
    fixture.componentRef.setInput('blok', value);
    fixture.detectChanges();
    return fixture.nativeElement;
  }

  function withStage(index: number, changes: Partial<PathwayStageBlok>): PathwayBlok {
    const changed = stages.map((stage, i) => (i === index ? { ...stage, ...changes } : stage));
    return { ...blok, pathway: { content: { ...pathway.content, stages: changed } } };
  }

  function stageNames(element: HTMLElement, selector: string): (string | undefined)[] {
    return Array.from(element.querySelectorAll(selector)).map((name) => name.textContent?.trim());
  }

  function buttons(element: HTMLElement, label: string): HTMLButtonElement[] {
    return Array.from(element.querySelectorAll('button')).filter((button) => button.textContent?.trim().startsWith(label));
  }

  it('renders the six stages in order with their experience text in the full layout', () => {
    const element = render(blok);
    expect(element.querySelector('section')?.getAttribute('data-layout')).toBe('full');
    expect(element.querySelector('h2')?.textContent).toContain('WHCC Development Pathway');
    expect(element.textContent).toContain('Our Pathway');
    expect(element.querySelectorAll('ol > li').length).toBe(6);
    expect(stageNames(element, 'ol > li h3')).toEqual(names);
    expect(stageNames(element, 'ol > li > span:not([aria-hidden])')).toEqual(['1', '2', '3', '4', '5', '6']);
    for (const stage of stages) {
      expect(element.querySelector(`[data-stage="${stage.key}"]`)?.textContent).toContain(stage.experience!);
    }
    const title = element.querySelector('h2')!;
    expect(element.querySelector('section')?.getAttribute('aria-labelledby')).toBe(title.id);
    expect(title.classList).toContain('text-center');
  });

  it('uses the full layout by default and the program layout when the CMS asks for it', () => {
    const element = render({ pathway });
    expect(element.querySelector('section')?.getAttribute('data-layout')).toBe('full');
    render({ ...blok, layout: 'program' });
    expect(element.querySelector('section')?.getAttribute('data-layout')).toBe('program');
    expect(element.querySelector('h2')?.classList).not.toContain('text-center');
    expect(stageNames(element, 'ol > li h3')).toEqual(names);
    expect(buttons(element, 'Impact').length).toBe(6);
  });

  it('shows only the six names and the link to the full block in the compact layout', () => {
    const featuredLink = { linktype: 'story', cached_url: 'home', anchor: 'pathway' };
    const element = render({ ...blok, layout: 'compact', featuredLink });
    expect(stageNames(element, 'ol > li > span:last-child')).toEqual(names);
    expect(element.querySelector('button')).toBeNull();
    expect(element.textContent).not.toContain(stages[0].experience!);
    expect(element.textContent).not.toContain(stages[0].impact!);
    const link = element.querySelector('a')!;
    expect(link.getAttribute('href')).toBe('/home#pathway');
    expect(link.textContent).toContain('See the six stages of our pathway');
    render({ ...blok, layout: 'compact', featuredLinkText: 'Our pathway', featuredLink: { linktype: 'url', url: 'https://example.com/pathway' } });
    expect(element.querySelector('a')?.href).toBe('https://example.com/pathway');
    expect(element.querySelector('a')?.textContent).toContain('Our pathway');
    render({ ...blok, layout: 'compact', featuredLink: { linktype: 'url', url: 'javascript:alert(1)' } });
    expect(element.querySelector('a')).toBeNull();
    render({ ...blok, layout: 'compact' });
    expect(element.querySelector('a')).toBeNull();
  });

  it('opens and closes the impact text of each stage on its own', () => {
    const element = render(blok);
    const [first, second] = buttons(element, 'Impact');
    const panel = element.querySelector<HTMLElement>('#' + first.getAttribute('aria-controls'))!;
    const otherPanel = element.querySelector<HTMLElement>('#' + second.getAttribute('aria-controls'))!;
    expect(first.type).toBe('button');
    expect(first.textContent).toContain('Participate');
    expect(first.getAttribute('aria-expanded')).toBe('false');
    expect(panel.hidden).toBeTrue();
    expect(panel.textContent).toContain(stages[0].impact!);

    first.click();
    fixture.detectChanges();
    expect(first.getAttribute('aria-expanded')).toBe('true');
    expect(panel.hidden).toBeFalse();
    expect(second.getAttribute('aria-expanded')).toBe('false');
    expect(otherPanel.hidden).toBeTrue();

    first.click();
    fixture.detectChanges();
    expect(first.getAttribute('aria-expanded')).toBe('false');
    expect(panel.hidden).toBeTrue();
  });

  it('adds a Details button only to stages that have details and toggles it apart from Impact', () => {
    const details = 'Ages 8 to 12.\nSecond line of details.';
    const element = render(withStage(1, { details }));
    expect(buttons(element, 'Details').length).toBe(1);
    const stage = element.querySelector<HTMLElement>('[data-stage="develop"]')!;
    const [impact, detailsButton] = Array.from(stage.querySelectorAll('button'));
    const impactPanel = stage.querySelector<HTMLElement>('#' + impact.getAttribute('aria-controls'))!;
    const detailsPanel = stage.querySelector<HTMLElement>('#' + detailsButton.getAttribute('aria-controls'))!;
    expect(detailsButton.textContent?.trim()).toMatch(/^Details/);
    expect(detailsButton.getAttribute('aria-expanded')).toBe('false');
    expect(detailsPanel.hidden).toBeTrue();
    expect(detailsPanel.textContent).toBe(details);

    detailsButton.click();
    fixture.detectChanges();
    expect(detailsButton.getAttribute('aria-expanded')).toBe('true');
    expect(detailsPanel.hidden).toBeFalse();
    expect(impact.getAttribute('aria-expanded')).toBe('false');
    expect(impactPanel.hidden).toBeTrue();

    detailsButton.click();
    fixture.detectChanges();
    expect(detailsButton.getAttribute('aria-expanded')).toBe('false');
    expect(detailsPanel.hidden).toBeTrue();
  });

  it('gives every panel its own id, also when the block is used twice on a page', () => {
    const other = TestBed.createComponent(PathwayComponent);
    other.componentRef.setInput('blok', withStage(0, { details: 'More about this stage.' }));
    other.detectChanges();
    const element = render(withStage(0, { details: 'More about this stage.' }));
    const ids = [element, other.nativeElement as HTMLElement].flatMap((root) =>
      Array.from(root.querySelectorAll('[id]')).map((node) => node.id)
    );
    expect(ids.length).toBe(16);
    expect(new Set(ids).size).toBe(ids.length);
    for (const button of Array.from(element.querySelectorAll('button'))) {
      expect(element.querySelector('#' + button.getAttribute('aria-controls'))).not.toBeNull();
    }
  });

  it('marks no stage when currentStage is empty', () => {
    const element = render({ ...blok, currentStage: '', currentStageLabel: 'This program' });
    expect(element.querySelector('[aria-current]')).toBeNull();
    expect(element.textContent).not.toContain('This program');
    render({ ...blok, layout: 'compact', currentStageLabel: 'This program' });
    expect(element.querySelector('[aria-current]')).toBeNull();
    expect(element.textContent).not.toContain('This program');
  });

  it('marks only the current stage, with a text label', () => {
    const element = render({ ...blok, currentStage: 'lead', currentStageLabel: 'This program' });
    const current = element.querySelectorAll('[aria-current="step"]');
    expect(current.length).toBe(1);
    expect(current[0].getAttribute('data-stage')).toBe('lead');
    expect(current[0].querySelector('h3')?.textContent).toContain('This program');
    render({ ...blok, layout: 'compact', currentStage: 'lead', currentStageLabel: 'This program' });
    expect(element.querySelectorAll('[aria-current="step"]').length).toBe(1);
    expect(element.querySelector('[aria-current="step"]')?.textContent).toContain('This program');
  });

  it('omits empty optional fields', () => {
    const stage = { ...stages[0], impact: ' ', details: '' };
    const content = { stages: [stage, ...stages.slice(1)] };
    const element = render({ pathway: { content }, layout: 'full' });
    expect(element.querySelector('h2')).toBeNull();
    expect(element.querySelector('section')?.hasAttribute('aria-labelledby')).toBeFalse();
    expect(element.querySelector('[data-stage="participate"] button')).toBeNull();
    expect(buttons(element, 'Impact').length).toBe(5);
    expect(buttons(element, 'Details').length).toBe(0);
    expect(element.textContent).not.toContain('undefined');
    expect(element.textContent).not.toContain('null');
  });

  it('renders nothing until the pathway story is available', () => {
    for (const value of [{}, { pathway: null }, { pathway: 'a1b2c3d4-0000-0000-0000-000000000000' }, { pathway: { content: {} } }, { pathway: { content: { stages: [] } } }] as PathwayBlok[]) {
      const element = render({ ...value, layout: 'full' });
      expect(element.querySelector('section')).toBeNull();
      expect(element.textContent?.trim()).toBe('');
    }
  });

  it('follows content changes from the CMS', () => {
    const element = render(blok);
    render(withStage(2, { name: 'Lead others', impact: 'Updated impact text' }));
    expect(stageNames(element, 'ol > li h3')[2]).toBe('Lead others');
    expect(element.querySelector('[data-stage="lead"]')?.textContent).toContain('Updated impact text');
    expect(element.querySelectorAll('section').length).toBe(1);
  });
});

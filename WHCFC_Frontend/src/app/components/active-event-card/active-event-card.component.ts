import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'active-event-card',
  imports: [],
  template: `
    <div class="bg-gradient-to-br from-red-400 to-red-800 text-white">
  <div class="max-w-7xl mx-auto px-4 py-16 md:py-24">
    <div class="flex items-center gap-2 mb-6">
      <div class="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
      <span class="uppercase tracking-wider text-sm font-medium">
        Active Session - Registration Open
      </span>
    </div>

    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {{blok().title}}
        </h1>

        <p class="text-lg text-green-50 mb-8">
          {{blok().desc}}
        </p>

        <div class="space-y-3 mb-8">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-calendar w-5 h-5"
              data-fg-d3bl55="0.8:4.9433:/src/app/App.tsx:160:21:5562:32:e:Calendar::::::Bbz4" data-fgid-d3bl55=":rc:">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <span class="text-lg">{{blok().date}}</span>
          </div>
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-clock w-5 h-5"
              data-fg-d3bl59="0.8:4.9433:/src/app/App.tsx:164:21:5774:29:e:Clock::::::EGEm" data-fgid-d3bl59=":rf:">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span class="text-lg">{{blok().time}}</span>
          </div>
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-map-pin w-5 h-5"
              data-fg-d3bl63="0.8:4.9433:/src/app/App.tsx:168:21:5983:30:e:MapPin::::::BveZ" data-fgid-d3bl63=":ri:">
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
              </path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span class="text-lg">{{blok().location}}</span>
          </div>
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-users w-5 h-5"
              data-fg-d3bl67="0.8:4.9433:/src/app/App.tsx:172:21:6197:29:e:Users::::::DV8M" data-fgid-d3bl67=":rl:">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span class="text-lg">
              <!-- {{blok().registered}} / {{blok().capacity}} spots filled -->
              {{blok().eventFor}}
            </span>
          </div>
        </div>

        <div class="flex gap-4">
          <a [href]="blok().ctaLink"
            class="bg-white text-primary cursor-pointer px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            Register Now
          </a>
          <!-- <a href="https://www.42voices.org/2026-career-civic-leadership-program"
          class="border-2 cursor-pointer border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
          {{blok().button2}}
        </a> -->
      </div>
    </div>
    <div class="md:flex items-center justify-center gap-10 hidden">
      <img class="h-48"
        src="https://lh3.googleusercontent.com/sitesv/AA5AbUC1NmUrbqeqDZbxQJK-KNkxh6gsBEg30tOa92UlFtporSF8ZA0dKXm9mVjtrOyoKmfEgmsvGIDyJGAPn4hPmX7hEX7uyJV1Zv4W1VAvEUwqqDRBYC2F8Q0JjNtp0FXv24l4pyuJf-dviUjtC6C6S2RfpSvP02sVXH3Vkh-5bTEVwGXET58F3xo-=w16383" />
      <p class="text-8xl">x</p>
      <img class="h-48"
      src="assets/logo.png"/>      </div>
    </div>

  </div>
</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveEventCardComponent {
  readonly blok = input.required<IActiveEventContent>();
}

interface IActiveEventContent {
  title: string;
  desc: string;
  date: string;
  time: string;
  location: string;
  eventFor: string;
  ctaLink: string;
}
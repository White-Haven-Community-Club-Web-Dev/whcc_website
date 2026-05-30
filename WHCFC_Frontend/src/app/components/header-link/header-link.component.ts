import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SbBlokData, StoryblokComponent } from '@storyblok/angular';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'header-link',
  imports: [RouterLink, StoryblokComponent, RouterLinkActive],
  template: `
     @if(blok().dropDownLinks?.length===0){
       @if (blok().link.linktype==="story") {
        <a [routerLink]="'/'+blok().link.cached_url" routerLinkActive="text-primary"  class="hover:text-red-600 uppercase">
              {{ blok().title }}
          </a>
      }
       @if (blok().link.linktype==="url") {
        <a [href]="blok().link.cached_url"  class="hover:text-red-600 uppercase">
              {{ blok().title }}
          </a>
      }
     }@else {
      <div class="relative hidden lg:block" (mouseenter)="toggleDropdown(blok().title)"
              (mouseleave)="closeDropdown()">
              <button type="button"
                class="flex items-center uppercase gap-1 hover:text-red-600"
                [class.text-red-600]="openDropdown === blok().title">
                {{ blok().title }}
                <svg class="h-3 w-3 transition-transform" [class.rotate-180]="openDropdown === blok().title"
                  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <!-- Dropdown panel -->
              @if (openDropdown === blok().title) {
                <div
                  class="absolute left-0 top-full  w-max rounded-lg border border-slate-100 bg-white flex flex-col px-4 pt-4 gap-5 shadow-lg">
                  @for (item of blok().dropDownLinks; track $index) {
                    <sb-component  [sbBlok]="item" />
                  }
                </div>
              }
            </div>
            <div class="relative lg:hidden" (click)="toggleDropdown(blok().title)">
              <button type="button"
                class="flex items-center uppercase gap-1 hover:text-red-600"
                [class.text-red-600]="openDropdown === blok().title">
                {{ blok().title }}
                <svg class="h-3 w-3 transition-transform" [class.rotate-180]="openDropdown === blok().title"
                  viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
              <!-- Dropdown panel -->
              @if (openDropdown === blok().title) {
                <div
                  class="relative lg:absolute left-0 top-full border-red-200  border-l-[2px]  lg:w-max  bg-gray-50 rounded-none w-full lg:rounded-lg lg:border lg:border-slate-100 lg:bg-white flex flex-col px-4 pt-4 gap-5 shadow-none lg:shadow-lg">
                  @for (item of blok().dropDownLinks; track $index) {
                    <sb-component  [sbBlok]="item" />
                  }
                </div>
              }
            </div>
     }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLinkComponent {
  readonly blok = input.required<IHeaderLinkContent>();
  openDropdown: string | null = null;

  toggleDropdown(label: string): void {
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  closeDropdown(): void {
    this.openDropdown = null;
  }
  handleMobileDropdown(label:string):void {
    if(this.openDropdown){
      this.openDropdown=null;
    }
  }
}

interface IHeaderLinkContent {
  title: string;
  link: { linktype: "url" | "story", cached_url: string }
  dropDownLinks: SbBlokData[] | undefined
}
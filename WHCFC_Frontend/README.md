### Prerequisites
Ensure you have the following installed:

- Node.js ( 24.14.0)
- Angular CLI
- Git
 
### Setting Up the Project Locally
  1. Clone the repository to your local machine:
```sh
git clone https://github.com/White-Haven-Community-Club-Web-Dev/whcc_website.git
cd whcc_website/WHCFC_Frontend
```

  3. Install dependencies using npm:
```sh
npm install
```
  4. Setup Development Environment:
   - Run setup-env.ts
     ```sh
     node setup-env.ts
     ```
     This script will generate the `environments/environment.ts` file for angular. Create an new file in the same directory `environments/environment.development.ts`. Copy paste the code from `environment.ts` to `environment.development.ts`. Then add the environment keys' values, which you can get from admins.

5. Run the Server
```sh
  npm start
  ```

The application should now be running on http://localhost:4200/.


## Platforms & Frameworks
The website is developed with Angular 21.
### Prerequisites
- **Node.js**: v20.19.0 or newer — https://angular.dev/reference/versions
- T**ext editor**: Visual Studio Code — https://code.visualstudio.com/
- **Terminal**: required for running Angular CLI commands —
https://angular.dev/tools/cli
- **Dev tooling**: Angular Language Service — https://angular.dev/tools/languageservice
- **Storyblok account**: use the shared/common account (for our setup)
- **Project Structure**
```sh
src/app/
components/ # Bloks (reusable UI building blocks)
    active-event-card/
    card-with-icon/
    events-card/
    faq-card/
    faq-section/
    feature-card/
    featured-events/
    ...
pages/ # Custom stories (by default: page/)
page/ # For “Scarborough Connects”, the story/page is: wccc-event
storyblok/ # Blok registry + Storyblok integration glue
storyblok-registry.ts
```
## Storyblok
### Bloks
A blok is a small, reusable component (typically under `src/app/components/` ).
When you create a new blok, you generally need:
- A matching Angular component
- A corresponding Storyblok component (schema/fields)
- A registry entry in storyblok-registry.ts
##### Generating a blok component (single-file, standalone)
```sh
npx ng g c components/component-name -t --skip-tests --style=
none --selector=component-name --standalone=true -c='OnPush'
```
##### Tailwind CSS (Storyblok-driven classes)
- When to use “Option” fields
If content editors need to choose styling, add a Storyblok field of type **option** and store Tailwind class strings as the option values. Then bind that value into the
componentʼs class.
Example:
```html
<section [class]="'pt-16 md:pt-20 pb-8 mx-auto ' + blok().bac
kground">
<sb-component class="mx-auto" [sbBlok]="blok().items" />
</section>
```
##### Important: Tailwind safe-list
If Tailwind classes come from Storyblok (dynamic strings), Tailwind may not include them in the final CSS build. Add those classes to the safe-list array in Tailwind config, otherwise they will not take effect.

Storyblok field reference (Option single/multi):
https://www.storyblok.com/docs/concepts/fields#option-single-or-multi

##### Storyblok ↔ Angular Integration
Guide (reference): https://www.storyblok.com/docs/guides/angular

Storyblok provides two access tokens:
- Draft token (preview)
- Published token (live)

In our setup, tokens are stored as environment variables in Netlify.
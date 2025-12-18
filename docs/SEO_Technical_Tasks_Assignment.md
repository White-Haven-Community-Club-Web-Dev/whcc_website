# SEO Technical Tasks Assignment
**Deadline:** End of this Friday (November 15)  
**Workload:** Approximately 3 hours  
**Responsible Person:** ___________

---

## Background

Our website has enabled SSR (Server-Side Rendering), which is good for SEO. However, we still lack some essential files and configurations required by search engines, resulting in:
- Google and other search engines don't know how to properly crawl our website
- Poor display when sharing links on Facebook/Twitter (no images, titles, or descriptions)
- Netlify deployment configuration doesn't support SSR, website may not deploy properly

These tasks will resolve these issues.

### 🔗 Related PRs and Workflows
- **Related PR:** #28 (Created, but deployment failed, not to be merged for now)
- **Working Branch:** `develop`
- **Working Method:** Continue to complete all 5 tasks on the develop branch, and consolidate in PR #28
- **Merge Timing:** After all tasks are completed and Deploy Preview is successful

---

## Recommended Team Assignment (2-person team)

### Personnel 1 (Frontend Developer):
- □ Task 1: robots.txt (15 minutes)
- □ Task 2: sitemap.xml (30 minutes)
- □ Task 5: prerender configuration (10 minutes)
- □ Modify angular.json all at once
- □ Commit and push  
**Total Time:** 1 hour

### Personnel 2 (Frontend Developer):
- □ Pull the latest code after Personnel 1 pushes
- □ Task 3: Meta tags (30 minutes)
- □ Task 4: Fix 3 components (45 minutes)
- □ Commit and push  
**Total Time:** 1.5 hours

**Total Project Time:** 2.5 hours (sequential to avoid conflicts)

---

## Task 1: Create robots.txt File

### What is it?
`robots.txt` is a text file that tells search engines (Google, Bing, etc.) which pages can be crawled and which cannot.

### Current Problems
- **Status:** Our website doesn't have a `robots.txt` file
- **Impact:** Search engines don't know if they can crawl our website, may miss some pages
- **User Experience:** Visiting `https://whcfc.ca/robots.txt` returns a 404 error

### What Needs to Be Done
1. Create a file named `robots.txt` in the `WHCFC_Frontend/src/` folder
2. File content should include:
   - Allow all search engines to crawl all pages
   - Tell search engines where our sitemap is located (`https://whcfc.ca/sitemap.xml`)
3. Modify the `angular.json` configuration file to include this file during website build

### Expected Results
- Visiting `https://whcfc.ca/robots.txt` shows file content (no longer 404)
- Google search engine knows we welcome it to crawl the website
- Search engines can find our sitemap

### Acceptance Criteria
- [x] `WHCFC_Frontend/src/robots.txt` file exists
- [x] `angular.json`'s `assets` array includes `"src/robots.txt"`
- [x] After running `npm run build`, `robots.txt` can be found in the `dist/whcfc-frontend/browser/` folder
- [x] After starting the website locally, visiting `http://localhost:4200/robots.txt` shows content

---

## Task 2: Create sitemap.xml File

### What is it?
`sitemap.xml` is an XML format file that lists all pages of the website. It's like giving search engines a "map" telling them what pages our website has.

### Current Problems
- **Status:** Our website doesn't have a `sitemap.xml` file
- **Impact:** Search engines need to slowly discover our pages themselves, may miss some infrequently linked pages
- **SEO Loss:** New pages may take a long time to be indexed by Google

### What Needs to Be Done
1. Create a file named `sitemap.xml` in the `WHCFC_Frontend/src/` folder
2. The file should list all 11 pages of our website:
   - Homepage (/)
   - About Us (/about-us)
   - Community (/community)
   - Youth Program (/youth-program)
   - Educational Sessions (/educational-sessions)
   - Indoor Soccer (/indoor-soccer)
   - Canada Day Tournament (/canada-day)
   - Sponsors (/sponsors)
   - Volunteer (/volunteer)
   - Contact Us (/contact-us)
   - FAQ (/faq)
3. Each page should include this information:
   - **Full URL** (e.g., `https://whcfc.ca/about-us`)
   - **Last Modified Date** (can use today's date `2024-11-14`)
   - **Update Frequency** (e.g., homepage is `weekly`, contact page is `monthly`)
   - **Priority** (0.0 to 1.0, homepage highest at 1.0, others decrease by importance)
4. Modify `angular.json` to include this file in the build

### Expected Results
- Google can quickly know what pages we have
- New pages will be indexed by search engines faster
- Can submit sitemap in Google Search Console to track indexing

### Acceptance Criteria
- [x] `WHCFC_Frontend/src/sitemap.xml` file exists
- [x] File is valid XML format (can check with online XML validator)
- [x] Includes URLs of all 11 pages
- [x] `angular.json`'s `assets` array includes `"src/sitemap.xml"`
- [x] After running `npm run build`, `sitemap.xml` can be found in the `dist/whcfc-frontend/browser/` folder
- [x] Visiting `http://localhost:4200/sitemap.xml` shows XML content

---

## Task 3: Enhance index.html Meta Tags

### What is it?
Meta tags are special tags in the `<head>` section of HTML pages that search engines and social media read.

### Current Problems

**Current Status:** Opening `WHCFC_Frontend/src/index.html`, you'll see:
```html
<head>
  <meta charset="utf-8">
  <title>White Haven Community Football Club</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="assets/team_logo_no_bg.png">
  <!-- Then Google Analytics -->
</head>
```

**Problem 1 - Missing Description and Keywords:**
- No `<meta name="description">` - Google search results won't display our website description
- No `<meta name="keywords">` - Search engines don't know our website keywords

**Problem 2 - Poor Social Media Sharing:**
When someone shares our link on Facebook or Twitter:
- No image displayed (missing `og:image`)
- No title and description displayed
- Looks unprofessional, low click-through rate

**Problem 3 - Missing Canonical URL:**
- Search engines aren't sure which is the "correct" URL
- May have duplicate content issues

### What Needs to Be Done

In the `<head>` section of `WHCFC_Frontend/src/index.html`, **after existing content**, add the following types of tags:

#### 3.1 Basic SEO Tags
Need to add:
- **description** - Brief website description (150-160 characters)
- **keywords** - List of keywords (e.g., football, soccer, community, Scarborough)
- **author** - Website author
- **robots** - Tell search engines they can index and follow links

#### 3.2 Open Graph Tags (Facebook Sharing)
Need to add these `<meta property="og:...">` tags:
- **og:type** - Website type (fill in "website")
- **og:url** - Website URL (`https://whcfc.ca/`)
- **og:title** - Title displayed when sharing
- **og:description** - Description displayed when sharing
- **og:image** - Image displayed when sharing (can use our logo: `https://whcfc.ca/assets/team_logo.jpg`)
- **og:locale** - Language region ("en_CA")
- **og:site_name** - Website name ("WHCFC")

#### 3.3 Twitter Card Tags
Need to add these `<meta name="twitter:...">` tags:
- **twitter:card** - Card type (fill in "summary_large_image")
- **twitter:title** - Title
- **twitter:description** - Description
- **twitter:image** - Image URL
- **twitter:url** - Website URL

#### 3.4 Canonical URL
Need to add:
```html
<link rel="canonical" href="https://whcfc.ca/">
```

### Expected Results
- **Google Search:** Search results will display our set description below
- **Facebook Sharing:** Sharing links will display beautiful cards with images, titles, descriptions
- **Twitter Sharing:** Will also display nice-looking cards
- **Professionalism:** Looks more like a proper website

### Acceptance Criteria
- [x] `index.html` has all meta tags added
- [x] Running `npm run build` has no errors
- [x] Opening the website, right-click "View Page Source", can see all newly added meta tags
- [ ] Can test with the following tools:
  - Facebook Sharing Test: https://developers.facebook.com/tools/debug/
  - Twitter Card Test: https://cards-dev.twitter.com/validator
  - Entering `https://whcfc.ca/` should show images and descriptions

---

## Task 4: Fix SSR Errors in 3 Components

### What is it?
SSR (Server-Side Rendering) renders web pages on the server, which is important for SEO. However, some code will error in server environments because the server doesn't have browser objects like `window` or `document`.

### Current Problems

**Current Status:** 3 components will error during SSR

**Problem Component 1:** `WHCFC_Frontend/src/app/components/tournament/tournament.component.ts`
- In the `setupCarousel()` method, directly uses `document.querySelector()`
- When running on server, `document` doesn't exist, will error
- **Code Location:** Around lines 54-55

**Problem Component 2:** `WHCFC_Frontend/src/app/components/volunteer/vol-opportunities/vol-opportunities.component.ts`
- In the `scrollToBottom()` method, directly uses `document.body` and `window.scrollTo()`
- **Code Location:** Around lines 13-16

**Problem Component 3:** `WHCFC_Frontend/src/app/components/volunteer/vol-heading/vol-heading.component.ts`
- Same `scrollToBottom()` problem
- **Code Location:** Around lines 13-16

**Impact:**
- If running `npm run serve:ssr:whcfc-frontend`, may see errors in console
- May not deploy properly on Netlify
- SEO effects will be impacted

### What Needs to Be Done

For these 3 files, need to:
1. Import Angular's platform detection tools at the top of the file
2. Inject platform ID in the class
3. Wrap all code using `window` or `document` with `if (isPlatformBrowser(platformId))`

**Explanation:** `isPlatformBrowser` checks if code is running in browser or server. Only execute that code in browser.

### Example Explanation

**Current code problem (simplified):**
```typescript
setupCarousel() {
  const button = document.querySelector('.button');  // ❌ Will error on server
  button.addEventListener('click', ...);
}
```

**Needs to be changed to:**
```typescript
setupCarousel() {
  if (isPlatformBrowser(this.platformId)) {  // ✅ Check if in browser first
    const button = document.querySelector('.button');  // Safe now
    button.addEventListener('click', ...);
  }
}
```

**Reference Example:** Can look at `home.component.ts` line 64, which already correctly uses this pattern:
```typescript
if (typeof window !== 'undefined') {
  this.slideInterval = setInterval(() => { ... });
}
```
We need to use the more standard Angular way (`isPlatformBrowser`).

### Expected Results
- SSR build and run no longer errors
- Website can deploy normally on Netlify or other servers
- All pages won't crash during server-side rendering

### Acceptance Criteria
- [x] All 3 files have been modified
- [x] Running `npm run build` succeeds without errors
- [x] Running `npm run serve:ssr:whcfc-frontend` starts successfully
- [x] Visiting `http://localhost:4000`, opening browser console, **no error messages**
- [x] Visiting the following pages, all display normally without errors:
  - `http://localhost:4000/canadaday` (test tournament component)
  - `http://localhost:4000/volunteer` (test volunteer component)

---

## Task 5: Configure Netlify to Support SSR Deployment

### What is it?
We mentioned a problem in the PR: Current Netlify configuration doesn't support Angular SSR, website may not deploy correctly.

### Current Problems

**Current Status:** 
- We've already enabled SSR in `angular.json` (`"ssr": true`)
- But Netlify's configuration file (`netlify.toml`) may not be configured properly
- Or Netlify itself may not be the most suitable platform for Angular SSR

**Possible Symptoms:**
- After deploying to Netlify, website doesn't display properly
- SSR functionality doesn't work (only client-side rendering)
- Build fails or runtime errors

### What Needs to Be Done

**Research and Choose Solution:**

#### Option 1: Enable Prerendering (Recommended)
- **What it is:** Generate static HTML during build time, not dynamically rendered on server
- **Pros:** Netlify supports perfectly, simple deployment, fast speed
- **Cons:** Not true SSR, dynamic content needs client-side rendering
- **Operation:** Modify `angular.json`, change `"prerender": false` to `"prerender": true`

#### Option 2: Migrate to Vercel
- **What it is:** Switch deployment platforms, Vercel has better Angular SSR support
- **Pros:** Native Angular SSR support, simple deployment configuration
- **Cons:** Need to migrate existing deployment, team needs to learn new platform
- **Operation:** 
  1. Create account on Vercel
  2. Connect GitHub repository
  3. Vercel will automatically detect Angular project
  4. Configure environment variables
  5. Deploy

#### Option 3: Configure Netlify Functions
- **What it is:** Use Netlify's serverless functions to support SSR
- **Pros:** Continue using Netlify, true SSR
- **Cons:** Complex configuration, needs additional function setup
- **Operation:** Need to create Netlify Functions, configure routing

### Decisions Needed
1. **Evaluate 3 options**, list pros and cons of each
2. **Recommend a solution**, explain why
3. **If choosing prerendering:** Modify `angular.json`, test build
4. **If choosing Vercel:** Prepare migration plan, list required steps
5. **If choosing Functions:** Research configuration methods, prepare configuration files

### Expected Results
- Website can successfully deploy to production environment
- SSR functionality works properly (or prerendering works)
- No more deployment-related issues

### Acceptance Criteria
- [x] Complete research report on 3 options
- [x] Provide clear recommendation and reasoning
- [x] If choosing prerendering:
  - [x] `angular.json` is updated
  - [x] `npm run build` generates prerendered HTML files
  - [x] Can see `index.html` for each page under `dist/whcfc-frontend/browser/`
- [x] If choosing other solutions: Provide detailed implementation plan

### Recommendation
Based on our project situation, **recommend trying Option 1 (prerendering) first**, because:
- Simplest, just change one line of configuration
- Netlify supports perfectly
- SEO effect is almost as good
- Our website content is not very dynamic

If prerendering isn't sufficient, then consider migrating to Vercel.

---

## Task Summary

| Task | Workload | Impact |
|------|----------|--------|
| 1. robots.txt | 15 minutes | Search engine crawling |
| 2. sitemap.xml | 30 minutes | Page indexing speed |
| 3. Meta tags | 30 minutes | Social media sharing |
| 4. Fix SSR | 45 minutes | Deployment stability |
| 5. Netlify config | 1 hour | Production deployment |
| **Total** | **3 hours** | **Website can go live normally** |

---

## Final Acceptance

### Checklist After Completing All Tasks

**File Check:**
- [x] `WHCFC_Frontend/src/robots.txt` exists
- [x] `WHCFC_Frontend/src/sitemap.xml` exists
- [x] `WHCFC_Frontend/src/index.html` is updated
- [x] 3 component files are fixed
- [x] `angular.json` is updated (assets + possibly prerender)

**Build Test:**
```bash
cd WHCFC_Frontend
npm run build
```
- [x] Build succeeds without errors
- [x] Can find `robots.txt` and `sitemap.xml` under `dist/whcfc-frontend/browser/`

**SSR Test:**
```bash
npm run serve:ssr:whcfc-frontend
```
- [x] Starts successfully
- [x] Visiting `http://localhost:4000`, no console errors
- [x] Right-click "View Page Source", can see complete HTML (not empty)
- [x] Can see newly added meta tags

**URL Test:**
- [x] `http://localhost:4000/robots.txt` - Shows content
- [x] `http://localhost:4000/sitemap.xml` - Shows XML

**Social Media Test (Optional):**
- [ ] Facebook sharing test passes
- [ ] Twitter Card test passes

---

## Technical Support

### If You Encounter Problems

**Problem 1: Don't know how to modify angular.json**
- Open `WHCFC_Frontend/angular.json`
- Search for `"assets"`, will find an array
- Add new string items to the array

**Problem 2: Don't know meta tag format**
- Check reference document: `SEO优化补充任务清单.md` page XX
- Or search "Open Graph meta tags"
- Or look at other websites' source code (right-click to view)

**Problem 3: Don't understand isPlatformBrowser**
- This is Angular's standard API
- Reference: `home.component.ts` line 64 for similar usage
- Or search "Angular isPlatformBrowser"

**Problem 4: Unsure about Netlify solution**
- First ask: Does our website content need real-time server rendering?
- If not needed, use prerendering (simplest)
- Discuss in the group, decide together

### Reference Resources
- **Detailed Technical Guidance:** `SEO优化补充任务清单.md`
- **Google SEO Documentation:** https://developers.google.com/search/docs
- **Open Graph Protocol:** https://ogp.me/
- **Angular SSR Documentation:** https://angular.io/guide/ssr

---

**Please confirm task acceptance and start work!**  
**If anything is unclear, ask in the group anytime!**


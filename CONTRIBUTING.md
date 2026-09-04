# Contributing to White Haven Community Football Club Website Development
Thank you for volunteering with our not-for-profit organization to bring soccer to our community free of cost! We dearly value your contributions to our project! This document outlines the process for contributing to the development of our website, including coding standards, the workflow for contributing, and guidelines for using Figma.

### Table of Contents

- [Code of Conduct](#book-code-of-conduct)
- [Getting Started](#bulb-getting-started)
- [How to Contribute](#inbox_tray-how-to-contribute)
- [Coding Standards](#memo-writing-coding-standards)
- [Figma Design Collaboration](#pray-figma-design-collaboration)
- [Code Review Process](#white_check_mark-code-review-process)
- [Testing](#nail_care-testing)

## :book: Code of Conduct
To promote an open and inclusive environment, we, as contributors and maintainers, commit to ensuring that participation in our project and community is free from harassment. We strive to create a welcoming experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, experience level, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

## :inbox_tray: How to Contribute
### Reporting Issues
If you find a bug or have a feature request, please open an issue in the GitHub repository. When reporting an issue, provide as much detail as possible, including steps to reproduce the problem.

### Creating Pull Requests
1. Create a new branch for your feature or bugfix:
```
git checkout -b feature/your-feature-name
```
2. Make your changes in the codebase. Ensure your code follows our coding standards.
3. Commit your changes with a descriptive commit message.
4. Push your branch to your forked repository:
```
git push origin feature/your-feature-name
```
5. Create a pull request from your branch to the main branch of the original repository.
6. Link any relevant issues in your pull request description.

### Branching Strategy
- Main Branch: The main branch contains production-ready code.
- Feature Branches: Create branches for new features or bug fixes with the naming convention feature/your-feature-name.
- Hotfix Branches: Use hotfix/your-fix-description for urgent fixes.

## :memo: Coding Standards
### HTML
- Use semantic HTML5 elements (e.g., `<header>`,`<article>`,` <footer>`).
- Ensure all markup is accessible (e.g., proper use of alt attributes on images).

### CSS
- We mostly rely on tailwindcss

### TypeScript
- Follow Angular Style guide. [Click here ](https://angular.dev/style-guide) to learn more.
- Use `const` and `let` instead of `var`.
- Write `functions` and `components` that are modular and reusable.
- Avoid unnecessary dependencies.

### Angular
- Use Angular CLI for generating components, services, and other Angular modules.
- Follow the Angular Style Guide.
- Use strong typing with TypeScript.
- Structure your project according to the Angular folder-by-feature style.

## :love_letter: Commit Messages
Write clear and descriptive commit messages. Use the following format:

```
type(scope): description

# Examples:
feat(navbar): add responsive navbar component
fix(button): resolve issue with button alignment on mobile
```

### Common Types:
- feat: A new feature
- fix: A bug fix
- docs: Documentation changes
- style: Code style changes (e.g., formatting)
- refactor: Code refactoring without changing functionality
- test: Adding or modifying tests
- chore: Maintenance or dependency updates

## :white_check_mark: Code Review Process
1. After opening a pull request, request reviews from the relevant team members or anyone.
2. Reviewers will provide feedback after testing, request changes, or approve the PR.
3. Address all comments, make any necessary changes, and push updates to your branch.
4. Once approved by one other person, the PR can be merged into the main branch.

## :nail_care: Testing
- Unit Tests: Write unit tests for your Angular components and services using Jasmine and Karma.
- End-to-End Testing: Use Protractor for end-to-end testing.
- Run Tests: Before pushing, ensure all tests pass by running:
```
ng test
ng e2e
```

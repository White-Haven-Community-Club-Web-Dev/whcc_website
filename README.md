# WHCFC Website Platform Development

Welcome to the repository of the **White Haven Community Football Club** website. 
Website Link: https://whcfc.ca/

**Repository Structure:**

The repository is structured as follows:

- /WHCFC_Frontend: Contains the Angular-based frontend code.
- README.md: The common README file with general instructions.
- [CONTRIBUTING.md](CONTRIBUTING.md): The common README file with general instructions.
- [WHCFC_Frontend/README.md](WHCFC_Frontend/README.md): Specific instructions for setting up the frontend.

**Branching Strategy:**

- **main:** This branch contains the production-ready code. Do not commit directly to this branch.

- **develop:** This is the active development branch where all new features, bug fixes, and changes are regularly updated.

**General Git Commands:**

**Cloning the Repository:**

To get started with the project, follow these steps to clone the repository to your local machine:

- Open your terminal (or Git Bash on Windows).

- Clone the repository: **git clone https://github.com/White-Haven-Community-Club-Web-Dev/whcc_website.git**

- Navigate to the cloned repository: **cd whcc_website**

- Checkout the develop branch (this is where all the development happens): **git checkout develop**

**Creating a Feature Branch:**

Whenever you work on a new feature or a bug fix, always create a new feature branch off of the develop branch.

- Create a new feature branch: **git checkout -b feature/your-feature-name**

- After completing your work, commit your changes and push the feature branch: **git push origin feature/your-feature-name**

- Open a pull request (PR) from your feature branch into develop for code review.

**Fetching the Latest Code:**

Before starting your work each day, it's important to get the latest updates from the develop branch. Use the following command:

- Pull the latest code from the develop Branch: **git pull origin develop**

**Committing and Pushing Changes:**

Once you’ve made changes to the code, follow these steps to commit and push your changes to the remote repository.

- Switch to Your Feature Branch: **git checkout feature/your-feature-name**

- Pull the latest changes from develop into Your Feature Branch: **git pull origin develop**

- Add your changes to the staging area: **git add .**

- Commit your changes with a clear commit message: **git commit -m "Your clear and descriptive commit message"**

- After committing the changes, push the updated feature branch to the remote repository: **git push origin feature/your-feature-name**

- Create a Pull Request to Merge Your Feature Branch into develop:

  1. Click on the "Pull Requests" tab.
  3. Click on "New Pull Request".
  4. Select your feature branch (feature/your-feature-name) as the source branch.
  5. Select develop as the target branch.
  6. Review and Submit.
  7. Add a title and description for your pull request.
  8. Review the changes to ensure everything is correct.
  9. Click "Create Pull Request".
  10. Wait for Review and Merge.

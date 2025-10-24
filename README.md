# ⚽ WHCC Website Platform Development

Welcome to the repository of the **White Haven Community Club** (WHCC) website. This project powers the official WHCC website, featuring information about events, programs, sponsorships, and volunteer opportunities.

Website Link: https://whcfc.ca/.

## 🧩 Repository Structure:

The repository is structured as follows:

- /WHCFC_Frontend: Contains the Angular-based frontend code.

- /WHCFC_Backend: Contains the Node.js and MySQL-based backend code.

- README.md: The common README file with general instructions.

- /WHCFC_Frontend/README.md: Specific instructions for setting up the frontend.

- /WHCFC_Backend/README.md: Specific instructions for setting up the backend.

## 🚀 Quick Start:

### 🆕 First-Time Setup for New Members:

If you are joining the project for the first time, please follow these steps carefully:

#### 1. Clone the Repository:

```bash
git clone https://github.com/White-Haven-Community-Club-Web-Dev/whcc_website.git
cd whcc_website
git checkout develop
```

#### 2. Set up the Backend:

```bash
cd WHCFC_Backend
npm install
```

- Obtain the .env.dev file from the team lead.

- Ensure Docker is running, then start the MySQL service using Docker Compose:

  ```bash
  docker compose -f mysql.docker-compose.yml up -d
  ```

  *(Alternatively, in VS Code you can right-click the file and choose “Compose Up”.)*

- Start the backend server:

  ```bash
  npm run dev
  ```

- The backend service runs at http://localhost:8000.

#### 3. Set up the Frontend:

```bash
cd WHCFC_Frontend
npm install
ng serve
```

- Then visit: http://localhost:4200.

### ⚙️ System Requirements:

| Tool | Version | Purpose |
|:----:|:-------:|:-------:|
| **Node.js** | 18.18.0 | Runtime environment |
| **Angular CLI** | 17.x | Frontend framework |
| **Docker** | Latest | MySQL container |
| **Git** | Latest | Version control |

### 🌐 Production Deployment:

The live website is hosted on **Netlify**, serving only the Angular frontend. The backend (Node.js + MySQL) is used for local development and planned future features but is not connected in production. All content on the live site is therefore static and does not rely on the backend. Any changes merged into the **main branch** are automatically deployed to the live site through Netlify.

### 🧰 Common Issues and Fixes:

| Issue | Likely Cause | Solution |
|:-----:|:------------:|:--------:|
| **Port already in use** | Another service running on port 4200/8000 | Stop the conflicting service or change the port |
| **npm install fails** | Cache corruption or missing dependencies | Delete `node_modules` and `package-lock.json`, then rerun `npm install` |
| **.env.dev not found** | File not shared yet | Contact the team lead for credentials and configuration |


## 🌿 Branching Strategy:

- **main:** This branch contains the production-ready code. Do not commit directly to this branch.

- **develop:** This is the active development branch where all new features, bug fixes, and changes are regularly updated.

## 🧠 General Git Commands:

### 📦 Cloning the Repository:

To get started with the project, follow these steps to clone the repository to your local machine:

- Open your terminal (or Git Bash on Windows).

- Clone the repository: **git clone https://github.com/White-Haven-Community-Club-Web-Dev/whcc_website.git**

- Navigate to the cloned repository: **cd whcc_website**

- Checkout the develop branch (this is where all the development happens): **git checkout develop**

### 🌱 Creating a Feature Branch:

Whenever you work on a new feature or a bug fix, always create a new feature branch off of the develop branch.

- Create a new feature branch: **git checkout -b feature/your-feature-name**

- After completing your work, commit your changes and push the feature branch: **git push origin feature/your-feature-name**

- Open a pull request (PR) from your feature branch into develop for code review.

### 🔄 Fetching the Latest Code:

Before starting your work each day, it's important to get the latest updates from the develop branch. Use the following command:

- Pull the latest code from the develop Branch: **git pull origin develop**

### 💾 Committing and Pushing Changes:

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

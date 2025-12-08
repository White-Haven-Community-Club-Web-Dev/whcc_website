# Backend server for WHCFC

This is the backend server for the WHCFC project. It is a RESTful API that is built using Node.js and Express.js.

## Installation

### Repository
1. Clone the repository
2. Run `npm install` to install all the dependencies
3. Get environment files from [Google Drive](https://drive.google.com/drive/folders/1gki1BMCmXWXBZOBVIcj9RYOzhk6yzFLM), change the file name to `.env` and `.env.dev`, and place it in the root directory (`.env.dev` alone should be enough for local development)

### Database
#### Using Docker (Recommended)
1. Install Docker on your machine. Follow the instructions [here](https://docs.docker.com/engine/install/).
2. Install Docker extension for VSCode. Follow the instructions [here](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker).
3. Right click on `mysql.docker-compose.yml` and click on `Compose Up`.

Note: If you already have a MySQL server running on your machine, you can change the port in `mysql.docker-compose.yml` or uninstall MySQL server first to avoid conflicts.

#### Without Docker
1. Install MySQL on your machine. Follow the instructions [here](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/).
2. Create a database named `whcfc`.


## Local Development
1. Run `npm run dev` to start the server in development mode
2. The server will be running on `http://localhost:8000`
3. For email functionality testing, change the value of `APP_MAILING_RECEIVER_EMAIL` in `.env.dev` to your email address
4. To validate data in database, universal database manager is recommended. You can use [DBeaver](https://dbeaver.io/download/) or [MySQL Workbench](https://dev.mysql.com/downloads/workbench/). Connect with the credentials in `.env.dev` and you can see the data in the database.

Resend email:
1. Create an account at `https://resend.com/`
2. Create an API Key
3. Fill in the environment variables in .env.dev
  Require fields:
  - RESEND_API_KEY
  - EMAIL_SENDER (<name it anything you want>@resend.dev, Note: domain name can be changed, but require configuration in the Resend)
  - EMAIL_RECIPIENTS

Captcha secret key:
1. Add Google's test key to `.env.dev` - secret key = `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe`

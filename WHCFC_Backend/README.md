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



## API Endpoints

### Email Routes
Submit a contact form and send email notification.

`POST /send-email/contact`


Request Body:

    {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john@example.com",
    "phone": "416-555-0123",
    "message": "Your message here"
    }


Response:
- 200: Success
- 500: Server error

### Agenda Routes
   
Retrieve all upcoming agenda items from the current month onwards.

`GET /agenda/all-agendas`

Response:

    [
        {
        "id": 1,
        "title": "Tournament Match",
        "date": "2024-11-15",
        "time": "14:00:00",
        "category": "Tournament",
        "description": "Semi-final match",
        "location": "White Haven Park",
        "team1": "Team A",
        "team2": "Team B"
        }
    ]

Create a new agenda item.

`POST /agenda/add-agenda`


Request Body:

    {
        "title": "Practice Session",
        "date": "2024-11-20",
        "time": "18:00:00",
        "category": "Practice",
        "description": "Weekly practice",
        "location": "White Haven Park",
        "team1": "",
        "team2": ""
    }


Response:
- 200: `Agenda added successfully`
- 500: Error with details


### Testing the API

You can test the API endpoints using:
- Postman: Download from [postman.com](https://www.postman.com/)
- Thunder Client: VS Code extension
- cURL: Command line tool

## Example cURL Commands

### Bash

Get all agendas

`curl http://localhost:8000/agenda/all-agendas`

Add new agenda

    curl -X POST http://localhost:8000/agenda/add-agenda \
    -H "Content-Type: application/json" \
    -d '{"title":"Test Event","date":"2024-12-01","time":"10:00:00","category":"Practice","description":"Test","location":"Park","team1":"","team2":""}'
    

## Troubleshooting

### Common Issues

1. Port already in use
    - Check if another process is using port `8000`
    - Change port in `.env.dev` file

2. Database connection failed
    - Ensure MySQL Docker container is running
    - Check credentials in `.env.dev`
    - Verify database whcfc exists

3. Email not sending
    - Check email credentials in `.env.dev`
    - Ensure Gmail app password is correct
    - Check firewall settings
   

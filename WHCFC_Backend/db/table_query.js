const contactTable = `
  CREATE TABLE IF NOT EXISTS contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    message TEXT NOT NULL
  );
`;

const agendaTable = `
  CREATE TABLE IF NOT EXISTS agenda (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    category VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    team1 VARCHAR(255),
    team2 VARCHAR(255)
  );
`;

export { contactTable, agendaTable };

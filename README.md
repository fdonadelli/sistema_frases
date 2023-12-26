# Project Sistema-Frases
## Setup
### Docker
**Requirements**
- Docker v19.03.0+
- Docker Compose v1.27.0+

#### Setup & Run
1. Build the Docker Images
- `docker compose build`
2. Start the containers
- `docker compose up`



###


#### Para rodar o PGSQL com PGADMIN (GUI)

- Subir o conteiner com docker compose up -d

 - abrir o endereco 
http://localhost:16543/

 - colocar credenciais de login: <br>
 PGADMIN_DEFAULT_EMAIL: "user@localhost.com" <br>
 PGADMIN_DEFAULT_PASSWORD: "PgAdmin#2023"

- adicionar servidor pela interface passando as informacoes <br>
nome : local (pode escolher qual quiser)<br>
host: 'postgres'<br>
port: 5432<br>
username: 'postgres'<br>
password: 'PgAdmin#2023'<br>
 
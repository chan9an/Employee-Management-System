# Employee Management System

## Overview
The Employee Management System is a web application built using Angular for the frontend (client) and Spring Boot for the backend (server). It allows users to manage employee details, including adding, updating, viewing, and deleting employee records.

## Project Structure
```
Employee-Management-System/
│-- client/      # Angular Frontend
│-- server/      # Spring Boot Backend
```

## Technologies Used
### Client (Angular)
- Angular
- TypeScript
- HTML/CSS
- Bootstrap 
- Angular Services & Components

### Server (Spring Boot)
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate
- MySQL (or H2 for in-memory database)
- RESTful APIs

## Installation & Setup
### Prerequisites
- Node.js & npm (for Angular client)
- Java (JDK 17+ recommended)
- MySQL Database (if using MySQL)
- Maven (for Spring Boot)

### Setup and Run
#### Server (Spring Boot)
1. Navigate to the `server` directory:
   ```sh
   cd server
   ```
2. Configure database settings in `application.properties` (for MySQL):
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Build and run the Spring Boot application:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```

#### Client (Angular)
1. Navigate to the `client` directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Angular development server:
   ```sh
   ng serve
   ```
4. Open a browser and visit:
   ```
   http://localhost:4200
   ```

## API Endpoints (Spring Boot)
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get employee by ID |
| POST | `/api/employees` | Add a new employee |
| PUT | `/api/employees/{id}` | Update an existing employee |
| DELETE | `/api/employees/{id}` | Delete an employee |

## Features
- CRUD operations for employees
- Responsive UI with Angular
- RESTful APIs using Spring Boot
- Database integration with MySQL

## Contributing
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push to your branch.
5. Open a Pull Request.




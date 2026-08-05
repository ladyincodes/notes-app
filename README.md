# Notes App

A full-stack Notes application built with **Java Spring Boot**, **React**, and **MySQL**. The project demonstrates REST API development, frontend-backend integration, and complete CRUD functionality using a modern Java and React technology stack.

---

## Features

- Create new notes
- View all notes
- View a single note
- Edit existing notes
- Delete notes
- Input validation
- Persistent storage with MySQL
- RESTful API
- Responsive React user interface

---

## Tech Stack

### Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- MySQL
- Maven

### Frontend

- React
- Vite
- React Router
- Axios
- Material UI (MUI)
- Formik
- Yup

---

## Project Structure

```
notes-app
│
├── notes-api      # Spring Boot REST API
└── notes-ui       # React frontend
```

---

## REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/notes | Retrieve all notes |
| GET | /api/notes/{id} | Retrieve a note by ID |
| POST | /api/notes | Create a new note |
| PUT | /api/notes/{id} | Update an existing note |
| DELETE | /api/notes/{id} | Delete a note |

---

## Running the Backend

Clone the repository:

```bash
git clone https://github.com/yourusername/notes-app.git
```

Navigate to the backend:

```bash
cd notes-api
```

Configure your MySQL database in:

```
application.properties
```

Run the application:

```bash
./mvnw spring-boot:run
```

The API will be available at:

```
http://localhost:8080
```

---

## Running the Frontend

Navigate to the frontend:

```bash
cd notes-ui
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## What I Learned

This project allowed me to practice:

- Designing RESTful APIs with Spring Boot
- Layered architecture (Controller → Service → Repository)
- Using DTOs for request and response objects
- Data persistence with Spring Data JPA and MySQL
- React component architecture
- Form handling with Formik
- Form validation with Yup
- API communication using Axios
- Client-side routing with React Router
- Building responsive user interfaces with Material UI

---

## Future Improvements

- User authentication with Spring Security and JWT
- Search notes
- Pagination
- Rich text editor
- Tags and categories
- Docker support
- Unit and integration tests
- Deployment to the cloud

---

## License

This project is intended for learning and portfolio purposes.

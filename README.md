# Backend Development

This section covers essential backend development concepts and tools used for building scalable, secure, and maintainable server-side applications using Node.js and Express.js.

### Topics Covered

- **Express.js**
  - A minimalist web framework for Node.js to handle HTTP requests, routes, middleware, and server logic.
  - Easily extensible and widely used in RESTful API development.

- **MVC Architecture (Model-View-Controller)**
  - Separates application concerns into three layers:
    - **Model**: Handles data and business logic (e.g., Mongoose models)
    - **View**: Typically omitted in APIs or handled by frontend frameworks
    - **Controller**: Handles incoming requests and calls the appropriate model logic

- **REST API (Representational State Transfer)**
  - An architectural style for designing networked applications.
  - Uses standard HTTP methods: `GET`, `POST`, `PUT`, `DELETE`
  - Follows resource-based URL structure: `/api/users/:id`

- **JWT (JSON Web Token)**
  - A stateless token-based authentication method.
  - Tokens are issued upon login and used for secure, authenticated API access.
  - Consists of header, payload, and signature.

- **Logger (`winston`)**
  - Used to record application events, errors, and operations.
  - Helps with debugging and monitoring

- **Mongoose**
  - An ODM (Object Data Modeling) library for MongoDB in Node.js.
  - Provides schema-based modeling, data validation, and query abstraction.

- **MongoDB**
  - A NoSQL, document-based database that stores data in JSON-like format.
  - Scalable, schema-less, and integrates well with JavaScript-based applications.

- **Swagger**
  - A tool for API documentation and testing.
  - Allows auto-generation of interactive docs from annotations or config files.
  - Useful for sharing and testing APIs with frontend developers or third parties.


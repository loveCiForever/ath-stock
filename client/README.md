## Brief explanation of each folder/file:
* public/: Static assets served by the frontend.
* src/: Source code for the frontend.
* components/: React components for the application.
* utils/: Utility functions for the frontend.
* images/: Image assets for the frontend.
* styles/: CSS styles for the application.
* index.js: Entry point for the application.
* package.json: Dependencies and scripts for the frontend.


## graph LR
    A[client] --> B[public]
    B --> C[index.html]
    B --> D[favicon.ico]
    A --> E[src]
    E --> F[components]
    F --> G[App.js]
    F --> H[Header.js]
    F --> I[Footer.js]
    E --> J[utils]
    J --> K[api.js]
    J --> L[constants.js]
    E --> M[images]
    E --> N[styles]
    N --> O[global.css]
    E --> P[index.js]
    A --> Q[package.json]
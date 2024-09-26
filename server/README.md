## brief explanation of each folder/file:
* app/: This is the main application folder.
* __init__.py: This is an empty file that tells Python that this folder should be treated as a package.
* config.py: This file contains configuration settings for your application.
* utils/: This folder contains utility functions for your application.
* app.py: This is the main application file, which contains the Flask app instance.
* requirements.txt: This file contains dependencies for your application.

## graph LR
    A[server] --> B[app]
    B --> C[__init__.py]
    B --> D[config.py]
    B --> E[utils]
    E --> F[__init__.py]
    E --> G[other utility functions]
    B --> H[app.py]
    A --> I[requirements.txt]
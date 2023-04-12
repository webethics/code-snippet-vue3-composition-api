# Vue 3 code-snippet-with pinia-store and composition-api

This is a Vue 3 project that uses Prettier for code formatting, Husky for pre-commit hooks, Vite as a build tool, Pinia as store management, and Vue Router for routing.

This Vue 3 snippet includes the crud operations for posts, authors, and categories.

### Posts 

* Posts Listing
* Add/Edit Post
* Delete Post
* Search Post

### Authors 

* Authors Listing
* Add/Edit Author
* Delete Author

### Categories 

* Categories Listing
* Add/Edit Category
* Delete Category

## Prerequisites

- Node.js >= 16
- npm >= 8
- json-server

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).



## Getting Started

* Clone the repository

    ```sh
    git clone https://github.com/webethics/code-snippet-vue3-composition-api.git
    npm install
    ```

* Project setup

    ```sh
    cd code-snippet-vue3-composition-api/
    npm install
    npm install -g json-server
    ```

* Start the development server

    ```sh
    npm run dev
    ```

* Start the API server

    ```sh
    npm run start:json-server
    ```


The development server will start at `http://localhost:5173` by default. You can now access the application in your browser.

## Stopping the Project

To stop the development server, you can press `CTRL + C` in the terminal window where the server is running.

## Build Tool: Vite

Vite is a fast and efficient JavaScript build tool that aims to provide a simple and improved developer experience. It uses native ES modules and modern browser features to build lightweight and fast web applications.

In this project, Vite is used for development and Rollup for production builds. This allows for faster builds during development and optimized production-ready code.

## Pre-commit Hooks: Husky

Husky is a tool that allows you to easily add pre-commit hooks to your Git repository. In this project, Husky is used in conjunction with Prettier to ensure that code is properly formatted before committing.

## Code Formatting: Prettier

Prettier is a code formatting tool that automatically formats your code according to a set of rules. In this project, Prettier is used in conjunction with Husky to ensure that all code is properly formatted before committing.


## Conclusion

This is a simple project that showcases how to use Vite, Husky, and Prettier in a Vue 3 project. These tools work together to provide a fast, efficient, and well-formatted development environment.

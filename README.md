# Problem

Your team is tasked with creating a HTTP API application that lists out music festival data in a particular manner.

The data is provided to you via an API by another team; they assure you all the data is available and have provided you with the Swagger documentation needed to get started.

The return pay load should be: at the top level, it should show the band record label, below that it should list out all bands under their management, and below that it should display which festivals they've attended, if any. All entries should be sorted alphabetically.

For example:
```javascript
   [
       {
           "label": "Record Label 1",
           "bands": [
               {
                   "name": "Band X"
                   "festivals": [
                       {
                           "name": "Omega Festival"
                       }
                   ]
               }
           ]
       },
       {
           "label": "Record Label 2",
           "bands": [
               {
                   "name": "Band A"
                   "festivals": [
                       {
                           "name": "Alpha Festival"
                       },
                       {
                           "name": "Beta Festival"
                       }
                   ]
               }
           ]
       }
   ]
```
   
Elements for you to consider:
- How could we dockerize this application?
- Logging is important. Does your solution includes structured 
- How do we configure the app to run on multiple environments?
- Building and running the application should be easy. Have you provided instructions?
- A good solution should include documentation.
- Write code which you would be proud to commit at work or to an open-source project.


## Technologies

- GraphQL to solve for the problem of overfetching as the API endpoint is throttled

- Apollo-Server-Express over Apollo-Server due to better TypeScript and community support

- TypeScript is being used but more interfaces will need to be created to prevent any types throughout the codebase

- GraphQL-Codegen to introspect GraphQL schema and conver to TypeScript types. Especially useful for resolver's types

- ESLint, Prettier, Husky pre-commit hook

- Nodemon for hot reloading

- Axios chosen over Fetch, don't need extra step to convert json and cancellable requests (not being used currently)

- Lodash to perform functions on arrays, objects, etc

- Winston to log to console (development) or file (production)


## Getting Started

- Git clone the ea-graph repository from Github to your machine

- You will need `env` files for production and development from a team member. These will contain all the environment variables needed to get set up. 

- You will need Node v14 LTS. Set up [nvm](https://github.com/nvm-sh/nvm) and run `nvm install 14` and then `nvm use 14` in a terminal

- Run `npm install` in a terminal to install all the packages

- Download Docker for desktop via the [Docker website](https://www.docker.com/products/docker-desktop)

    - To start for the first time: `docker-compose build`
    - To run the container: `docker-compose up -d`
    - To stop the container: `docker-compose down`
    - To start container in production `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d`

- You can run the server from your terminal instead of docker in dev: `npm run dev`

- You can run the server from your terminal in prod: `npm start`

- You can generate TypeScript files based on the schema: `npm run codegen`
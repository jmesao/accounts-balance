# Accounts Balance

This repository is a test to put into practice Vue 2 in the Frontend and NestJS in the backend.
It has been implemented with node v12.18.0 (npm v6.14.4) but at first it should work from v12.0.0. (npm v6.9.0) or higher.
It has been tested on Chrome and Firefox browsers.

# Frontend

Configuration:
- Airb&b for the Eslint and the same rules in the `eslintrc` file
- Added Babel transpiler 
- Jest as framework for testing with the support of the vue-cli-service

## Feautures
- Frontend with Vue 2
- Backend with NestJS (Not done yet)
- Chameleon with Tailwind for reusable component and styling. Chameleon components is a vue.js components library.
You can check the current status of the library [here](https://docs.google.com/spreadsheets/d/101NhAtDJ_6YLybdmWnhTvfem9yCtCeHJK5LtCZcX6Rk/edit#gid=0).
Also, check out the latest version deployed in [Storybook](https://chameleon.ebury.now.sh/).

## Installation

```
cd frontend/
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Run your unit tests
```
npm run test
```
### Run your unit tests in watch mode
```
npm run test:watch
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Vue.js

[Vue 2](https://vuejs.org/v2/guide/index.html)

[Vue CLI](https://cli.vuejs.org/)

# Backend

Configuration with the support of :
- Eslint TypeScript and prettier
- Jest as framework for testing with the support of the vue-cli-service

## Installation

```
cd backend/
npm install
```

## Running the app

```
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

### Nest

[NestJS docs](https://docs.nestjs.com/)

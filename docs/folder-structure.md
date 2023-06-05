# Folder Structure

This document outlines the recommended folder structure for an suki-ai monorepo, which is a project structure that allows for managing multiple applications and libraries within a single codebase.

## 1. Overview

This monorepo consists of the following main components:

- **apps**: Applications or services that can be deployed independently. Each app usually has its own entry point and can be run or built separately.

- **libs**: Shared code or reusable modules that can be used across multiple apps within the monorepo. Libraries are typically used to encapsulate business logic, utilities, or UI components.

- **Tools**: Development tools or scripts that are specific to the monorepo. These can include custom scripts for code generation, deployment, testing, or any other automation tasks.

- **docker**: Dockerfiles for building Docker images for the applications or libraries, and docker-compose files for running the applications locally.

- **.github**: GitHub Actions workflows for automating the CI/CD process.

- **keys**: Private keys and certificates for the applications. this folder is ignored by git.

- **docs**: Documentation for the monorepo, including the folder structure, development guidelines, and other relevant information.

## 2. Folder Structure

### 2.1 **apps**: Applications

- **web-admin**: Frontend application built with React.js.
- **web-app**: Frontend application built with React.js.
- **web-www**: Frontend landing pages application built with Next.js.
- **server-realtime**: Backend application built with Express.js and Socket.IO.
- **server-api**: Backend application built with Express.js and REST API.
- **server-graphql**: Backend application built with Express.js and GraphQL.
- **server-crons**: Backend application built for cron jobs.

### 2.2 **libs**: Libraries

- **constants**: Shared constants that can be used across multiple apps within the monorepo.
- **types**: Shared enums that can be used across multiple apps within the monorepo.
- **react-components**: Shared React components that can be used across multiple apps within the monorepo.
- **react-hooks**: Shared React hooks that can be used across multiple apps within the monorepo.
- **react-contexts**: Shared React contexts that can be used across multiple apps within the monorepo.
- **react-svg**: Shared SVG icons that can be used across multiple apps within the monorepo.
- **utils**: Shared utilities that can be used across multiple apps within the monorepo.
- **utils-node**: Shared utilities that can be used across multiple node apps within the monorepo.
- **utils-web**: Shared utilities that can be used across multiple web apps within the monorepo.

## Conclusion

The folder structure outlined in this document provides a logical organization for an Nx monorepo. It helps maintain a modular codebase, promotes code reuse, and provides a clear separation between different components. However, feel free to adapt and customize the structure based on your project's needs.

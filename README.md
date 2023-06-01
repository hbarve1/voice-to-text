# Speech to Text

This project is a monorepo structured with Nx and consists of a frontend application built with React.js named 'app' and a backend application built with Express.js and Socket.IO named 'server-realtime'.

## Prerequisites

Before running the applications, make sure you have the following prerequisites installed on your development machine:

- Node.js (version >18)
- npm (version >9)
- Google Cloud Platform account (for the backend application)

## Environment Variables

The following environment variables are required for running the applications:

### Frontend Application

- `VITE_SERVER_REALTIME_URL`: The URL of the backend server for the frontend application to establish a connection with.

### Backend Application

- `GCP_PROJECT_ID`: The ID of your Google Cloud Platform project.
- `GOOGLE_APPLICATION_CREDENTIALS`: The path to the Google Application Credentials JSON file.
- `CORS_ORIGINS`: Origins allowed for Cross-Origin Resource Sharing (CORS). URLs should be comma separated.
- `SERVER_REALTIME_PORT`: The port number on which the backend server should listen for connections.

Make sure to set these environment variables correctly before running the applications.

## Local Development

To set up and run the applications locally, follow these steps:

### Frontend Application

1. Open a terminal and navigate to the `ROOT` directory of repo.
2. Run `npm install` to install the dependencies.
3. Set the `VITE_SERVER_REALTIME_URL` environment variable in the `.env` file.
4. Run `npm run serve -- app` to start the frontend application.

### Backend Application

1. Open a terminal and navigate to the `ROOT` directory of repo.
2. Set the required environment variables in the `.env` file.
3. Run `npm run serve -- server-realtime` to start the backend application.

## Production Application Deployment

The production deployment of this application involves the following steps:

### Frontend Application

The frontend application is deployed on [Render.com](https://render.com) with automated CI/CD. Any changes pushed to the repository will trigger a build and deployment process on Render.

Live: https://hbarve1-voice-to-text.onrender.com/

### Backend Application

The backend application is deployed on a custom Ubuntu server. To enable external access to the server, Cloudflare Tunnel is configured. This ensures that the traffic from the outside world can reach your custom Ubuntu server securely.

Live: https://voice-to-text.hbarve1.com/

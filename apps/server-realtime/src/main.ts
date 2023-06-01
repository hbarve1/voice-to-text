import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
// import * as path from 'path';

import speech from '@google-cloud/speech';

const PROJECT_ID = process.env.GCP_PROJECT_ID;
const KEY_FILENAME = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const CORS_ORIGINS = process.env.CORS_ORIGINS?.split(',');
const PORT = process.env.SERVER_REALTIME_PORT || 8080;

const speechClient = new speech.SpeechClient({
  PROJECT_ID,
  keyFilename: KEY_FILENAME,
});

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: CORS_ORIGINS,
    methods: ['GET', 'POST'],
    // allowedHeaders: ['my-custom-header'],
    // credentials: true,
  },
});

// app.use('/assets', express.static(path.join(__dirname, 'assets')));

io.on('connection', (socket) => {
  console.log('Client connected');

  const recognizeStream = speechClient
    .streamingRecognize({
      config: {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-IN',
      },
      // If you want interim results, set this to true
      interimResults: true,
    })
    .on('close', () => {
      console.log('close');
      recognizeStream.destroy();
    })
    .on('data', (data) => {
      // console.dir(data, { depth: null });
      socket.emit('transcript', data);
    })
    .on('end', () => {
      console.log('end');
      // recognizeStream.destroy();
    })
    .on('error', (e) => {
      console.error(e);
      recognizeStream.destroy();
    });
  // .on('pause', () => {
  //   console.log('pause');
  // });
  // .on('readable', () => {
  //   console.log('readable');
  // });
  // .on('resume', () => {
  //   console.log('resume');
  // });

  socket.on('audio-stream', async ({ data }) => {
    const { inputFrame } = data;

    recognizeStream.write(inputFrame);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    recognizeStream.destroy();
  });
});

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exitCode = 1;
});

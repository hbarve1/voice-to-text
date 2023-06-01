import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const URL = import.meta.env.VITE_SERVER_REALTIME_URL as string;

export const socket = io(URL, {
  autoConnect: false,
});

export function useSocketConnection() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    // socket.on('connecting', () => {
    //   console.log('Client connecting');
    // });
    // socket.on('connect_failed', () => {
    //   console.log('Client connection failed');
    // });
    // socket.on('error', () => {
    //   console.log('Client error');
    // });
    // socket.on('message', () => {
    //   console.log('server message');
    // });
    // socket.on('reconnect', () => {
    //   console.log('client reconnected');
    // });
    // socket.on('reconnecting', () => {
    //   console.log('client reconnecting');
    // });
    // socket.on('reconnect_failed', () => {
    //   console.log('client reconnect failed');
    // });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return {
    isConnected,
    connect,
    disconnect,
    socket,
  };
}

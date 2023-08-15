import { ManagerOptions, SocketOptions, io } from 'socket.io-client';

const config: Partial<ManagerOptions & SocketOptions> = {
  autoConnect: false
};

export const socket = io(import.meta.env.VITE_SOCKET_DOMAIN, config);

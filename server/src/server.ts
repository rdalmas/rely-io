import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { Task } from "./types/task";

const PORT = 4001;
const CLIENT = "http://localhost:3000"

/* SOCKET SETUP */
const httpServer = createServer();
const server = new Server(httpServer, {
    cors: {
        origin: CLIENT,
        allowedHeaders: ["Access-Control-Allow-Origin"],
        credentials: true
    }
});

let connections: Socket[] = []
let tasks: Task;

/* CONNECT */
function handleConnection(socket: Socket) {
    connections.push(socket);

    console.log(`${socket.id} has connected`)
    
    socket.on('tasks', (data) => {
      tasks = data
        connections.forEach(con => {
            if (con.id !== socket.id) {
                con.emit('newTasks', tasks)
            }
        })
    });
}

server.on('connect', handleConnection);

/* DISCONNECT */
function handleDisconnection(socket: Socket) {
    socket.disconnect();
}

server.on('disconnect', handleDisconnection);

/* SOCKET SERVER */
httpServer.listen(PORT, () => {
    console.log(`🚀 Socket server listening on ${PORT}`);
});

export { server, handleConnection, handleDisconnection };

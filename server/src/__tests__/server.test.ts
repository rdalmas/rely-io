import { createServer, Server as HttpServer } from "http";
import { Server as SocketIoServer, Socket as ServerSocket } from "socket.io";
import { Socket as ClientSocket, io as createClient } from "socket.io-client";

function waitFor(socket: ServerSocket, event: string): Promise<any> {
  return new Promise((resolve) => {
    socket.once(event, resolve);
  });
}

describe("Server test", () => {
  let ioc: SocketIoServer<HttpServer>, serverSocket: ServerSocket, clientSocket: ClientSocket;

  beforeAll((done) => {
    const httpServer = createServer();
    ioc = new SocketIoServer(httpServer);
    httpServer.listen(() => {
      const port = (httpServer.address() as any).port;
      clientSocket = createClient(`http://localhost:${port}`);
      ioc.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });

  afterAll(() => {
    ioc.close();
    clientSocket.disconnect();
  });

  it("should work", (done) => {
    clientSocket.on("hello", (arg) => {
      expect(arg).toEqual("world");
      done();
    });
    serverSocket.emit("hello", "world");
  });

  it("should work with an acknowledgement", (done) => {
    serverSocket.on("hi", (cb) => {
      cb("hola");
    });
    clientSocket.emit("hi", (arg: string) => {
        expect(arg).toEqual("hola");
        done();
    });
  });

  it("should work with emitWithAck()", async () => {
    serverSocket.on("foo", (cb) => {
      cb("bar");
    });
    const result = await clientSocket.emitWithAck("foo");
    expect(result).toEqual("bar");
  });

  it("should work with waitFor()", () => {
    clientSocket.emit("baz");

    return waitFor(serverSocket, "baz");
  });
});

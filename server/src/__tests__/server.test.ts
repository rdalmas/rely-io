import { createServer } from "http";
import { Server } from "socket.io";
import { io } from "socket.io-client";

function waitFor(socket, event) {
  return new Promise((resolve) => {
    socket.once(event, resolve);
  });
}

describe("Server test", () => {
  let ioc, serverSocket, clientSocket;

  beforeAll((done) => {
    const httpServer = createServer();
    ioc = new Server(httpServer);
    httpServer.listen(() => {
      const port = (httpServer.address() as any).port;
      clientSocket = io(`http://localhost:${port}`);
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
    clientSocket.emit("hi", (arg) => {
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

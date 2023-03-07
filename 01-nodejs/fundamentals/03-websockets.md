# Websocket Protocol

- Websockets allow for full-duplex communication.
- WebSocket is a seperate protocol from HTTP.
- Persistent connection between client and server.

For bidirectional communication, which means that the client can initiate communication with the server and the server can initiate communication with the client. This is not something we had with HTTP requests.

With an HTTP request, it was the client's job to initiate the request asking for data from the server and then the server would go ahead and respond.

But at any point in time the server couldn't just send data to the client. If the client didn't make an HTTP request, the server had no way of communicating with it.

With a WebSocket, we have a persistant connection, which means that the client connects to the server and it stays connected for as long as it needs to.

> So if I'm creating a chat application, I can connect the client, which in this case would be a browser to the server and then the client could send messages to the server and the server, whenever it wanted to, could send messages to the client.

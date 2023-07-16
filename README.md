```js
useEffect(() => {
  if (!socket) return;
  //client to server
  socket.on('message-from-server', (data) => {
    setChat([...chat, data.message]);
  });
}, [socket]);
```

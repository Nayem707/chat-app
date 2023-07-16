import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const ChatBox = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    //server host
    setSocket(io('http://localhost:4000'));
  }, []);

  useEffect(() => {
    if (!socket) return;
    //client to server
    socket.on('message-from-server', (data) => {
      setChat((prev) => [...prev, data.message]);
    });
  }, [socket]);

  //Event Handling
  function handleSubmitForm(e) {
    e.preventDefault();
    socket.emit('send-message', { message });
    setMessage('');
  }

  return (
    <div>
      <div className=''>
        {chat.map((msg) => {
          return <p key={msg}>this is: {msg} </p>;
        })}
      </div>
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={handleSubmitForm}>
            <div>
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                Message
              </label>
              <div className='mt-2'>
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name='text'
                  type='text'
                  className='w-full bg-gray-300 py-5 px-3 rounded-xl'
                  placeholder='type your message here...'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

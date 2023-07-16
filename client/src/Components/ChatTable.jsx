import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Modal from './Modal';

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
];

const ChatTable = () => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    //server host
    setSocket(io('http://localhost:4000'));
  }, []);

  useEffect(() => {
    if (!socket) return;

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
    <>
      {/* <!-- component -->
<!-- This is an example component --> */}
      <div className='container mx-auto shadow-lg rounded-lg'>
        {/* <!-- headaer --> */}
        <div className='px-5 py-2 flex justify-between items-center bg-white border-b-2'>
          <div className='font-semibold text-2xl'>
            <div className='hidden lg:flex lg:flex-1 gap-5 pt-2 lg:justify-center'>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                <Modal />
              </a>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                <button className='bg-slate-600 rounded text-white hover:bg-sky-700 p-1'>
                  Join Room
                </button>
              </a>
            </div>
          </div>
          {/* <!-- search compt --> */}
          <div className='border-b-1 py-3 px-5'>
            <label className='relative block'>
              <span className='sr-only'>Search icon</span>
              <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <svg
                  className='h-5 w-5 fill-slate-800'
                  viewBox='0 0 20 20'
                ></svg>
              </span>
              <input
                className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='Search for Friends...'
                type='text'
                name='search'
              />
            </label>
          </div>
          {/* <!-- end search compt --> */}
        </div>
        {/* <!-- end header -->
    <!-- Chatting --> */}

        <div className='flex flex-row justify-between bg-white'>
          {/* <!-- chat list --> */}
          <div className='flex flex-col w-2/5 border-r-2 overflow-y-auto'>
            {/* <!-- user list --> */}

            <ul role='list' className=' m-3 divide-y divide-gray-100 shadow-sm'>
              {people.map((person) => (
                <li
                  key={person.email}
                  className='flex justify-between gap-x-6 py-3'
                >
                  <div className='flex gap-x-4 '>
                    <img
                      className='h-12 w-12 flex-none rounded-full bg-gray-50'
                      src={person.imageUrl}
                      alt=''
                    />
                    <div className='min-w-0 flex-auto '>
                      <h4 className='mt-1 truncate text-sm  leading-5 text-gray-800'>
                        {person.name}
                      </h4>
                      <div className='hidden sm:flex sm:flex-col'>
                        {person.lastSeen ? (
                          <p className='mt-1 text-xs leading-5 text-gray-500'>
                            Last seen
                            <time dateTime={person.lastSeenDateTime}>
                              {person.lastSeen}
                            </time>
                          </p>
                        ) : (
                          <div className='mt-2 flex items-center gap-x-1.5'>
                            <div className='flex-none rounded-full bg-emerald-500/20 p-1'>
                              <div className='h-1.5 w-1.5 rounded-full bg-emerald-500' />
                            </div>
                            <p className='text-xs leading-5 text-gray-500'>
                              Online
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {/* <!-- end user list --> */}
          </div>
          {/* <!-- end chat list --> */}
          {/* <!-- message --> */}
          <div className='w-full px-5 flex flex-col justify-between '>
            <div className='flex flex-col mt-5'>
              {/* Chat mennagement list */}
              {chat.map((msg) => {
                return (
                  <div key={msg}>
                    <div className='flex justify-end mb-4'>
                      <div className='mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white'>
                        {msg}
                      </div>
                      <img
                        src='https://source.unsplash.com/vpOeXr5wmR4/600x600'
                        className='object-cover h-8 w-8 rounded-full'
                        alt=''
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Chat Submit Button */}
            <div className='py-5'>
              <form className='space-y-6' onSubmit={handleSubmitForm}>
                <div>
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
          {/* <!-- end message --> */}

          <div className='w-2/5 border-l-2 px-5'>
            <div className='flex flex-col'>
              <div className='font-semibold text-xl py-4'>MICPLE</div>
              <img
                src='https://media.licdn.com/dms/image/C560BAQFyQi66yuQnlA/company-logo_200_200/0/1668222186270?e=1697068800&v=beta&t=EPPreIEjLdEbY---wUwR0RxxRyAmvniydIq0dCjJM_M'
                className='object-fit rounded-xl h-20  w-20'
                alt=''
              />
              <div className='font-semibold py-4'>Created 22 Sep 2017</div>
              <div className='font-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, perspiciatis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatTable;

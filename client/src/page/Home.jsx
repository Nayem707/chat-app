// import Header from '../Components/Header';
//

export default function Home() {
  return (
    <>
      <div className='mx-auto max-w-2xl py-15 sm:py-48 lg:py-20'>
        <div className='hidden sm:flex sm:justify-center'>
          <img src='assets/chatapp.gif' className='h-15' alt='Flowbite Logo' />
        </div>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Wellcome to ChatApp
          </h1>
          <p className='mt-6 text-lg leading-8 text-red-600'>
            This app will Updating & Some Optimizing.....
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href={`/login`}
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Get Demo
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Learn more <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

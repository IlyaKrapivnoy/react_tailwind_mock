/* This example requires Tailwind CSS v2.0+ */
import Logo from '../images/logo.png';
import Avatar from '../images/avatar.png';
import Search from './Search';

export default function Example() {
    return (
        <>
            <div className='border-b-2'>
                <div className='max-w-7xl mx-auto px-3'>
                    <div className='flex justify-center sm:justify-between items-center border-gray-100 py-2 md:justify-start md:space-x-10'>
                        <div className='flex justify-start lg:w-0 lg:flex-1 items-center'>
                            <a href='/'>
                                <img src={Logo} alt='logo' className='mr-4' />
                            </a>
                            <span className='text-newBlack font-semibold text-2xl'>
                                FanMe
                            </span>
                        </div>
                        <div className=''>
                            <Search />
                        </div>

                        <div className='hidden sm:flex items-center justify-end md:flex-1 lg:w-0'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5 mr-4 cursor-pointer'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                            >
                                <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                            </svg>

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6 mx-4 cursor-pointer'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                                />
                            </svg>

                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6 mx-4 cursor-pointer'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z'
                                />
                            </svg>

                            <img
                                src={Avatar}
                                alt='Avatar'
                                className='ml-4 rounded-3xl h-8 w-8 object-cover cursor-pointer'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

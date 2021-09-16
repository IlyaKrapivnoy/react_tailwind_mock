/* This example requires Tailwind CSS v2.0+ */
import Avatar from '../images/avatar.png';

export default function Header() {
    return (
        <div className='border-b w-full bg-white fixed top-0 right-0'>
            <div className='max-w-4xl mx-auto px-3'>
                <div className='flex justify-center sm:justify-between items-center border-gray-100 py-2 md:justify-start md:space-x-10'>
                    <div className='flex justify-start lg:w-0 lg:flex-1 items-center'>
                        <a href='/'>
                            <svg
                                width='34'
                                height='34'
                                viewBox='0 0 34 34'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                                className='mr-4 cursor-pointer'
                            >
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M31.7175 24.9322L32.2431 23.7429C33.1659 21.6556 33.6803 19.3426 33.6803 16.8988C33.6803 7.56583 26.1408 0 16.8402 0C7.53961 0 0 7.56583 0 16.8988C0 26.2317 7.53961 33.7976 16.8402 33.7976C19.924 33.7976 22.8033 32.9695 25.2819 31.525L26.586 30.7652L33.4849 32.3405L31.7175 24.9322ZM9.92899 25.1142L9.92309 25.1079C8.21181 23.2761 7.24628 21.1303 7.02326 18.6705C7.00712 18.4866 7.00218 18.2979 6.99725 18.1103C6.99623 18.0722 6.99523 18.0341 6.99415 17.9961C9.54396 15.4296 12.9706 13.8525 16.75 13.8525C20.5747 13.8525 24.0403 15.4712 26.5998 18.0964C26.493 20.853 25.5384 23.2119 23.7102 25.1661C21.7978 27.2102 19.536 28.2411 16.9215 28.272C14.2159 28.2478 11.8849 27.202 9.93494 25.1206L9.92899 25.1142Z'
                                    fill='url(#paint0_linear)'
                                />
                                <defs>
                                    <linearGradient
                                        id='paint0_linear'
                                        x1='38.6471'
                                        y1='37.6827'
                                        x2='0.0439781'
                                        y2='2.87994'
                                        gradientUnits='userSpaceOnUse'
                                    >
                                        <stop stop-color='#0C3B83' />
                                        <stop
                                            offset='0.0001'
                                            stop-color='#09459E'
                                        />
                                        <stop offset='1' stop-color='#0066FF' />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        <span className='text-newBlack font-semibold text-2xl cursor-pointer'>
                            FanMe
                        </span>
                    </div>

                    {/* search starts */}
                    <div className='hidden lg:flex relative'>
                        <input
                            type='text'
                            name='price'
                            id='price'
                            className=' block w-full px-7 py-2 sm:text-sm rounded-md bg-gray-100 border-solid border border-gray-200 text-center'
                            placeholder='Search'
                        />
                    </div>
                    {/* search ends */}

                    {/* section icons starts */}
                    <div className='hidden sm:flex items-center justify-end md:flex-1 lg:w-0'>
                        <svg
                            width='24'
                            height='21'
                            viewBox='0 0 24 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='mr-4 cursor-pointer'
                        >
                            <path
                                d='M23.8594 9.25781L12.9375 0.351562C12.7031 0.164062 12.2812 0.0234375 11.9531 0.0234375C11.6719 0.0234375 11.25 0.164062 11.0156 0.351562L0.140625 9.25781C0.046875 9.30469 0 9.44531 0 9.53906C0 9.58594 0 9.72656 0.046875 9.77344L0.515625 10.3359C0.609375 10.4297 0.75 10.4766 0.84375 10.4766C0.890625 10.4766 0.984375 10.4297 1.07812 10.3828L3 8.83594V20.2266C3 20.6484 3.32812 20.9766 3.75 20.9766H9.75C10.125 20.9766 10.5 20.6484 10.5 20.2266V14.2266H13.5V20.2266C13.5 20.6484 13.8281 20.9766 14.25 20.9766H20.25C20.625 20.9766 21 20.6484 21 20.2266V8.83594L22.875 10.3828C22.9688 10.4297 23.0625 10.4766 23.1094 10.4766C23.25 10.4766 23.3438 10.4297 23.4375 10.3359L23.9062 9.77344C23.9531 9.72656 23.9531 9.58594 23.9531 9.53906C23.9531 9.44531 23.9062 9.30469 23.8594 9.25781Z'
                                fill='#252F3F'
                            />
                        </svg>

                        <svg
                            width='23'
                            height='23'
                            viewBox='0 0 23 23'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='mx-4 cursor-pointer'
                        >
                            <path
                                d='M20.4153 0.69778L1.14874 11.7773C0.159603 12.3356 0.245614 13.7956 1.27775 14.2251L7.34156 16.7158V21.0961C7.34156 22.4274 8.93278 22.9856 9.74989 21.9979L12.3732 18.8201L17.792 21.0531C18.6091 21.3967 19.5552 20.8814 19.6842 19.9796L22.4366 2.07198C22.6086 0.955443 21.4044 0.096567 20.4153 0.69778ZM8.71775 21.0961V17.317L11.0401 18.2618L8.71775 21.0961ZM18.351 19.8078L9.44885 16.1146L18.05 6.02281C18.265 5.76515 17.921 5.4216 17.6629 5.63632L6.69648 14.9981L1.83683 12.9797L21.1034 1.85726L18.351 19.8078Z'
                                fill='#252F3F'
                            />
                        </svg>

                        <svg
                            width='20'
                            height='22'
                            viewBox='0 0 20 22'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='mx-4 cursor-pointer'
                        >
                            <path
                                d='M2.95312 1.25H17.9531C18.6435 1.25 19.2031 1.80964 19.2031 2.5V19.2837C19.2031 20.3834 17.8667 20.9679 17.052 20.2025C15.7734 19.0013 14.3477 17.6823 13.1877 16.6617C12.609 16.1526 12.0876 15.7099 11.6798 15.3916C11.4775 15.2336 11.2902 15.0961 11.1309 14.9946C11.0521 14.9444 10.9655 14.8936 10.8779 14.8527C10.8154 14.8236 10.6528 14.75 10.4531 14.75C10.2535 14.75 10.0908 14.8236 10.0284 14.8527C9.94074 14.8936 9.85413 14.9444 9.77533 14.9946C9.61603 15.0961 9.42874 15.2336 9.22643 15.3916C8.81869 15.7099 8.2973 16.1526 7.7186 16.6617C6.55853 17.6823 5.13288 19.0013 3.85429 20.2025C3.03957 20.9679 1.70312 20.3834 1.70312 19.2837V2.5C1.70312 1.80964 2.26277 1.25 2.95312 1.25Z'
                                stroke='#252F3F'
                                stroke-width='1.5'
                            />
                        </svg>
                        {/* section icons ends */}

                        <img
                            src={Avatar}
                            alt='Avatar'
                            className='ml-4 rounded-3xl h-8 w-8 object-cover cursor-pointer'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

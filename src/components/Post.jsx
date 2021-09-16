import Avatar from '../images/avatar-post.png';
import PostImage from '../images/pic-post.png';

const Post = ({ post }) => {
    return (
        <div className='my-8 w-full bg-white rounded-md border-solid border border-gray-200'>
            <div className='flex justify-between py-4 px-4'>
                <div className='flex items-center'>
                    <div className='post-img'>
                        <img
                            src={Avatar}
                            alt=''
                            className='rounded-3xl h-12 w-12 object-cover cursor-pointer mr-4'
                        />
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-bold text-sm'>Elon Musk</p>
                        <p className='text-xs text-gray-400'>elonmusk</p>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <svg
                        width='16'
                        height='4'
                        viewBox='0 0 16 4'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mt-2'
                    >
                        <path
                            d='M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z'
                            fill='#374151'
                        />
                        <path
                            d='M10 2C10 3.10457 9.10457 4 8 4C6.89543 4 6 3.10457 6 2C6 0.895431 6.89543 0 8 0C9.10457 0 10 0.895431 10 2Z'
                            fill='#374151'
                        />
                        <path
                            d='M14 4C15.1046 4 16 3.10457 16 2C16 0.895431 15.1046 0 14 0C12.8954 0 12 0.895431 12 2C12 3.10457 12.8954 4 14 4Z'
                            fill='#374151'
                        />
                    </svg>
                </div>
            </div>
            <div className='my-1'>
                <p className='text-sm mb-4 px-4'>{post.description}</p>
                <img src={PostImage} alt='a man on the water' />
            </div>
            <div className='flex justify-between py-4 px-4'>
                <div className='cursor-pointer'>
                    <div className='flex mb-2'>
                        <svg
                            width='25'
                            height='22'
                            viewBox='0 0 25 22'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='mr-4'
                        >
                            <path
                                d='M22.6562 1.95312C20.0781 -0.203125 16.2812 0.125 13.8906 2.60938L13 3.54688L12.0625 2.60938C10.1406 0.640625 6.29688 -0.578125 3.29688 1.95312C0.34375 4.48438 0.203125 8.98438 2.82812 11.7031L11.9219 21.0781C12.2031 21.3594 12.5781 21.5 12.9531 21.5C13.375 21.5 13.75 21.3594 14.0312 21.0781L23.125 11.7031C25.75 8.98438 25.6094 4.48438 22.6562 1.95312ZM22.0469 10.6719L13 20.0469L3.90625 10.6719C2.125 8.79688 1.75 5.28125 4.28125 3.125C6.85938 0.921875 9.85938 2.51562 10.9844 3.64062L13 5.70312L14.9688 3.64062C16.0469 2.51562 19.0938 0.921875 21.6719 3.125C24.2031 5.28125 23.8281 8.79688 22.0469 10.6719Z'
                                fill='#252F3F'
                            />
                        </svg>

                        <svg
                            width='26'
                            height='22'
                            viewBox='0 0 26 22'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='mr-4'
                        >
                            <path
                                d='M12.529 1.5625C18.5349 1.5625 23.4665 5.41992 23.4665 10.1562C23.4665 14.8926 18.5349 18.75 12.529 18.75C11.113 18.75 9.74583 18.5547 8.42747 18.1641L7.69505 17.9199L7.06028 18.3594C5.93723 19.1406 4.22825 20.0684 2.07981 20.3125C2.66575 19.5801 3.49583 18.3105 4.03294 16.8945L4.37473 15.9668L3.73997 15.2832C2.32395 13.7695 1.59153 12.0117 1.59153 10.1562C1.59153 5.41992 6.47434 1.5625 12.529 1.5625ZM12.529 0C5.59544 0 0.0290319 4.58984 0.0290319 10.1562C0.0290319 12.5 0.956766 14.6484 2.56809 16.3574C1.8845 18.2617 0.370829 19.9219 0.322001 19.9219C-0.0197962 20.2637 -0.0686243 20.752 0.07786 21.1914C0.273173 21.6309 0.712626 21.875 1.15208 21.875C4.17942 21.875 6.52317 20.6543 7.98802 19.6289C9.40403 20.0684 10.9177 20.3125 12.529 20.3125C19.4138 20.3125 25.029 15.7715 25.029 10.1562C25.029 4.58984 19.4138 0 12.529 0Z'
                                fill='#252F3F'
                            />
                        </svg>

                        <svg
                            width='20'
                            height='22'
                            viewBox='0 0 20 22'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.95312 1.25H17.9531C18.6435 1.25 19.2031 1.80964 19.2031 2.5V19.2837C19.2031 20.3834 17.8667 20.9679 17.052 20.2025C15.7734 19.0013 14.3477 17.6823 13.1877 16.6617C12.609 16.1526 12.0876 15.7099 11.6798 15.3916C11.4775 15.2336 11.2902 15.0961 11.1309 14.9946C11.0521 14.9444 10.9655 14.8936 10.8779 14.8527C10.8154 14.8236 10.6528 14.75 10.4531 14.75C10.2535 14.75 10.0908 14.8236 10.0284 14.8527C9.94074 14.8936 9.85413 14.9444 9.77533 14.9946C9.61603 15.0961 9.42874 15.2336 9.22643 15.3916C8.81869 15.7099 8.2973 16.1526 7.7186 16.6617C6.55853 17.6823 5.13288 19.0013 3.85429 20.2025C3.03957 20.9679 1.70312 20.3834 1.70312 19.2837V2.5C1.70312 1.80964 2.26277 1.25 2.95312 1.25Z'
                                stroke='#252F3F'
                                stroke-width='1.5'
                            />
                        </svg>
                    </div>
                    <div className='text-xs text-gray-400'>{post.date}</div>
                </div>
                <button className='text-base font-bold rounded-md bg-white border-solid border border-gray-200 text-center px-10 py-2'>
                    Share
                </button>
            </div>
        </div>
    );
};

export default Post;

import SidebarCardAvatar from '../images/avatar-suggestion.png';

const SidebarCard = () => {
    return (
        <div className='h-32 bg-gray-200 pt-12 rounded-md items-end bg-sidebarCardBg my-6'>
            <div className='flex justify-between py-4 px-4 items-center'>
                <div className='flex items-center'>
                    <div className='post-img'>
                        <img
                            src={SidebarCardAvatar}
                            alt=''
                            className='rounded-3xl h-12 w-12 object-cover cursor-pointer mr-4'
                        />
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-bold text-sm text-white'>
                            Alex Lundqvist
                        </p>
                        <p className='text-xs text-white opacity-60'>
                            alexlundqvist
                        </p>
                    </div>
                </div>
                <div className='cursor-pointer '>
                    <svg
                        width='16'
                        height='16'
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M14.2995 0.875H4.92453C4.13351 0.875 3.51828 1.51953 3.51828 2.28125V3.6875H2.11203C1.32101 3.6875 0.70578 4.33203 0.70578 5.09375V14.4688C0.70578 15.2598 1.32101 15.875 2.11203 15.875H11.487C12.2487 15.875 12.8933 15.2598 12.8933 14.4688V13.0625H14.2995C15.0612 13.0625 15.7058 12.4473 15.7058 11.6562V2.28125C15.7058 1.51953 15.0612 0.875 14.2995 0.875ZM11.3112 14.4688H2.28781C2.17062 14.4688 2.11203 14.4102 2.11203 14.293V5.26953C2.11203 5.18164 2.17062 5.09375 2.28781 5.09375H3.51828V11.6562C3.51828 12.4473 4.13351 13.0625 4.92453 13.0625H11.487V14.293C11.487 14.4102 11.3991 14.4688 11.3112 14.4688ZM14.1237 11.6562H5.10031C4.98312 11.6562 4.92453 11.5977 4.92453 11.4805V2.45703C4.92453 2.36914 4.98312 2.28125 5.10031 2.28125H14.1237C14.2116 2.28125 14.2995 2.36914 14.2995 2.45703V11.4805C14.2995 11.5977 14.2116 11.6562 14.1237 11.6562Z'
                            fill='white'
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SidebarCard;

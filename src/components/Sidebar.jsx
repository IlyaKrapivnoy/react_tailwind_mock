import SidebarAvatar from '../images/avatar.png';
import SidebarCard from './SidebarCard';

const Sidebar = () => {
    return (
        <div className='w-2/6 mt-16'>
            <div className='flex justify-between py-4 px-4'>
                <div className='flex items-center'>
                    <div className='post-img'>
                        <img
                            src={SidebarAvatar}
                            alt=''
                            className='rounded-3xl h-12 w-12 object-cover cursor-pointer mr-4'
                        />
                    </div>
                    <div className='cursor-pointer'>
                        <p className='font-bold text-sm'>Alex Lundqvist</p>
                        <p className='text-xs text-gray-400'>alexlundqvist</p>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <button className='text-sm text-blue-500 font-bold'>
                        Log out
                    </button>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='text-gray-400 text-base font-bold'>
                    Suggestions
                </div>
                <div className='flex -mx-2'>
                    <svg
                        width='21'
                        height='20'
                        viewBox='0 0 21 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mx-2 cursor-pointer'
                    >
                        <path
                            d='M9.5 13L6.5 10M6.5 10L9.5 7M6.5 10L14.5 10M1.5 10C1.5 5.02944 5.52944 1 10.5 1C15.4706 1 19.5 5.02944 19.5 10C19.5 14.9706 15.4706 19 10.5 19C5.52944 19 1.5 14.9706 1.5 10Z'
                            stroke='#374151'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </svg>
                    <svg
                        width='21'
                        height='20'
                        viewBox='0 0 21 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='mx-2 cursor-pointer'
                    >
                        <path
                            d='M11.5 7L14.5 10M14.5 10L11.5 13M14.5 10L6.5 10M19.5 10C19.5 14.9706 15.4706 19 10.5 19C5.52944 19 1.5 14.9706 1.5 10C1.5 5.02944 5.52944 1 10.5 1C15.4706 1 19.5 5.02944 19.5 10Z'
                            stroke='#374151'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                    </svg>
                </div>
            </div>
            <SidebarCard />
            <SidebarCard />
            <SidebarCard />
        </div>
    );
};

export default Sidebar;

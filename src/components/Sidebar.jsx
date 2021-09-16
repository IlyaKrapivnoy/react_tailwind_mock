import SidebarAvatar from '../images/avatar.png';

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
        </div>
    );
};

export default Sidebar;

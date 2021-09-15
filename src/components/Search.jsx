const Search = () => {
    return (
        <div>
            <div className='hidden lg:flex relative rounded-md shadow-sm '>
                <input
                    type='text'
                    name='price'
                    id='price'
                    className=' block w-full px-7 py-2 sm:text-sm rounded-md bg-gray-100 border-solid border-2 border-gray-200  text-center'
                    placeholder='Search'
                />
            </div>
        </div>
    );
};

export default Search;

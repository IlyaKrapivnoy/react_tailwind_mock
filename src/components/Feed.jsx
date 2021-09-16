import NewPost from './NewPost';
import Post from './Post';

const Feed = () => {
    return (
        <div className='w-4/6 mr-6'>
            <NewPost />
            <Post />
        </div>
    );
};

export default Feed;

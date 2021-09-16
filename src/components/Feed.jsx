import NewPost from './NewPost';
import Post from './Post';

const Feed = () => {
    return (
        <div className='w-4/6 mr-6 mt-16'>
            <NewPost />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Feed;

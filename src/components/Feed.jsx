import NewPost from './NewPost';
import MorePosts from './MorePosts';
import Post from './Post';
import { Posts } from '../data';

const Feed = () => {
    return (
        <div className='w-4/6 mr-6 mt-16 mb-10'>
            <NewPost />
            {Posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
            <MorePosts />
        </div>
    );
};

export default Feed;

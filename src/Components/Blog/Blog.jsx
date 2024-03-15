import PropTypes from 'prop-types';
import { IoBookmarksSharp } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead}) => {
    // console.log(blog);

    const { title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full rounded-xl' src={cover}></img>
            <div className='flex justify-between mb-4 mt-4'>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" srcSet="" />
                    <div className='ml-4'>
                        <h3 className='text-xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='text-2xl ml-2 text-green-700'><IoBookmarksSharp /></button>
                </div>
            </div>
            <h2 className='text-4xl font-semibold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='m-2'><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='btn mt-10 text-purple-600 font-bold underline ml-2'> Mark as Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;
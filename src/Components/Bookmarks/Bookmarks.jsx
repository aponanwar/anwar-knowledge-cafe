import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';



const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 ml-4 bg-gray-100 rounded-lg">
            <div>
                <h3 className='text-2xl text-center m-5 bg-white pt-5 pb-5 rounded-lg'>Reading Spent Time: {readingTime} Min</h3>
            </div>
            <h2 className="text-3xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;
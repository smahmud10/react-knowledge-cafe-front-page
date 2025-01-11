import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks,readingTime}) => {
   return (
      <div className="ml-5 bg-teal-100 md:w-1/3 rounded-xl">
         <h3 className="my-3 text-4xl text-center">Reading Time: {readingTime}</h3>
         <hr className="my-3 text-red-600" />
         <h2 className="text-3xl text-center">Bookmarks {bookmarks.length}</h2>
         {
            bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark ={ bookmark}></Bookmark>)
         }
      </div>
   );
};
Bookmarks.propTypes = {
   bookmarks: PropTypes.array.isRequired,
   readingTime: PropTypes.number.isRequired
 };

export default Bookmarks;
import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
   return (
      <div className="ml-5 bg-teal-100 md:w-1/3 rounded-xl">
         <h2 className="text-3xl text-center">Bookmarks {bookmarks.length}</h2>
         {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark ={ bookmark}></Bookmark>)
         }
      </div>
   );
};
Bookmarks.propTypes = {
   bookmarks: PropTypes.array.isRequired,
 };

export default Bookmarks;

import PropTypes from 'prop-types';

const Blog = ({blog}) => {
   const {title, author, content} = blog;
   return (
      <div>
         <h2 className='text-4xl'>{title}</h2>
      </div>
   );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired,
}
export default Blog;
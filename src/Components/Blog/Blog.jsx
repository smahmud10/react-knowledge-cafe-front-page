
import PropTypes from 'prop-types';
import { GoBookmarkFill } from "react-icons/go";

const Blog = ({blog,handleAddTobookmark}) => {
   const {title, author, cover,posted_date,reading_time ,hashtags} = blog;
   return (
      <div className='my-20 space-y-8 '>

         <div className='mb-20'>
         <img className='w-auto rounded-lg' src={cover} alt={`Cover picture of title ${title}`} />
         </div>
         <div className='flex justify-between '>

            <div className='flex space-x-2'>
               <div>
               <img className=' w-14' src={author.author_img} alt="" />
               </div>
               <div>
                  <h3 className='text-2xl'>{author.name}</h3>
                  <p>{posted_date}</p>
               </div>
            </div>
            <div className='flex items-center'>
               <span>{reading_time} min read</span>
               <button
               onClick={()=>handleAddTobookmark(blog)}
               className='ml-2 text-3xl text-sky-400 '><GoBookmarkFill></GoBookmarkFill></button>
            </div>
         </div>
         <h2 className='text-4xl'>{title}</h2>
         <p>{
            hashtags.map((hash,idx )=><span key={idx}><a>#{hash}</a></span>)
            }</p>
      </div>
   );
};

Blog.propTypes = {
   blog: PropTypes.object.isRequired,
   handleAddToBookmark: PropTypes.func.isRequired,
}
export default Blog;
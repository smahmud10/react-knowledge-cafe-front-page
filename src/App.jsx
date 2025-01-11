import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
const [bookmarks,setBookmarks] = useState([]);
const[readingTime,setReadingTime] = useState(0);

const handleAddToBookmark = (blog) =>{
  console.log(blog)
 const newBookmarks = [...bookmarks,blog];
 console.log(newBookmarks);
 setBookmarks(newBookmarks);
};
const handleMarkAsRead = (id,time)=>{
const newTime =readingTime + time;
setReadingTime(newTime);
console.log("remove",id)
const remainingbookmarks =bookmarks.filter(bookmark=>bookmark.id !==id);
setBookmarks(remainingbookmarks);
};

  return (
    <>

       <Header></Header>
      <div className='mx-auto my-5 md:flex max-w-7xl '>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks = {bookmarks} readingTime ={readingTime} ></Bookmarks>
      </div>
    </>
  )
}


export default App

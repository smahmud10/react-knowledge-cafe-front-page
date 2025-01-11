import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
const [bookmarks,setBookmarks] = useState([]);

const handleAddTobookmark = (blog) =>{
  console.log(blog)
 const newBookmarks = [...bookmarks,blog];
 console.log(newBookmarks);
 setBookmarks(newBookmarks);
}

  return (
    <>

       <Header></Header>
      <div className='mx-auto my-5 md:flex max-w-7xl '>
      <Blogs handleAddTobookmark ={handleAddTobookmark}></Blogs>
      <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App

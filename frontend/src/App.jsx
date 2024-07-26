import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { PostBlog } from './pages/PostBlog'
import { Blogs } from './pages/Blogs'
import { MyBlogs } from './pages/MyBlogs'
import { Profile } from './pages/Profile'
import { FullBlog } from './pages/FullBlog'
import './App.css'


function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
    <Route path='/postblog' element={<PostBlog/>}/>
    <Route path="/blog/:id" element={<FullBlog />} />
    <Route path='/myprofile' element={<Profile/>}/>
    <Route path='/myblogs' element={<MyBlogs/>}/>
    <Route path='/profile' element={<Profile/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
